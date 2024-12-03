let player;
var size = 1000;
let checkerSize = size/10;
let x = 0;
let y = 2 * checkerSize + 7;


function preload() {
  player = loadImage('player.png');
}

function setup() {
  createCanvas(size, size);
  background(240);
  var checkerSize = size/10;
  noStroke();
  for (let i = 0; i < size; i+= checkerSize){ //top-bottom border
    for(let j = 0; j < size; j+= checkerSize) { //left-right border
      fill(0);
      square(i, 0, checkerSize);
      square(i, size - checkerSize, checkerSize);
      square(0, j, checkerSize);
      square(size - checkerSize, j, checkerSize);
    }
  }
  for (let i = 0; i < size; i+= checkerSize){ //fills in the rest of the map
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
  fill(240);
    square(0, 2 * checkerSize, checkerSize);
  }

function draw() {
 //while (x < (size - checkerSize) && x > checkerSize && y < (size - checkerSize) && y > checkerSize){
    image(player, x, y);
 //}
}

/*function keyPressed() {
    if (key === ENTER) {
    }
}*/

function keyReleased() {
  if (keyCode === 87) {
    y -= checkerSize;
  } else if (keyCode === 65) {
    x -= checkerSize;
  } else if (keyCode === 83) {
    y += checkerSize;
  } else if (keyCode === 68) {
    x += checkerSize;
  }
}

