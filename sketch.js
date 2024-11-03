
function setup() {
  const size = 800;
  createCanvas(size, size);
  fill(200)
  const tiles = 8;
  let squareSize = size / tiles;
  for (let i = 0; i < tiles; i++) {
      for (let j = 0; j < tiles; j++) {
          const row = (size / tiles) * i;
          const col = (size / tiles) * j;
          rect(row, col, squareSize, squareSize);
      } 
  }
}


function draw() {
  
}
