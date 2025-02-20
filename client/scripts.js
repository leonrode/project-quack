const canvasSize = 800;
const n = 8;
const rows = n;
const columns = n;
const cellSize = canvasSize/n;
const passable = [];
const cellColor = 255;
let playerX = 4;
let playerY = 3;
//All drawing functions should have fill in the beginning in order to reset fill color for function purposes
window.addEventListener('keydown', function(e) {
    if ([' ', 'ArrowLeft', 'ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
      e.preventDefault();
    }
});

/**
 * function preload() -> load images in p5js
 */

let player_image;

function preload() {
    player_image = loadImage('player.png');
}

function setup(){
    createCanvas(canvasSize, canvasSize);
    background(100);
    stroke(0);
    restartBoard();
    
    for(let i = 0; i < rows; i = i + rows - 1){
        for(let j = 0; j < columns; j++){
            createWall(i, j);
        }
    }
    for(let j = 0; j < columns; j = j + columns - 1){
        for(let i = 1; i < rows - 1; i++){
            createWall(i, j);
        }
    }
    for(let j = 2; j < columns - 1; j++){
        createWall(2, j);
    }
    
    createWall(3, 3);
    createWall(4, 3);
    createWall(4, 4);
}

function restartBoard(){
    for(let i = 0; i < rows; i++){
        passable[i] = [];
        for(let j = 0; j < columns; j++){
            passable[i][j] = true;
        }
    }
}

function createWall(row, col){
    passable[col][row] = false;
}

function fillSpace(x ,y, color){
fill(color);
let queue = [[x, y]]
//initialze visited array
let visited = Array(n).fill().map(() => Array(grid[0].length).fill(false));
visited[x][y] = true;

while(queue.length > 0){
    
}
}

function draw(){
    stroke(0);
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(passable[i][j]){
                fill(cellColor);
            } else{
                fill(0);
            }
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }

    noStroke();
    // image(img, x, y, [width], [height])
    // playerX -> [0, 7]
    // playerY -> [0, 7]
    // translate (playerX, playerY) -> (screen x, screen y)
    // x = screen x
    // y = screen y
    
    image(player_image, playerX, playerY, 100, 100);
}

function keyPressed(){
    if(key === 'w' || keyCode === UP_ARROW){
        if(playerY > 0 && passable[playerX][playerY - 1]){
            playerY--;
        }
    }
    if(key === 'a' || keyCode === LEFT_ARROW){
        if(playerX > 0 && passable[playerX - 1][playerY]){
            playerX--;
        }
    }
    if(key === 's' || keyCode === DOWN_ARROW){
        if(playerY < rows - 1 && passable[playerX][playerY + 1]){
            playerY++;
        }
    }
    if(key === 'd' || keyCode === RIGHT_ARROW){
        if(playerX < columns - 1 && passable[playerX + 1][playerY]){
            playerX++;
        }
    }
    if(key === " " || keyCode === 32){
        fillSpace(playerX, playerY, 174);
    }
}