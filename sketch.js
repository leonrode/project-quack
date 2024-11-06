function setup() {
  var size = 800;
  createCanvas(size, size);
  background(220);
  var checkerSize = size / 8;
  for (let i = 0; i <= size; i+=200){
    for(let j = 0; j <= size; j+=200) {
      noStroke();
      square(i, j, checkerSize);
      fill(0);
    }
  }
  for (let i = 100; i <= size; i+=200){
    for(let j = 100; j <= size; j+=200) {
      noStroke();
      square(i, j, checkerSize);
      fill(0);
    }
  }
}

function draw() {
}

