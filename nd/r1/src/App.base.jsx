// REACT BASE


// Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.





// import React from 'react';

// const LabasZuiki = () => {
//   return (
//     <h1 style={{ color: 'pink' }}>LABAS, ZUIKI!</h1>
//   );
// };

// export default LabasZuiki;





// Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

// Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

// Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

// Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.



import React from 'react';

// Component 1: LabasZuiki
const LabasZuiki = () => {
  return <h1 style={{ color: 'pink' }}>LABAS, ZUIKI!</h1>;
};

// Component 2: CustomText
const CustomText = ({ text }) => {
  return <h1>{text}</h1>;
};

// Component 3: ZebraiBebrai
const ZebraiBebrai = ({ colorCode }) => {
  const textColor = colorCode === 1 ? 'blue' : colorCode === 2 ? 'red' : 'black';
  return <h1 style={{ color: textColor }}>Zebrai ir Bebrai</h1>;
};

// Component 4: TwoTexts
const TwoTexts = ({ text1, text2 }) => {
  return (
    <>
      <h1>{text1}</h1>
      <h2>{text2}</h2>
    </>
  );
};

// Component 5: ColoredTexts
const ColoredTexts = ({ text1, text2, color }) => {
  return (
    <>
      <h1 style={{ color: color }}>{text1}</h1>
      <h2 style={{ color: color }}>{text2}</h2>
    </>
  );
};

// App Component
function App() {
  return (
    <div>
      <LabasZuiki />
      <CustomText text="Hello World" />
      <ZebraiBebrai colorCode={1} />
      <TwoTexts text1="Hello" text2="World" />
      <ColoredTexts text1="Hello" text2="World" color="green" />
    </div>
  );
}

export default App;


