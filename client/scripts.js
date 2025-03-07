const canvasSize = 800;
const n = 8;
const rows = n;
const columns = n;
const cellSize = canvasSize/n;
const tiles = [];
const cellColor = 255;
let playerX = 1;
let playerY = 1;

let player;

//All drawing functions should have fill in the beginning in order to reset fill color for function purposes
window.addEventListener('keydown', function(e) {
    if ([' ', 'ArrowLeft', 'ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
      e.preventDefault();
    }
});


function preload() {
    const player_image = loadImage('player.png');
    player = new Player(1, 1, cellSize, player_image);
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
        tiles[i] = [];
        for(let j = 0; j < columns; j++){
            tiles[i][j] = {isPassable: true, color: [255, 255, 255]};
        }
    }
}

function colorChange(color){
    fill(color);
    stroke(color);
}

function createWall(row, col){
    tiles[row][col].isPassable = false;
}

function fillSpace(x ,y, color){
    const dir = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    colorChange(color);
    let queue = [[x, y]]
    
    const visited = [];
    //make new function with below loop with param bool to return an array
    for(let i = 0; i < rows; i++){
        visited[i] = [];
        for(let j = 0; j < columns; j++){
            visited[i][j] = false;
        }
    }
    visited[x][y] = true;
    tiles[y][x].color = color;
    while(queue.length > 0){
        let [currentX, currentY] = queue.shift();
        for(let [dx, dy] of dir){
            let neighborX = currentX + dx;
            let neighborY = currentY + dy;
            if(neighborX >= 0 && neighborX < rows && neighborY >= 0 && neighborY < columns){
                if(!visited[neighborX][neighborY] && tiles[neighborX][neighborY]){
                    visited[neighborX][neighborY] = true;
                    //make rectange for that particular square
                    tiles[neighborY][neighborX].color = color;
                    //rect(neighborX * cellSize, neighborY * cellSize, cellSize, cellSize); // need some global color tracking, otherwise the colored tile will be drawn over
                    queue.push([neighborX, neighborY]);
                    //console.log("Pushed " + neighborX + ", " + neighborY); //Seems work but rect isn't making a rectangle
                }
            }
        }
    }
}

function draw(){
    stroke(0);
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(tiles[i][j].isPassable){
                fill(tiles[i][j].color);
            } else{
                fill(0);
            }
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }

    noStroke();

    player.draw();
}

function keyPressed(){
    player.onKeyPress();
}