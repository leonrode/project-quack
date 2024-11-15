const canvasSize = 800;
const n = 8;
const rows = n;
const columns = n;
const cellSize = canvasSize/n;
const passable = [];
const cellColor = 255;
let playerX = 4;
let playerY = 3;

window.addEventListener('keydown', function(e) {
    if ([37, 38, 39, 40].includes(e.keyCode)){
      e.preventDefault();
    }
});

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
    circle(playerX * cellSize + cellSize / 2, playerY * cellSize + cellSize / 2, cellSize / 2);//In theory doesn't remove old player location
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
    }if(key === 's' || keyCode === DOWN_ARROW){
        if(playerY < rows - 1 && passable[playerX][playerY + 1]){
            playerY++;
        }
    }if(key === 'd' || keyCode === RIGHT_ARROW){
        if(playerX < columns - 1 && passable[playerX + 1][playerY]){
            playerX++;
        }
    }
}