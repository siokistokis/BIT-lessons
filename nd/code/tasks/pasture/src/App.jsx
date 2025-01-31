
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;







import React, { useState, useEffect } from 'react';
import './App.css';

// Animal icons (optional, you can use actual images)
const animalIcons = {
  sheep: '🐑',
  duck: '🦆',
  antelope: '🦌',
};

function App() {
  // State to store animals' data
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({ type: 'sheep', weight: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Load animals from localStorage when the component is mounted
  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem('animals')) || [];
    setAnimals(storedAnimals);
  }, []);

  // Handle form submission to add new animal
  const addAnimal = (e) => {
    e.preventDefault();
    if (newAnimal.weight && newAnimal.weight > 0) {
      const updatedAnimals = [...animals, { ...newAnimal }];
      setAnimals(updatedAnimals);
      localStorage.setItem('animals', JSON.stringify(updatedAnimals));
      setNewAnimal({ type: 'sheep', weight: '' });
    } else {
      alert('Please enter a valid weight.');
    }
  };

  // Open the modal for editing an animal
  const openModal = (index) => {
    setSelectedAnimal({ ...animals[index], index });
    setIsModalOpen(true);
  };

  // Handle deleting an animal
  const deleteAnimal = (index) => {
    const updatedAnimals = animals.filter((_, i) => i !== index);
    setAnimals(updatedAnimals);
    localStorage.setItem('animals', JSON.stringify(updatedAnimals));
    setIsModalOpen(false);
  };

  // Handle editing an animal's weight from the modal
  const handleEdit = (e) => {
    e.preventDefault();
    const newWeight = selectedAnimal.weight;
    if (newWeight && newWeight > 0) {
      const updatedAnimals = [...animals];
      updatedAnimals[selectedAnimal.index].weight = newWeight;
      setAnimals(updatedAnimals);
      localStorage.setItem('animals', JSON.stringify(updatedAnimals));
      setIsModalOpen(false);
    } else {
      alert('Please enter a valid weight.');
    }
  };

  return (
    <div className="App">
      <h1>Beautiful Pasture - Animal CRUD</h1>

      {/* Animal Addition Form */}
      <form onSubmit={addAnimal} className="animal-form">
        <label htmlFor="animalType">Animal Type:</label>
        <select
          id="animalType"
          value={newAnimal.type}
          onChange={(e) => setNewAnimal({ ...newAnimal, type: e.target.value })}
        >
          <option value="sheep">Sheep</option>
          <option value="duck">Duck</option>
          <option value="antelope">Antelope</option>
        </select>

        <label htmlFor="animalWeight">Weight (kg):</label>
        <input
          type="number"
          id="animalWeight"
          value={newAnimal.weight}
          onChange={(e) => setNewAnimal({ ...newAnimal, weight: e.target.value })}
          required
        />

        <button type="submit">Add Animal</button>
      </form>

      <div className="pasture">
        <h2>Animals in the Pasture:</h2>
        <div className="animal-cards">
          {animals.map((animal, index) => (
            <div
              key={index}
              className="animal-card"
              onClick={() => openModal(index)}
            >
              <div className="animal-icon">{animalIcons[animal.type]}</div>
              <p>{animal.type}</p>
              <p>Weight: {animal.weight} kg</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for editing an animal */}
      {isModalOpen && selectedAnimal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Animal: {selectedAnimal.type}</h3>
            <form onSubmit={handleEdit}>
              <label htmlFor="animalWeight">New Weight (kg):</label>
              <input
                type="number"
                id="animalWeight"
                value={selectedAnimal.weight}
                onChange={(e) =>
                  setSelectedAnimal({
                    ...selectedAnimal,
                    weight: e.target.value,
                  })
                }
                required
              />
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="close-btn"
              >
                Close
              </button>
            </form>
            <button
              onClick={() => deleteAnimal(selectedAnimal.index)}
              className="delete-btn"
            >
              Delete Animal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
