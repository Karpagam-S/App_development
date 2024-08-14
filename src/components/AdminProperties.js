import React, { useState, useEffect } from 'react';

const AdminProperties = () => {
    const [properties, setProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch properties from the backend
        const fetchProperties = async () => {
            const response = await fetch('/api/properties');
            const data = await response.json();
            setProperties(data);
        };
        fetchProperties();
    }, []);

    const addProperty = () => {
        // Function to add a new property
    };

    const editProperty = (id) => {
        // Function to edit an existing property
    };

    const deleteProperty = (id) => {
        // Function to delete a property
    };

    const filteredProperties = properties.filter(property => 
        property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Manage Properties</h1>
            <input 
                type="text" 
                placeholder="Search properties..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={addProperty}>Add Property</button>
            <ul>
                {filteredProperties.map((property) => (
                    <li key={property.id}>
                        <h2>{property.name}</h2>
                        <p>{property.description}</p>
                        <p>{property.price}</p>
                        <button onClick={() => editProperty(property.id)}>Edit</button>
                        <button onClick={() => deleteProperty(property.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminProperties;
