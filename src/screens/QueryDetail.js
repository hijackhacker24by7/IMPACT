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
    <div>
      <h2>{query.title}</h2>
      <p>{query.desc}</p>
      <h3>Replies</h3>
      <ul>
        {replies.map((reply) => (
          <li key={reply.id}>
            <p>{reply.text}</p>
            <button onClick={() => handleOpenReply(reply.id)}>{"[+]"}</button>
            {openReplyId === reply.id && (
              <div>
                <input
                  placeholder={`Reply to ${reply.text}`}
                  value={newReplyText}
                  onChange={(e) => setNewReplyText(e.target.value)}
                />
                <button
                  type="button"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  onClick={() => handleSendReply(reply)}
                >
                  Send
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* New reply input */}
      <input
        value={newreply}
        onChange={(e) => setnewreply(e.target.value)} // Correct way to update state
        placeholder="Write a reply"
      />
      <button onClick={handleNewReply}>Reply</button>
    </div>
  );
}

export default QueryDetail;
