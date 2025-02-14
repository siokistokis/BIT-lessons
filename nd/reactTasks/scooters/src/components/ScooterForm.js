import React, { useState } from "react";

const ScooterForm = ({ addScooter, editScooter, scooterToEdit }) => {
  // Move the function definition to the top to avoid referencing it before initialization
  const generateRegistrationCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const [registrationCode] = useState(generateRegistrationCode()); // Random code
  const [lastUseTime, setLastUseTime] = useState("");
  const [newKilometers, setNewKilometers] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newScooter = {
      id: scooterToEdit ? scooterToEdit.id : Date.now(),
      registrationCode,
      isBusy: isBusy ? 1 : 0,
      lastUseTime: scooterToEdit ? scooterToEdit.lastUseTime : new Date().toISOString(),
      totalRideKilometres: scooterToEdit
        ? scooterToEdit.totalRideKilometres + newKilometers
        : newKilometers,
    };

    if (scooterToEdit) {
      editScooter(newScooter);
    } else {
      addScooter(newScooter);
    }

    setLastUseTime("");
    setNewKilometers(0);
    setIsBusy(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{scooterToEdit ? "Edit" : "Add"} Scooter</h2>
      <p>Registration Code: {registrationCode}</p>
      <input
        type="datetime-local"
        value={lastUseTime}
        onChange={(e) => setLastUseTime(e.target.value)}
        placeholder="Last Used Time"
        required
      />
      <input
        type="number"
        value={newKilometers}
        onChange={(e) => setNewKilometers(Number(e.target.value))}
        placeholder="Kilometers Traveled"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isBusy}
          onChange={() => setIsBusy(!isBusy)}
        />
        Busy
      </label>
      <button type="submit">{scooterToEdit ? "Save" : "Add"} Scooter</button>
    </form>
  );
};

export default ScooterForm;
