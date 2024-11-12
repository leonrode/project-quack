const tiles = 8;
let grid = [];
const size = 800;
let squareSize;
let playerX = 0;
let playerY = 0;

function setup() {
  createCanvas(size, size);
  squareSize = size / tiles;
  for (let i = 0; i < tiles; i++) {
    grid[i] = [];
    for (let j = 0; j < tiles; j++) {
      grid[i][j] = random() < 0.2 ? 1 : 0; 
    }
  }
}

function draw() {
  background(200);
  for (let i = 0; i < tiles; i++) {
    for (let j = 0; j < tiles; j++) {
      if (grid[i][j] === 0) {
        fill(200); 
      } else {
        fill(0);
      }
      stroke(0);
      square(i * squareSize, j * squareSize, squareSize);
    }
  }
  fill(225, 0, 0);
  circle(playerX * squareSize + squareSize / 2, playerY * squareSize + squareSize / 2, squareSize / 2);
}
function keyPressed() {
  let newX = playerX;
  let newY = playerY;
  if (key === "w" || keyCode === UP_ARROW ) {
    newY--;
  } else if (key === "s" || keyCode === DOWN_ARROW) {
    newY++;
  } else if (key === "d" || keyCode === RIGHT_ARROW) {
    newX++;
  } else if (key === "a" || keyCode === LEFT_ARROW) {
    newX--;
  }
  if (newX >= 0 && newX < tiles && newY >= 0 && newY < tiles & grid[newX][newY] === 0) {
    playerX = newX;
    playerY = newY;
  }
}

