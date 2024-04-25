
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    
    
    
    const [clients, setClients] = useState([]);

    // axios.get('http://127.0.0.1:8000/customer/list')

    useEffect(() => {


        // axios.get('http://localhost/mygarage-main/users')
        // axios.get('http://localhost/mygarage-main/users')
        axios.get('http://127.0.0.1:8000/users')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                console.error('Error Fetching Customers:', error);
            });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test;
