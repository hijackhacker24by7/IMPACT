import React, { useState, useEffect } from 'react';
import { getFirestore, doc, onSnapshot, collection, getDocs, addDoc, Timestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure you are initializing Firestore correctly
import SecureLS from "secure-ls";


const ls = new SecureLS({ encodingType: "aes" });

function QueryDetail({ queryId }) {
  const [userId, setUserId] = useState(null);
  const [query, setQuery] = useState(null);
  const [replies, setReplies] = useState([]);
  const [openReplyId, setOpenReplyId] = useState(null); // Tracks which reply's input is open
  const [newReplyText, setNewReplyText] = useState(''); // Text for the new reply
  const [newreply, setnewreply] = useState("");
  useEffect(() => {
    const id = ls.get("user_id");
    setUserId(id);
  }, []);

  useEffect(() => {
    const fetchQueryAndReplies = async () => {
      const firestore = getFirestore(); // Initialize Firestore
      const queryRef = doc(firestore, 'queries', queryId); // Get the document reference

      // Fetch Query in Real-time
      const unsubscribe = onSnapshot(queryRef, (doc) => {
        if (doc.exists()) {
          setQuery(doc.data());
        }
      });

      // Fetch Replies
      const ReplyRef = await getDocs(collection(queryRef, 'replies'));
      const repliesData = ReplyRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReplies(repliesData);

      return unsubscribe; // Return cleanup function
    };

    const unsubscribe = fetchQueryAndReplies();

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [queryId]);

  if (!query) return <p>Loading...</p>;

  const handleOpenReply = (replyId) => {
    // Toggle the reply input box visibility based on the clicked reply
    setOpenReplyId(replyId === openReplyId ? null : replyId);
  };

  const handleSendReply = async (parentReply) => {
    if (!newReplyText.trim()) return; // Do nothing if the input is empty

    try {
      const address = `queries/${parentReply.address}`; // Get address for nested reply

      // Use the parent reply's address to determine the subcollection path
      const parentReplyRef = doc(db, address);
      const nestedRepliesRef = collection(parentReplyRef, 'replies');

      // Add the new reply and get its document reference
      const newReplyDocRef = await addDoc(nestedRepliesRef, {
        text: newReplyText,
        createdAt: Timestamp.now(),
        createdBy: userId,
        edited: false,
      });

      // Update the newly added reply with its address
      await setDoc(newReplyDocRef, {
        text: newReplyText,
        createdAt: Timestamp.now(),
        createdBy: userId,
        edited: false,
        address: `${parentReply.address}/replies/${newReplyDocRef.id}`, // Set the address after obtaining the newReplyDocRef ID
      }, { merge: true });

      // Reset the state
      setNewReplyText('');
      setOpenReplyId(null);

      // Fetch replies again to update the UI
      const updatedReplies = await getDocs(collection(doc(db, 'queries', queryId), 'replies'));
      setReplies(updatedReplies.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      console.log('Reply added successfully.');
    } catch (err) {
      console.error('Error adding reply:', err);
    }
  };

  const handleNewReply = async () => {
    if (!newreply.trim()) {
      console.error("Reply cannot be empty");
      return;
    }

    try {
      // Reference to the main query document
      const queryRef = doc(db, `queries/${queryId}`);

      // Reference to the replies subcollection
      const repliesCollectionRef = collection(queryRef, 'replies');

      // Add a new reply document
      const firstReplyDocRef = await addDoc(repliesCollectionRef, {
        text: newreply, // Use the entered reply text
        createdAt: Timestamp.now(),
        edited: false,
        createdBy: userId,
      });

      // Update the newly created reply document with its address
      await setDoc(
        firstReplyDocRef,
        {
          address: `${queryId}/replies/${firstReplyDocRef.id}`,
        },
        { merge: true }
      );

      // Update a field in the main query document to `false`
      if (query.checkreply) {
        await setDoc(
          queryRef,
          {
            checkreply: false, // Assuming the field you want to update is named `checkreply`
          },
          { merge: true }
        );
      }

      console.log("Reply added, and query field updated to false.");

      // Optionally, fetch updated replies to refresh the UI
      const updatedReplies = await getDocs(repliesCollectionRef);
      setReplies(updatedReplies.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      // Reset the new reply input
      setnewreply("");
    } catch (err) {
      console.error("Error submitting reply:", err);
    }
  };

  return (
    <div className=' relative bg-cyan-950 w-[200%] overflow-hidden border-2 rounded-lg'>
      <div className='text-white pl-8 p-5 '>

        <div className='border-b '>
          <h2 className='uppercase font-bold text-xl pb-4'>
            {query.title}
          </h2>
          <p className='capitalize text-l text-lg text-amber-600'>
            {query.desc}
          </p>
        </div>

        {/* <div className=' border-b border-white pb-2'> */}
          {/* <div className='pt-2'>
            <h3 className='apitalize text-l text-lg '>
              Replies </h3>
          </div> */}
          <div className=''>
            <ul>
              {replies.map((reply) => (
                <li key={reply.id}>
                  <p
                    className='pl-5 capitalize text-l text-sm text-gray-300'
                  >
                    {reply.text}</p>
                  <button 
                  className=''
                  onClick={() => handleOpenReply(reply.id)}>{"[+]"}</button>
                  {openReplyId === reply.id && (
                    <div class="pl-4 -mt-9 card flex items-center justify-center w-[100%] min-h-full">
                      <div class="relative p-4 w-full max-w-xl max-h-full">
                        <div class="relative bg-white text-black rounded-lg shadow">
                          <form
                            method=""
                            enctype="multipart/form-data"
                            class="p-4 md:p-5"
                          >
                            <input type="hidden" name="" value="" />

                            <div class="relative mb-4">
                              <textarea
                                name="content"
                                id="reply"
                                class="p-4 pb-12 w-full h-28 bg-gray-100 border-none rounded-lg text-md focus:border-none focus:ring-0 focus:outline-none resize-none"
                                placeholder={`Reply to ${reply.text}`}
                                value={newReplyText}
                                onChange={(e) => setNewReplyText(e.target.value)}
                                required=""
                              ></textarea>

                              <div id="preview" class="mb-4"></div>

                              <div class="absolute bottom-0 inset-x-0 p-2 rounded-b-md bg-none">
                                <div class="flex justify-between items-center">
                                  <div class="flex items-center">
                                    <button
                                      type="button"
                                      class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                                    >
                                      <label for="image" class="cursor-pointer">
                                        <svg
                                          class="flex-shrink-0 size-6"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                          ></path>
                                        </svg>
                                        <input name="image" id="image" type="file" class="hidden" />
                                      </label>
                                    </button>

                                    <button
                                      type="button"
                                      class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                                    >
                                      <label for="image" class="cursor-pointer">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="size-6"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                                          ></path>
                                        </svg>
                                        <input name="image" id="image" type="file" class="hidden" />
                                      </label>
                                    </button>

                                    <button
                                      type="button"
                                      class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="flex items-center gap-x-1">
                                    <button
                                      type="button"
                                      class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                                        ></path>
                                      </svg>
                                    </button>

                                    <button
                                      type="submit"
                                      onClick={() => handleSendReply(reply)}
                                      class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-white bg-blue-400 hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2"
                                    >
                                      <svg
                                        class="flex-shrink-0 size-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        {/* </div> */}
        <div class=" card flex items-center justify-center w-[100%] min-h-full">
          <div class="relative pt-5  w-full max-w-xl max-h-full">
            <div class="relative bg-white text-black rounded-lg shadow">
              <form
                onSubmit={handleNewReply}
                method=""
                enctype="multipart/form-data"
                class="p-4 md:p-5"
              >
                <input type="hidden" name="" value="" />

                <div class="relative mb-4">
                  <textarea
                    name="content"
                    id="reply"
                    class="p-4 pb-12 w-full h-28 bg-gray-100 border-none rounded-lg text-md focus:border-none focus:ring-0 focus:outline-none resize-none"
                    placeholder={`comment.....`}
                    value={newreply}
                    onChange={(e) => setnewreply(e.target.value)}
                    
                    required=""
                  ></textarea>

                  <div id="preview" class="mb-4"></div>

                  <div class="absolute bottom-0 inset-x-0 p-2 rounded-b-md bg-none">
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <button
                          type="button"
                          class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                        >
                          <label for="image" class="cursor-pointer">
                            <svg
                              class="flex-shrink-0 size-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              ></path>
                            </svg>
                            <input name="image" id="image" type="file" class="hidden" />
                          </label>
                        </button>

                        <button
                          type="button"
                          class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                        >
                          <label for="image" class="cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                              ></path>
                            </svg>
                            <input name="image" id="image" type="file" class="hidden" />
                          </label>
                        </button>

                        <button
                          type="button"
                          class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center gap-x-1">
                        <button
                          type="button"
                          class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                            ></path>
                          </svg>
                        </button>

                        <button
                          // onClick={handleNewReply}
                          type="submit"
                          class="inline-flex flex-shrink-0 justify-center items-center size-10 rounded-lg text-white bg-blue-400 hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2"
                        >
                          <svg
                            class="flex-shrink-0 size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryDetail;





