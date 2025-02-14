import React from "react";

const Statistics = ({ scooters }) => {
  const totalKilometers = scooters.reduce(
    (total, scooter) => total + scooter.totalRideKilometres,
    0
  );

  return (
    <div className="statistics">
      <h4>Statistics</h4>
      <p>Total Scooters: {scooters.length}</p>
      <p>Total Kilometers: {totalKilometers.toFixed(2)} km</p>
    </div>
  );
};

export default Statistics;
