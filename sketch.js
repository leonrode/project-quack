  var player;
function preload() {
   player = loadImage("player.png");
}

function setup() {
  var size = 800;
  createCanvas(size, size);
  background(240);
  var checkerSize = size/10;

  square(0, 200, checkerSize);
    fill(240);

  for (let i = 0; i < size; i+= checkerSize){ //top-bottom border
    for(let j = 0; j < size; j+= checkerSize) { //left-right border
      fill(0);
      square(i, 0, checkerSize);
      square(i, size - checkerSize, checkerSize);
      square(0, j, checkerSize);
      square(size - checkerSize, j, checkerSize);
    }
  }
  for (let i = 0; i < size; i+= checkerSize){ 
    for(let j = 0; j < size; j+= checkerSize) {
      fill(0);
      square(i, 0, checkerSize);
      if ((j == (5 * checkerSize) && i == (1 * checkerSize)) || 
      (j == (1 * checkerSize) && i == (5 * checkerSize) || 
      (j == (2 * checkerSize) && i == (4 * checkerSize)) || 
      (j == (3 * checkerSize) && i == (4 * checkerSize)) || 
      (j == (3 * checkerSize) && i == (7 * checkerSize)) || 
      (j == (3 * checkerSize) && i == (8 * checkerSize)) ||
      (j == (4 * checkerSize) && i == (3 * checkerSize)) ||
      (j == (4 * checkerSize) && i == (4 * checkerSize)) ||
      (j == (4 * checkerSize) && i == (7 * checkerSize)) ||
      (j == (5 * checkerSize) && i == (1 * checkerSize)) ||
      (j == (5 * checkerSize) && i == (5 * checkerSize)) ||
      (j == (5 * checkerSize) && i == (7 * checkerSize)) ||
      (j == (6 * checkerSize) && i == (3 * checkerSize)) ||
      (j == (7 * checkerSize) && i == (1 * checkerSize)) ||
      (j == (7 * checkerSize) && i == (2 * checkerSize)) ||
      (j == (7 * checkerSize) && i == (6 * checkerSize)) ||
      (j == (8 * checkerSize) && i == (1 * checkerSize)) ||
      (j == (8 * checkerSize) && i == (1 * checkerSize)) ||
      (j == (8 * checkerSize) && i == (2 * checkerSize)) ||
      (j == (8 * checkerSize) && i == (4 * checkerSize)) ||
      (j == (8 * checkerSize) && i == (6 * checkerSize))
      )) {
        fill(0);
        square(i, j, checkerSize);
      }
    }
  }
 image(player, mouseX , mouseY);
}

function draw() {
}
