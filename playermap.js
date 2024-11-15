let cols = 8;
let rows = 8;
let grid = [];
let cellSize;
let playerX = 4;
let playerY = 4;
let numImpassable = 14; // Number of impassable cells

function setup() {
  createCanvas(800, 800);
  cellSize = width / cols;

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 1; // 1 indicates passable
    }
  }
  // Randomly marks some cells as impassable
  makeImpassable(numImpassable);
}
function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 1) {
        fill(200); // Passable cell color
      } else {
        fill(50); // Impassable cell color
      }
      stroke(0);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
  fill(0);
  stroke(255, 0, 0);
  ellipse(
    playerX * cellSize + cellSize / 2,
    playerY * cellSize + cellSize / 2,
    cellSize / 2
  );
}
function keyPressed() {
  let nextX = playerX;
  let nextY = playerY;

  if (keyCode === UP_ARROW || key === "w") {
    nextY--;
  } else if (keyCode === DOWN_ARROW || key === "s") {
    nextY++;
  } else if (keyCode === RIGHT_ARROW || key === "d") {
    nextX++;
  } else if (keyCode === LEFT_ARROW || key === "a") {
    nextX--;
  }
  if (nextX >= 0 && nextX < cols && nextY >= 0 && nextY < rows &&
    grid[nextX][nextY] === 1) {
    playerX = nextX;
    playerY = nextY;
  }
}
function makeImpassable(num) {
  let count = 0;
  while (count < num) {
    let randomX = floor(random(cols));
    let randomY = floor(random(rows));

    if (grid[randomX][randomY] === 1 && !(randomX === playerX && randomY === playerY)) {
      grid[randomX][randomY] = 0; // Marks as impassable
      count++;
    }
  }
}
