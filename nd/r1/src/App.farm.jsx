// REACT useState PROJECT (MyLittleFarm)


// Sukurti tuščią “Ganyklą”. Ją padalinti į dvi dalis su užrašais- Avys ir Karvės. Sukurti mygtuką “į ganyklą”, kurį paspaudus dešinė pusė būtų apgyvendinta avimis, kurias vaizduoja apskritimai, o kairė pusė karvėmis, kurias vaizduoja keturkampiai. Avių ir karvių skaičius rand 5 - 20. Kiekvieno gyvulio viduje yra random identifikacinis numeris: pvz avim A0254787, karvėm K0007898, kur skaičius yra septynženklis rand skaičius. Perkrovus puslapį avių ir karvių skaičius ir jų identifikaciniai numeriai turi nekisti (tik patį pirmą kartą “Ganykla” turi būti tuščia). Paspaudus ant avies arba karvės ji turi perbėgti į priešingą ganyklos pusę (antrą kartą paspaudus grįžti atgal). Perkrovus puslapį perbėgimai turi išlikti nepakitę. Pakartotinai paspaudus “į ganyklą”, turi atsirasti nauji gyvuliai, kaip ir pirmą kartą.

// Pastaba: karvė avių ganyklos pusėje lieka karve, o avis- avimi. Nemutuojam! Perbėgusios avys ir karvės yra dedamos į bandos galą. 


import React, { useState, useEffect } from 'react';

// Generate random animal ID
const generateAnimalId = (type) => {
  const randNumber = Math.floor(Math.random() * 10000000);
  const paddedNumber = String(randNumber).padStart(7, '0');
  return type === 'sheep' ? `A${paddedNumber}` : `K${paddedNumber}`;
};

// Generate random number of animals (between 5 and 20)
const generateAnimals = (type) => {
  const numAnimals = Math.floor(Math.random() * 16) + 5; // 5 to 20 animals
  const animals = [];
  for (let i = 0; i < numAnimals; i++) {
    animals.push({ id: generateAnimalId(type), type });
  }
  return animals;
};

const MyLittleFarm = () => {
  const [sheep, setSheep] = useState([]);
  const [cows, setCows] = useState([]);
  const [sheepSide, setSheepSide] = useState([]);
  const [cowsSide, setCowsSide] = useState([]);
  const [isGanyklaInitialized, setIsGanyklaInitialized] = useState(false);

  // Initialize animals on first load
  useEffect(() => {
    if (!isGanyklaInitialized) {
      const newSheep = generateAnimals('sheep');
      const newCows = generateAnimals('cow');
      setSheep(newSheep);
      setCows(newCows);
      setIsGanyklaInitialized(true);
    }
  }, [isGanyklaInitialized]);

  const handleAddToGanykla = () => {
    // Add animals to sides (sheep to right, cows to left)
    setSheepSide(sheep);
    setCowsSide(cows);
  };

  const handleToggleSide = (animalId, side) => {
    if (side === 'sheepSide') {
      const newSheepSide = sheepSide.filter((animal) => animal.id !== animalId);
      const movedAnimal = sheep.find((animal) => animal.id === animalId);
      setSheepSide([...newSheepSide]);
      setCowsSide([...cowsSide, movedAnimal]);
    } else {
      const newCowsSide = cowsSide.filter((animal) => animal.id !== animalId);
      const movedAnimal = cows.find((animal) => animal.id === animalId);
      setCowsSide([...newCowsSide]);
      setSheepSide([...sheepSide, movedAnimal]);
    }
  };

  return (
    <div>
      <h2>My Little Farm</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%', border: '2px solid black', padding: '10px' }}>
          <h3>Karvės</h3>
          {cowsSide.map((cow) => (
            <div
              key={cow.id}
              onClick={() => handleToggleSide(cow.id, 'cowsSide')}
              style={{
                backgroundColor: 'brown',
                width: '80px',
                height: '60px',
                textAlign: 'center',
                margin: '5px',
                color: 'white',
                padding: '5px',
                cursor: 'pointer',
              }}
            >
              {cow.id}
            </div>
          ))}
        </div>

        <div style={{ width: '45%', border: '2px solid black', padding: '10px' }}>
          <h3>Avių</h3>
          {sheepSide.map((sheep) => (
            <div
              key={sheep.id}
              onClick={() => handleToggleSide(sheep.id, 'sheepSide')}
              style={{
                backgroundColor: 'gray',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                textAlign: 'center',
                margin: '5px',
                color: 'white',
                padding: '5px',
                cursor: 'pointer',
              }}
            >
              {sheep.id}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAddToGanykla}>Į ganyklą</button>
      </div>
    </div>
  );
};

export default MyLittleFarm;
