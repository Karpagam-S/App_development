import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const AdminFinancials = () => {
    const [financials, setFinancials] = useState([]);

    useEffect(() => {
        // Fetch financial data from the backend
        const fetchFinancials = async () => {
            const response = await fetch('/api/financials');
            const data = await response.json();
            setFinancials(data);
        };
        fetchFinancials();
    }, []);

    const exportToCSV = () => {
        // Function to export financial data to CSV
    };

    const data = {
        labels: financials.map(f => f.title),
        datasets: [
            {
                label: 'Financial Data',
                data: financials.map(f => f.amount),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }
        ]
    };

    return (
        <div>
            <h1>Financial Reports</h1>
            <button onClick={exportToCSV}>Export to CSV</button>
            <Line data={data} />
            <ul>
                {financials.map((financial) => (
                    <li key={financial.id}>
                        <h2>{financial.title}</h2>
                        <p>{financial.description}</p>
                        <p>Amount: {financial.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminFinancials;
