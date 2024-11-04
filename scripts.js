function setup(){
    createCanvas(800, 800);
    noLoop();
}
function draw(){
    background(255);
    let rows = 8;
    let columns = 8;
    let cellSize = 100;

    stroke(0);
    fill(255);
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}