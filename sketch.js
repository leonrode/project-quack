function preload() {
}

function setup() {
  var size = 1000;
  createCanvas(size, size);
  background(240);
  var checkerSize = size/10;
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
      if ((j == (5 * checkerSize) && i == (1 * checkerSize)) || (j == (7 * checkerSize) && i == (1 * checkerSize) || (j == (8 * checkerSize) && i == (1 * checkerSize)) || (j == (8 * checkerSize) && i == (2 * checkerSize)) )) {
        fill(0);
        square(i, j, checkerSize);
      }
    }
  }
}

function draw() {
}
