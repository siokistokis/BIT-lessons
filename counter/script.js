
// const height = document.querySelector('.height');
// const weight = document.querySelector('.weight');
// const calculate = document.querySelector('.calculate');
// let count = document.querySelector('.count');
// const reset = document.querySelector('.reset');

 
// calculate.addEventListener('click', () => {
//     const height1 = parseFloat(height.value);
//     const weight1 = parseFloat(weight.value);
//     const bmi = weight1 / ((height1 * height1) / 10000);
// if (bmi < 18.5) {
//     count.textContent = `Under weight : ${bmi.toFixed(2)}`;
// } else if (bmi >= 18.5 && bmi < 24.9) {
//     count.textContent = `Normal: ${bmi.toFixed(2)}`;
//     //count += `<span style="color: green;"><span/>`;????????????????????
// } else if (bmi >= 25 && bmi < 29.9){
//     count.textContent = `Overweight: ${bmi.toFixed(2)}`;
// } else if (bmi >= 30){
//     count.textContent = `Obese: ${bmi.toFixed(2)}`
 
// }})
//     reset.addEventListener('click', () => {
//     height.value = '';
//     weight.value = '';
//     count.textContent = '';
// });
 




const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const calculate = document.querySelector('.calculate');
let count = document.querySelector('.count');
const reset = document.querySelector('.reset');

calculate.addEventListener('click', () => {
    const height1 = parseFloat(height.value);
    const weight1 = parseFloat(weight.value);

    // Calculate BMI
    const bmi = weight1 / ((height1 * height1) / 10000);

    // Check the BMI category and update the count text accordingly
    if (bmi < 18.5) {
        count.textContent = `Underweight: ${bmi.toFixed(2)}`;
        count.style.color = 'blue';  // Color for Underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        count.textContent = `Normal: ${bmi.toFixed(2)}`;
        count.style.color = 'darkgreen'; // Color for Normal
    } else if (bmi >= 25 && bmi < 29.9) {
        count.textContent = `Overweight: ${bmi.toFixed(2)}`;
        count.style.color = 'orange'; // Color for Overweight
    } else if (bmi >= 30) {
        count.textContent = `Obese: ${bmi.toFixed(2)}`;
        count.style.color = 'red'; // Color for Obese
    }
});

// Reset functionality
reset.addEventListener('click', () => {
    height.value = '';
    weight.value = '';
    count.textContent = '';
    count.style.color = ''; // Reset color when cleared
});