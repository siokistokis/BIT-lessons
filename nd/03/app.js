




//Agregacija. 

//Agregaciją daugeliu atveju galima atlikti JS reduce metodu, bet siekiant įgauti praktikos visus uždavinius reikėtų išspręsti dviem būdais:
//naudojantis for ar for…of ciklais;
//naudojantis forEach masyvo metodu;

//Pastaba: pavadinimas uždaviniuose- kintamojo tipas: skaičiai- number, stringai- string, loginiai- boolen.
//Pastaba: užduoties raidė atitinka masyvo, skirto tai užduočiai raidei.
//Pastaba: kodas turi būti užrašytas taip, kad pasikeitus masyvų turiniui rezultatas išliktų teisingas.

//A. Masyvas su skaičiais.

//Surasti didžiausią skaičių;
//Surasti mažiausią skaičių;
//Surasti didžiausią neigiamą skaičių;
//Surasti didžiausią skaičių, kuris yra mažesnis už 50;
//Suskaičiuoti teigiamų skaičių sumą;
//Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;
//Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75
//Suskaičiuoti kiek skaičių yra 0-iai;
//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;
//Suskaičiuoti neigiamų skaičių vidurkį;


//B. Masyvas su stringais.

//Surasti ilgiausią stringą;
//Surasti trumpiausią stringą;
//Surasti stringą, kuris prasideda “a” raide;
//Surasti stringą su daugiausia žodžių;
//Surasti stringą su mažiausiai žodžių;
//Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;
//Suskaičiuoti kiek masyve yra žodžių;
//Suskaičiuoti visas ‘s’ raides;
//Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);
//Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);


//C. Mišrus masyvas.

//Surasti didžiausią skaičių;
//Surasti trumpiausią stringą;
//Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);
//Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);
//Suskaičiuoti bendrą visų stringų ilgį;
//Suskaičiuoti vidutinį stringo ilgį;
//Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;
//Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);
//Rasti ko yra daugiau- stringų ar skaičių;
//Rasti ko yra daugiau- loginių true ar false;



//D. Dvimatis masyvas su skaičiais.

//Surasti didžiausią skaičių;
//Rasti ar yra bent vienas sub masyvas ilgesnis nei 5;
//Suskaičiuoti kiek elementų yra sub masyvai trumpesni nei 2;
//Surasti didžiausią skaičių, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Suskaičiuoti didesnių nei 10 skaičių sumą, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
//Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 10-20, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra 2 ilgio;
//Suskaičiuoti sumą skaičių, kurie sub masyve turi indeksą 2;
//Suskaičiuoti vidurkį skaičių, kurie sub masyve turi indeksą 1 arba 3;



//E. Dvimatis masyvas su stringais.

//Suskaičiuoti bendrą stringų ilgį;
//Suskaičiuoti bendrą stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Suskaičiuoti bendrą, ilgesnių nei 6, stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
//Surasti stringą, kuris prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
//Surasti stringą, kuris pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
//Surasti trumpiausią stringą, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų, ilgesnių nei 5, ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
//Suskaičiuoti vidutinį stringų ilgį, kurie sub masyve turi indeksą 2;
//Suskaičiuoti kiek “s” raidžių yra stringuose, kurie sub masyve turi indeksą 0 arba yra sub masyvo paskutinis elementas;


//Sunkesni.

//Masyve E surasti visus žodžius, kurie pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3. Surastus žodžius sudėti į atskirą masyvą;
//Masyve E surasti visus žodžius, kurie prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2. Surastus žodžius sudėti į atskirą masyvą;
//Masyve E surasti visus žodžius, kurie pasikartoja daugiau nei 1 kartą ir sudėti juos į atskirą masyvą;
//Masyve B surasti vienodą stringą;
//Masyve C surasti vienodą stringą;
//Masyve B surasti žodį, kuris pasikartoja daugiausiai kartų;
//Masyve B surasti ir sudėti į atskirą masyvą visus skaičius, esančius tekste;
//Masyve D surasti elementą, kurio masyvo elemento suma yra didžiausia;
//Masyve A surasti visus skaičius, kurie yra ir teigiami ir neigiami (pvz. yra 15 ir -15). Rastus skaičius sudėti į atskirą masyvą;
//Masyve A suskaičiuoti visų skaičių, kuriuose nėra skaitmens “7” sumą;


//Masyvai užduočiai:


//const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

//const B = [
  //  'the quick brown fox',
   // 'jumps over the lazy dog',
  //  'a bird in the hand',
 //   'is worth two in the bush',
//    'an apple a day',
//    'keeps the doctor away',
  //  'actions speak louder than words',
  //  'all good things must come to an end',
  //  'beauty is in the eye of the beholder',
  //  'better late than never',
  //  'birds of a feather flock together',
  //  'cleanliness is next to godliness',
  //  'dont bite the hand that feeds you',
  //  'dont count your chickens before they hatch',
  //'dont put all your eggs in 1 basket',
  //  'every cloud has a silver lining',
  //  'every dog has its day',
  //  'every rose has its thorn',
  //  'fortune favors the bold',
  //  'good things come to those who wait',
  //  'a watched pot never boils',
  //  'haste makes waste',
  //  'history repeats itself',
  //  'cat got your tongue',
  //  'home is where the heart is',
  //  'if the shoe fits, wear it',
  //  'ignorance is bliss',
   // 'it takes two to tango',
  //  'arabs have 100 words for sand',
  //  'kill two birds with one stone',
  //  'laughter is the best medicine',
 //   'love is blind',
 //   'money doesnt grow on trees',
  //  'no pain no gain',
  //  'nothing ventured nothing gained',
  //  'once bitten twice shy',
  //  'practice makes perfect',
  //  'the early bird catches the worm',
 //   'the grass is always greener on the other side',
  //  'the pen is mightier than 10 swords',
  //  'theres no smoke without fire',
   // 'time heals all wounds',
  //  '5 second rule',
  //  'every dog has its day',
  //  'to err is human to forgive divine',
  //  '2 wrongs dont make a right',
  //  'when in Rome do as the Romans do',
   // 'where theres smoke, theres fire',
 //   'you cant judge a book by its cover',
  //  'you cant make an omelette without breaking eggs',
 //   'you reap what you sow',
 //   'youre never too old to learn'
//];

//const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

//const D = [[95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],[41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],[3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],[55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],[28,28,74,44],[60],[5,52],[80,92,31,30],[24],[95,4,23],[38,7,61],[53,99,22],[23,34]];

//const E = [
 //   ['time', 'love', 'government'],
 //   ['year'],
 //   ['time', 'friend', 'child', 'money'],
 //   ['air'],
 //   ['world', 'music'],
 //   ['phone', 'job', 'hope', 'car'],
 //   ['day'],
 //   ['house', 'thing', 'future'],
 //   ['family', 'man', 'life', 'life'],
 //   ['way', 'moon', 'history', 'tree'],
 //   ['cat', 'book', 'science', 'internet'],
 //   ['food', 'people', 'art', 'country'],
 //   ['internet', 'friend', 'house', 'job'],
 //   ['money', 'government', 'antiquity', 'time'],
 //   ['love', 'cat', 'family', 'friend'],
 //   ['future', 'year', 'time', 'life'],
 //   ['sun'],
 //   ['school'],
 //   ['health', 'mountain'],
 //   ['city'],
 //   ['water', 'star'],
 //   ['flower', 'earth', 'fire'],
 //   ['star'],
 //   ['river', 'art', 'fire'],
 //   ['woman', 'earth', 'flower', 'computer'],
 //   ['water', 'technology', 'dream']
//];




