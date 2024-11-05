let canvas;

function setup() {
  const SIZE = 800;
  const rows = 8;
  const columns = 8;
  const CANVAS_COLOR = color(234, 227, 201)
  const CANVAS_DIV_COLOR = color(200, 174, 126)
  const tileSize = 77;
  canvas = createCanvas(SIZE, SIZE);
  centerCanvas(canvas);
  strokeWeight(2);
  stroke(CANVAS_DIV_COLOR);



  for (let i = 0; i < rows; i++) { // Will create the initial game board, updated coloring will be in draw()
    for (let j = 0; j < columns; j++) {
      fill(CANVAS_COLOR) // this color fills in following shape
      square(i * tileSize, j * tileSize, tileSize);
    }

  }


}

function centerCanvas(canvas) {
  const x = (windowWidth - (width - 200)) / 2;
  const y = (windowHeight - (height - 200)) / 2;
  canvas.position(x, y);
}
function windowResized() { // Will center when resized
  centerCanvas(canvas);
}

function draw() {
  // Continuously looping during the running of program (60 times per sec)


}
