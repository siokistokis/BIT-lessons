


import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuidv4 } from "uuid";


const ScooterApp = () => {
  const [scooters, setScooters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingScooter, setEditingScooter] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newDistance, setNewDistance] = useState("");

  useEffect(() => {
    const storedScooters = JSON.parse(localStorage.getItem("scooters")) || [];
    setScooters(storedScooters);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("scooters", JSON.stringify(data));
  };

  const generateRegistrationCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const addScooter = () => {
    const newScooter = {
      id: uuidv4(),
      registrationCode: generateRegistrationCode(),
      busy: 0,
      lastUseTime: new Date().toLocaleString(),
      totalRideKilometres: 0.0,
    };
    const updatedScooters = [...scooters, newScooter];
    setScooters(updatedScooters);
    saveToLocalStorage(updatedScooters);
  };

  const deleteScooter = (id) => {
    const updatedScooters = scooters.filter((scooter) => scooter.id !== id);
    setScooters(updatedScooters);
    saveToLocalStorage(updatedScooters);
  };

  const openEditModal = (scooter) => {
    setEditingScooter(scooter);
    setIsModalOpen(true);
  };

  const saveEdit = () => {
    const updatedScooters = scooters.map((scooter) => {
      if (scooter.id === editingScooter.id) {
        return {
          ...scooter,
          lastUseTime: newDate ? new Date(newDate).toLocaleString() : scooter.lastUseTime,
          totalRideKilometres:
            scooter.totalRideKilometres + parseFloat(newDistance || 0),
          busy: editingScooter.busy,
        };
      }
      return scooter;
    });
    setScooters(updatedScooters);
    saveToLocalStorage(updatedScooters);
    setIsModalOpen(false);
  };

  const totalScooters = scooters.length;
  const totalMileage = scooters.reduce((sum, scooter) => sum + scooter.totalRideKilometres, 0).toFixed(2);

  const sortByMileage = () => {
    const sorted = [...scooters].sort((a, b) => b.totalRideKilometres - a.totalRideKilometres);
    setScooters(sorted);
  };

  const sortByLastUsed = () => {
    const sorted = [...scooters].sort((a, b) => new Date(b.lastUseTime) - new Date(a.lastUseTime));
    setScooters(sorted);
  };




  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">KOLT SCOOTER RENTAL</h1>

      <div className="flex justify-between mb-4" id="topdiv">
        <div>
          <h3><strong>TOTAL SCOOTERS:</strong> {totalScooters}</h3>
          <h3><strong>TOTAL MILEAGE:</strong> {totalMileage} km</h3>
        </div>
        <div className ="first">
          <button onClick={sortByMileage}>Sort by Mileage</button>
          <button onClick={sortByLastUsed}>Sort by Last Used Date</button>
        </div>
      </div>

      <button onClick={addScooter} className="add">Add Scooter</button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {scooters.map((scooter) => (
          <div key={scooter.id} className="card">
            <p><strong>REGISTRATION CODE:</strong> {scooter.registrationCode}</p>
            <p><strong>LAST USE TIME:</strong> {scooter.lastUseTime}</p>
            <p><strong>TOTAL RIDE KILOMETERS:</strong> {scooter.totalRideKilometres.toFixed(2)} km</p>
            <p><strong>STATUS:</strong> {scooter.busy ? "Busy" : "Free"}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={() => openEditModal(scooter)} className="edit">Edit</button>
              <button onClick={() => deleteScooter(scooter.id)} className="delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <h2 className="text-xl font-bold">Edit Scooter</h2>
          <label>Registration Code</label>
          <input value={editingScooter.registrationCode} disabled />
          <label>Last Use Time</label>
          <input value={editingScooter.lastUseTime} disabled />
          <label>New Use Date</label>
          <input type="datetime-local" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
          <label>Distance Traveled Today (km)</label>
          <input type="number" step="0.01" value={newDistance} onChange={(e) => setNewDistance(e.target.value)} />
          <label>Busy</label>
          <input type="checkbox" checked={editingScooter.busy} onChange={() => setEditingScooter({ ...editingScooter, busy: !editingScooter.busy })} />
          <button onClick={saveEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ScooterApp;