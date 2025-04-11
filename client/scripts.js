const canvasSize = 800;
const n = 8;
const rows = n;
const cols = n;
const cellSize = canvasSize/n;
const backgroundColor = "white";
let level;

let playerImage;

const socket = io("http://localhost:3000/");

window.addEventListener('keydown', function(e) {
    if ([' ', 'ArrowLeft', 'ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
      e.preventDefault();
    }
});

function preload() {
    playerImage = loadImage('player.png');
    // player = new Player(1, 1, cellSize, playerImage);
}

function setup(){
    createCanvas(canvasSize, canvasSize);
    background(backgroundColor);
    stroke(0);
    restartBoard();
    for(let i = 0; i < rows; i = i + rows - 1){
        for(let j = 0; j < cols; j++){
            level.createWall(i, j);
        }
    }
    for(let j = 0; j < cols; j = j + cols - 1){
        for(let i = 1; i < rows - 1; i++){
            level.createWall(i, j);
        }
    }

    level.createWall(3, 1);
    level.createWall(3, 2);
    level.createWall(3, 3);

}

function restartBoard(){
    level = new Level(rows, cols, backgroundColor, playerImage);
}

function draw(){

    level.draw();

}

function keyPressed(){
    level.onKeyPress();
}