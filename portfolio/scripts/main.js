
// window.onload = function () {
//   alert("Welcome To My Portfolio!");

// Clear the grid to avoid duplicates
const grid = document.getElementById('grid');
grid.innerHTML = '';// Ensure the grid is empty before appending new squares

const letters = ['M', 'A', 'N', 'O', 'J', ' ', 'K', 'U', 'M', 'A', 'R', ' ', 'N', 'A', 'I', 'K', ' ', 'H']; // Letters to display in the squares

letters.forEach((letter, index) => {
  const square = document.createElement('div'); // Create a div for each letter
  square.className = 'square'; // Add class for styling and animation
  square.textContent = letter; // Set the letter as the content of the square
  square.style.animationDelay = `${index * 0.2}s`; // Set a delay for the animation of each square
  grid.appendChild(square); // Append the square to the grid
});