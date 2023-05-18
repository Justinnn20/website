// Set up canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables
let playerX = 50;
let playerY = 50;

// Game loop
function gameLoop() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update game logic

  // Render game objects
  context.fillStyle = 'red';
  context.fillRect(playerX, playerY, 50, 50);

  // Request next frame
  requestAnimationFrame(gameLoop);
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    playerY -= 10;
  } else if (event.key === 'ArrowDown') {
    playerY += 10;
  } else if (event.key === 'ArrowLeft') {
    playerX -= 10;
  } else if (event.key === 'ArrowRight') {
    playerX += 10;
  }
});

// Start the game loop
gameLoop();
