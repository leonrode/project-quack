function setup() {
  createCanvas(800, 800);
  noLoop(); // To stop draw() from looping
}

function draw() {
  let gridSize = 8;
  let cellSize = width / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if ((i + j) % 2 == 0) {
        fill(0); // Black color
      } else {
        fill(255); // White color
      }
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}
