import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';  // Import functions from v9+ SDK
import SecureLS from "secure-ls";
import { Link } from 'react-router-dom';
import QueryDetail from './QueryDetail';
const ls = new SecureLS({ encodingType: "aes" });

export default function QueryList() {
    const [userId, setUserId] = useState(null);
    const [queries, setQueries] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedQueryId, setSelectedQueryId] = useState(null);
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
        <div style={{ display: "flex" }}>
            <div>

            <input
                type="text"
                placeholder="Search queries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {queries.map((query) => (
                    <div key={query.id} onClick={() => handleQuerySelect(query.id)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
                        <h3>{query.title}</h3>
                        <p>{query.description}</p>
                    </div>
                ))}
            </div>
            </div>
            <div style={{ flex: 2, padding: '20px' }}>
                {selectedQueryId && <QueryDetail queryId={selectedQueryId} />} {/* Show QueryDetail based on selection */}
            </div>
        </div>
    );
}
