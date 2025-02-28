
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';


function AdminDashboard() {
    const [fundraisers, setFundraisers] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchFundraisers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/admin/fundraisers");
                setFundraisers(response.data);
            } catch (error) {
                console.error("Error fetching fundraisers", error);
            }
        };

        fetchFundraisers();
    }, []);

    const handleConfirm = async (id) => {
        try {
            await axios.post("http://localhost:5000/admin/confirm-fundraiser", { fundraiserId: id });
            setMessage("Fundraiser confirmed successfully!");
            setFundraisers(fundraisers.filter(f => f.id !== id)); // Remove from list after confirmation
        } catch (error) {
            console.error("Error confirming fundraiser", error);
        }
    };

    return (
        <div>
            <h2>AdminDashboard</h2>
            {message && <p>{message}</p>}
            <ul>
            {fundraisers.map(fundraiser => (
                    <li key={fundraiser.id}>
                        <h3>{fundraiser.title}</h3>
                        <p>{fundraiser.description}</p>
                        <p>Goal: £{fundraiser.goalAmount}</p>
                        <p>Organizer: {fundraiser.organizer}</p>
                        <button onClick={() => handleConfirm(fundraiser.id)} className="confirmation">Confirm</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default AdminDashboard;