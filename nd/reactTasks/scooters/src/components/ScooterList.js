import React from "react";
import ScooterForm from "./ScooterForm";

const ScooterList = ({ scooters, deleteScooter, editScooter }) => {
  return (
    <div>
      <h3>Scooter List</h3>
      {scooters.map((scooter) => (
        <div key={scooter.id} className="scooter">
          <p>
            {scooter.registrationCode} -{" "}
            {scooter.isBusy ? "Busy" : "Free"} - Last Used: {scooter.lastUseTime} -{" "}
            {scooter.totalRideKilometres} km
          </p>
          <button onClick={() => deleteScooter(scooter.id)}>Delete</button>
          <button
            onClick={() =>
              editScooter({ ...scooter, isBusy: scooter.isBusy === 1 ? true : false })
            }
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ScooterList;
