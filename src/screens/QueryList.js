import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';  // Import functions from v9+ SDK
import SecureLS from "secure-ls";
// import { Link } from 'react-router-dom';
import QueryDetail from './QueryDetail';
const ls = new SecureLS({ encodingType: "aes" });

export default function QueryList() {
    const [userId, setUserId] = useState(null);
    const [queries, setQueries] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedQueryId, setSelectedQueryId] = useState(null);
    console.log(userId)
    useEffect(() => {
        const id = ls.get("user_id");
        setUserId(id);

        // Base reference to the 'queries' collection
        const queryRef = collection(db, 'queries');

        // Create the Firestore query based on search term
        let finalQuery;
        if (search) {
            finalQuery = query(
                queryRef,
                where('title', '>=', search),
                where('title', '<=', search + '\uf8ff')
            );
        } else {
            finalQuery = query(
                queryRef,
                orderBy('createdAt', 'desc')
            );
        }

        // Real-time listener
        const unsubscribe = onSnapshot(finalQuery, (querySnapshot) => {
            const fetchedQueries = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setQueries(fetchedQueries);
        });

        // Clean up listener on unmount
        return () => unsubscribe();
    }, [search]);

    console.log(queries)

    const handleQuerySelect = (id) => {
        setSelectedQueryId(id); // Update selected queryId
    };

    return (
        <div className='p-1 m-2 relative overflow-hidden'>
            <div className='border-4 rounded-lg'>
                <div className='flex p-6'>
                    {/* Search option */}
                    <div className='flex flex-col flex-initial w-1/3'>
                        <div className="mt-2 justify-center">
                            <input
                                type="text"
                                placeholder="Search queries..."
                                className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className='pt-2 '>
                            <div className='text-white border rounded-md bg-green-400 justify-center'>
                                {queries.map((query) => (
                                    <div key={query.id}
                                        onClick={() => handleQuerySelect(query.id)}
                                        className='p-2 m-2 bg-gray-800 rounded-md cursor-pointer'
                                    >
                                        <h3>{query.title}</h3>
                                        <p>{query.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*  QueryDetail component */}
                    <div className='flex-initial px-8 py-14 '>
                        {selectedQueryId && <QueryDetail queryId={selectedQueryId} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
