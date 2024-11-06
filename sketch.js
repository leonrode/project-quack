function setup() {
  var size = 800;
  createCanvas(size, size);
  background(240);
  var checkerSize = 100;
  square(0, 0, checkerSize);
      fill(0);
  for (let i = 0; i < size; i+=(checkerSize*2)){
    for(let j = 0; j < size; j+=(checkerSize*2)) {
      noStroke();
      square(i, j, checkerSize);
      fill(0);
    }
  }
  for (let i = 100; i < size; i+=(checkerSize*2)){
    for(let j = 100; j < size; j+=(checkerSize*2)) {
      noStroke();
      square(i, j, checkerSize);
      fill(0);
    }
  }
}

function draw() {
}
