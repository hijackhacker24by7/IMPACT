import React, { useState, useEffect } from 'react';
import SecureLS from "secure-ls";
import { db, auth } from '../firebase';
import { setDoc, Timestamp, doc, collection, addDoc } from 'firebase/firestore';

const ls = new SecureLS({ encodingType: "aes" });

function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const id = ls.get("user_id");
    setUserId(id);
  }, []);

  const submitQuery = async (e) => {
    e.preventDefault();
    
    if (!title || !desc || !tags) {
      setError("Please fill in all fields.");
      return;
    }
  
    try {
      const collectionRef = collection(db, 'queries');
      const queryDocRef = await addDoc(collectionRef, {
        title: title,
        desc: desc,
        userid: userId,
        createdAt: Timestamp.now(),
        tags: tags,
        upvotes: 0,
        checkreply:true,
      });
      setError(""); // Clear error on success
  
      const queryId = queryDocRef.id;
  
      
    } catch (err) {
      console.error(err);
      setError("Error submitting query. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full sm:w-96 bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600">Create a New Query</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={submitQuery} className="space-y-4">
          <input
            type="text"
            placeholder="Enter problem title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />

          <textarea
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 h-24"
          />

          <input
            type="text"
            placeholder="Enter tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
