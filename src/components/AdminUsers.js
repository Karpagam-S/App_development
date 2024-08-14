import React, { useState, useEffect } from 'react';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch users from the backend
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const addUser = () => {
        // Function to add a new user
    };

    const editUser = (id) => {
        // Function to edit an existing user
    };

    const deleteUser = (id) => {
        // Function to delete a user
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Manage Users</h1>
            <input 
                type="text" 
                placeholder="Search users..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <button onClick={() => editUser(user.id)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUsers;
