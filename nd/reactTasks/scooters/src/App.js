import React, { useState, useEffect } from "react";
import ScooterList from "./components/ScooterList";
import ScooterForm from "./components/ScooterForm";
import Statistics from "./components/Statistics";
import SortingButtons from "./components/SortingButtons";

const App = () => {
  const [scooters, setScooters] = useState([]);
  const [sortBy, setSortBy] = useState(null); // "mileage" or "date"

  // Load scooters from localStorage on initial load
  useEffect(() => {
    const storedScooters = JSON.parse(localStorage.getItem("scooters")) || [];
    setScooters(storedScooters);
  }, []);

  // Update localStorage whenever scooters state changes
  useEffect(() => {
    localStorage.setItem("scooters", JSON.stringify(scooters));
  }, [scooters]);

  // Add new scooter
  const addScooter = (newScooter) => {
    setScooters([...scooters, newScooter]);
  };

  // Edit an existing scooter
  const editScooter = (updatedScooter) => {
    const updatedScooters = scooters.map((scooter) =>
      scooter.id === updatedScooter.id ? updatedScooter : scooter
    );
    setScooters(updatedScooters);
  };

  // Delete a scooter
  const deleteScooter = (id) => {
    setScooters(scooters.filter((scooter) => scooter.id !== id));
  };

  // Handle sorting
  const handleSort = (type) => {
    const sortedScooters = [...scooters];
    if (type === "mileage") {
      sortedScooters.sort((a, b) => a.totalRideKilometres - b.totalRideKilometres);
    } else if (type === "date") {
      sortedScooters.sort(
        (a, b) => new Date(a.lastUseTime) - new Date(b.lastUseTime)
      );
    }
    setScooters(sortedScooters);
  };

  return (
    <div className="app">
      <Statistics scooters={scooters} />
      <ScooterForm addScooter={addScooter} />
      <SortingButtons handleSort={handleSort} />
      <ScooterList
        scooters={scooters}
        deleteScooter={deleteScooter}
        editScooter={editScooter}
      />
    </div>
  );
};

export default App;








// import React, { useState, useEffect } from "react";
// import ScooterForm from "./ScooterForm"; // Assuming ScooterForm is in the same folder

// const App = () => {
//   const [scooters, setScooters] = useState([]);

//   // Load scooters from localStorage when the app starts
//   useEffect(() => {
//     const storedScooters = JSON.parse(localStorage.getItem("scooters")) || [];
//     setScooters(storedScooters);
//   }, []);

//   // Save scooters to localStorage whenever the scooters state changes
//   useEffect(() => {
//     localStorage.setItem("scooters", JSON.stringify(scooters));
//   }, [scooters]);

//   const addScooter = (newScooter) => {
//     setScooters([...scooters, newScooter]);
//   };

//   const deleteScooter = (id) => {
//     setScooters(scooters.filter(scooter => scooter.id !== id));
//   };

//   const editScooter = (updatedScooter) => {
//     setScooters(scooters.map(scooter => 
//       scooter.id === updatedScooter.id ? updatedScooter : scooter
//     ));
//   };

//   return (
//     <div>
//       <h1>Kolt Scooter Rental</h1>
//       <ScooterForm addScooter={addScooter} />
//       <ul>
//         {scooters.map(scooter => (
//           <li key={scooter.id}>
//             <p>
//               Registration Code: {scooter.registrationCode}
//               <br />
//               Last Use: {new Date(scooter.lastUseTime).toLocaleString()}
//               <br />
//               Total Kilometres: {scooter.totalRideKilometres} km
//               <br />
//               Status: {scooter.isBusy === 1 ? "Busy" : "Free"}
//             </p>
//             <button onClick={() => deleteScooter(scooter.id)}>Delete</button>
//             <button onClick={() => editScooter(scooter)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
