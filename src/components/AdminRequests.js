import React, { useState, useEffect } from 'react';

const AdminRequests = () => {
    const [requests, setRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch maintenance requests from the backend
        const fetchRequests = async () => {
            const response = await fetch('/api/requests');
            const data = await response.json();
            setRequests(data);
        };
        fetchRequests();
    }, []);

    const updateRequestStatus = (id, status) => {
        // Function to update the status of a request
    };

    const filteredRequests = requests.filter(request => 
        request.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Maintenance Requests</h1>
            <input 
                type="text" 
                placeholder="Search requests..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredRequests.map((request) => (
                    <li key={request.id}>
                        <h2>{request.title}</h2>
                        <p>{request.description}</p>
                        <p>Status: {request.status}</p>
                        <button onClick={() => updateRequestStatus(request.id, 'In Progress')}>In Progress</button>
                        <button onClick={() => updateRequestStatus(request.id, 'Completed')}>Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminRequests;
