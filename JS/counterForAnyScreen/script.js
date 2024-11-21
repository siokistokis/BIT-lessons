// Select elements
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const counterDisplay = document.querySelector('.counter');

// Initialize counter
let counter = 0;

// Function to update the counter display
function updateCounter() {
  counterDisplay.textContent = counter;
}

// Event listeners for buttons
incrementButton.addEventListener('click', () => {
  counter++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counter--;
  updateCounter();
});
