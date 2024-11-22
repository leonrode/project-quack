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
      grid[i][j] = 0; 
    }
  }
  grid[0][1] = 1;
  grid[1][1] = 1;
  grid[1][2] = 1;
  grid[1][3] = 1;
  grid[1][4] = 1;
  grid[2][3] = 1;
  grid[2][4] = 1;
  grid[4][3] = 1;
  grid[5][3] = 1;
  grid[5][4] = 1;
  grid[6][4] = 1;
  grid[1][5] = 1;
  grid[1][6] = 1;
  grid[2][6] = 1;
  
  grid[5][0] = 1;
  grid[5][2] = 1;

  //Comment out below to block off areas
  
  grid[5][1] = 1;

  grid[3][3] = 1;

  grid[7][4] = 1;



}

function draw() {
  background(200);
  for (let i = 0; i < tiles; i++) {
    for (let j = 0; j < tiles; j++) {
      if (grid[i][j] === 0) {
        fill(200); 
      } else if (grid[i][j] === 2){
        fill(150, 255, 255);
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
  } else if (key === "a" || keyCode === LEFT_ARROW){ 
    newX--;
  }
  if (newX >= 0 && newX < tiles && newY >= 0 && newY < tiles & grid[newX][newY] != 1) {
    playerX = newX;
    playerY = newY;
  }


  if (keyCode === 32){
    fillSpace(playerX, playerY);
  }

}
function fillSpace(x, y){
  if (x < 0 || x >= tiles || y < 0 || y >= tiles || grid[x][y] !== 0) {
    return;
  }
  grid[x][y] = 2;
  fillSpace(x - 1, y); 
  fillSpace(x + 1, y); 
  fillSpace(x, y - 1); 
  fillSpace(x, y + 1);
}