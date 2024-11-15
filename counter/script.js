// const calculate = document.querySelector(".calculate")
// const reset = document.querySelector(".reset")


// calculate.addEventListener("click",function(){
//     calculate.innerHTML++

//      reset.addEventListener("click", function(){
//         calculate.innerHTML = 0
//     })
// })
// calculate.addEventListener("click",function(){
//     calculate.innerHTML--
// })

   

// function setColor(){
//     //for (let i = 0; i < 0; i++)
// }



//     for (let i = 0; i < 0; i++) {
//         if(????? i> 0) {
           
//         }else difrent color
//     }

const height =  document.querySelector('.height');
const weight =  document.querySelector('.weight');
const calculate = document.querySelector('.calculate');
let count = document.querySelector('.count');
const reset = document.querySelector('.reset');

count.textContent = ''

//const bmi = weight / (height * height);

// height.addEventListener('input', function(){
//     height.innerHTML(value)
// })
// weight.addEventListener('input', function(){
//     weight.innerHTML(value)
// })

calculate.addEventListener('click', () => {
    constbmi = weight / (height + height);
   if (bmi < 18.5){
    count.innerHTML = `Under weght: ${bmi}`;
}else if (bmi >=18.5 && bmi < 24.9) {
    count.innerHTML = `Normal: ${bmi}`;
}else if(bmi>= 25 && bmi < 29.9){
    count.innerHTML = `Overweight: ${bmi}`;
}else if (bmi >= 30){
    count.innerHTML = `Obese: ${bmi}`
}
})

reset.addEventListener('click',function(){
    count.textContent = '';
    height.textContent = '';
    weight.textContent = '';
})

// const calculate = document.querySelector('.calculate');
//     const reset = document.querySelector('.reset');
//     const heightInput = document.querySelector('.height');
//     const weightInput = document.querySelector('.weight');
//     const count = document.querySelector('.count');
 
//     calculate.addEventListener('click', () => {
//     const height = parseFloat(heightInput.value); // Pakeista: gauti tikrą reikšmę
//     const weight = parseFloat(weightInput.value); // Pakeista: gauti tikrą reikšmę
 
//     // Patikrinama, ar įvestos tinkamos reikšmės
//     if (height > 0 && weight > 0) {
//         const bmi = weight / (height * height / 10000); // Gaukite BMI (cm, kg)
//         count.textContent = bmi.toFixed(2); // Rodo BMI su dviem dešimtainėmis vietomis
//     } else {
//         count.textContent = 'Įveskite teisingus duomenis';
//     }
// });
 
//     reset.addEventListener('click', () => {
//     heightInput.value = '';
//     weightInput.value = '';
//     count.textContent = '0';
// });
 
 
 
 
 
 

 