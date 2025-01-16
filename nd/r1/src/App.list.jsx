// REACT List


// const seaPlaners = [

//   {id: 1, type: 'man', name: 'Lina', color: 'blue'},

//   {id: 2, type: 'car', name: 'Opel', color: 'red'},

//   {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},

//   {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},

//   {id: 5, type: 'man', name: 'Tomas', color: 'green'},

//   {id: 6, type: 'animal', name: 'Bebras', color: 'red'},

//   {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},

//   {id: 8, type: 'car', name: 'MB', color: 'blue'},

//   {id: 9, type: 'car', name: 'ZIL', color: 'red'},

//   {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},

// ];




// Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.

// Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).

// Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).

// Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti tą patį, visą, masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t. Viso 3 kartus).

// Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.

// Kiekviename uždavinyje galima susikurti kiek reikia papildomų komponentų.

// Visuose uždaviniuose name savybę reikia nudažyti spalva, kuri yra color savybėje.

import React from 'react';

// Sample data for seaPlaners
const seaPlaners = [
  { id: 1, type: 'man', name: 'Lina', color: 'blue' },
  { id: 2, type: 'car', name: 'Opel', color: 'red' },
  { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
  { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
  { id: 5, type: 'man', name: 'Tomas', color: 'green' },
  { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
  { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
  { id: 8, type: 'car', name: 'MB', color: 'blue' },
  { id: 9, type: 'car', name: 'ZIL', color: 'red' },
  { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

// **Task 1: Bala Component** - Display seaPlaners list
const Bala = () => {
  return (
    <div>
      <h2>Bala Component</h2>
      {seaPlaners.map((item) => (
        <div key={item.id} style={{ color: item.color }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

// **Task 2: Tvenkinys and Daiktas Components** - Filter even and odd IDs
const Daiktas = ({ item }) => {
  return <div style={{ color: item.color }}>{item.name}</div>;
};

const Tvenkinys = () => {
  return (
    <div>
      <h2>Tvenkinys Component</h2>
      {/* Even IDs */}
      <div>
        {seaPlaners
          .filter(item => item.id % 2 === 0)
          .map(item => <Daiktas key={item.id} item={item} />)}
      </div>
      
      {/* Odd IDs */}
      <div>
        {seaPlaners
          .filter(item => item.id % 2 !== 0)
          .map(item => <Daiktas key={item.id} item={item} />)}
      </div>
    </div>
  );
};

// **Task 3: Jura, Valtis, Laivas, Sala Components** - Categorize based on type
const Valtis = ({ items }) => {
  return (
    <div>
      <h3>Valtis Component</h3>
      {items.filter(item => item.type === 'man').map(item => (
        <div key={item.id} style={{ color: item.color }}>{item.name}</div>
      ))}
    </div>
  );
};

const Laivas = ({ items }) => {
  return (
    <div>
      <h3>Laivas Component</h3>
      {items.filter(item => item.type === 'car').map(item => (
        <div key={item.id} style={{ color: item.color }}>{item.name}</div>
      ))}
    </div>
  );
};

const Sala = ({ items }) => {
  return (
    <div>
      <h3>Sala Component</h3>
      {items.filter(item => item.type === 'animal').map(item => (
        <div key={item.id} style={{ color: item.color }}>{item.name}</div>
      ))}
    </div>
  );
};

const Jura = () => {
  return (
    <div>
      <h2>Jura Component</h2>
      <Valtis items={seaPlaners} />
      <Laivas items={seaPlaners} />
      <Sala items={seaPlaners} />
      {seaPlaners
        .filter(item => item.type === 'fish')
        .map(item => (
          <div key={item.id} style={{ color: item.color }}>
            {item.name}
          </div>
        ))}
    </div>
  );
};

// **Task 4: Vandenynas, Tipas, Vardas, Spalva Components** - Sort by type, name, color
const Tipas = ({ items }) => {
  return (
    <div>
      <h3>Tipas Component</h3>
      {items
        .slice()
        .sort((a, b) => a.type.localeCompare(b.type))
        .map(item => (
          <div key={item.id} style={{ color: item.color }}>{item.type}</div>
        ))}
    </div>
  );
};

const Vardas = ({ items }) => {
  return (
    <div>
      <h3>Vardas Component</h3>
      {items
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => (
          <div key={item.id} style={{ color: item.color }}>{item.name}</div>
        ))}
    </div>
  );
};

const Spalva = ({ items }) => {
  return (
    <div>
      <h3>Spalva Component</h3>
      {items
        .slice()
        .sort((a, b) => a.color.localeCompare(b.color))
        .map(item => (
          <div key={item.id} style={{ color: item.color }}>{item.color}</div>
        ))}
    </div>
  );
};

const Vandenynas = () => {
  return (
    <div>
      <h2>Vandenynas Component</h2>
      <Tipas items={seaPlaners} />
      <Vardas items={seaPlaners} />
      <Spalva items={seaPlaners} />
    </div>
  );
};

// **Task 5: Pasaulis, Namas, Narvas, Garazas, Akvariumas Components** - Categorize by type and even/odd ID
const Namas = ({ items }) => (
  <div>{items.map(item => <div key={item.id} style={{ color: item.color }}>{item.name}</div>)}</div>
);

const Narvas = ({ items }) => (
  <div>{items.map(item => <div key={item.id} style={{ color: item.color }}>{item.name}</div>)}</div>
);

const Garazas = ({ items }) => (
  <div>{items.map(item => <div key={item.id} style={{ color: item.color }}>{item.name}</div>)}</div>
);

const Akvariumas = ({ items }) => (
  <div>{items.map(item => <div key={item.id} style={{ color: item.color }}>{item.name}</div>)}</div>
);

const Pasaulis = () => {
  return (
    <div>
      <h2>Pasaulis Component</h2>
      {/* Even IDs */}
      <div>
        {seaPlaners
          .filter(item => item.id % 2 === 0)
          .map(item => (
            <div key={item.id}>
              {item.type === 'man' && <Namas items={[item]} />}
              {item.type === 'car' && <Garazas items={[item]} />}
              {item.type === 'animal' && <Narvas items={[item]} />}
              {item.type === 'fish' && <Akvariumas items={[item]} />}
            </div>
          ))}
      </div>
      
      {/* Odd IDs */}
      <div>
        {seaPlaners
          .filter(item => item.id % 2 !== 0)
          .map(item => (
            <div key={item.id}>
              {item.type === 'man' && <Namas items={[item]} />}
              {item.type === 'car' && <Garazas items={[item]} />}
              {item.type === 'animal' && <Narvas items={[item]} />}
              {item.type === 'fish' && <Akvariumas items={[item]} />}
            </div>
          ))}
      </div>
    </div>
  );
};

// Main App Component rendering all tasks
const App = () => {
  return (
    <div>
      <Bala />
      <Tvenkinys />
      <Jura />
      <Vandenynas />
      <Pasaulis />
    </div>
  );
};

export default App;



