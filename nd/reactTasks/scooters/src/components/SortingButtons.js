import React from "react";

const SortingButtons = ({ handleSort }) => {
  return (
    <div>
      <button onClick={() => handleSort("mileage")}>Sort by Mileage</button>
      <button onClick={() => handleSort("date")}>Sort by Date</button>
    </div>
  );
};

export default SortingButtons;
