
import '@testing-library/jest-dom';
// src/components/ScooterForm.js
import React, { useState } from "react";

const ScooterForm = ({ addScooter }) => {
  const [registrationCode, setRegistrationCode] = useState(generateRegistrationCode());
  const [lastUseTime, setLastUseTime] = useState("");
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  const generateRegistrationCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newScooter = {
      id: Date.now(),
      registrationCode,
      isBusy: isBusy ? 1 : 0,
      lastUseTime: new Date(lastUseTime).toISOString(),
      totalRideKilometres,
    };
    addScooter(newScooter);
    setLastUseTime("");
    setTotalRideKilometres(0);
    setIsBusy(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Scooter</h2>
      <p>Registration Code: {registrationCode}</p>
      <input
        type="datetime-local"
        value={lastUseTime}
        onChange={(e) => setLastUseTime(e.target.value)}
        required
      />
      <input
        type="number"
        value={totalRideKilometres}
        onChange={(e) => setTotalRideKilometres(Number(e.target.value))}
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
      <button type="submit">Add Scooter</button>
    </form>
  );
};

export default ScooterForm;
