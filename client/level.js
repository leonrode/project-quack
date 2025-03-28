class Level{
    constructor(rows, cols, backgroundColor){
        this.rows = rows;
        this.cols = cols;
        this.backgroundColor = backgroundColor;
        this.tileGrid = [];
        for(let i = 0; i < rows; i++){
            this.tileGrid[i] = [];
            for(let j = 0; j < cols; j++){
                this.tileGrid[i][j] = new Tile(i, j, backgroundColor);
            }
        }
    }

    getTileGrid(){ return this.tileGrid; }

    getTile(i, j){ return this.tileGrid[i][j]; }

    createWall(x, y){
        this.tileGrid[x][y] = new Wall(x, y);
        console.log("Created wall at " + "(" + x + ", " + y +")");
    }

    swap(x1, y1, x2, y2){
        const temp = this.tileGrid[x1][y1];
        this.tileGrid[x1][y1] = this.tileGrid[x2][y2];
        this.tileGrid[x2][y2] = temp;
        console.log("Swapped Tile(" + x1 + ", " + y1 + ") with (" + x2 + ", " + y2 + ")");
    }

    colorTiles(tile, color){
        const visited = [];
        let queue = [[tile.getX, tile.getY]];
        const dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        for(let i = 0; i < rows; i++){
            visited[i] = [];
            for(let j = 0; j < cols; j++){
                visited[i][j] = false;
            }
        }
        visited[tile.getX()][tile.getY()] = true;
        while(queue.length > 0) {
            let [currentX, currentY] = queue.shift();
            for(let [dx, dy] of dir){
                let neighborX = currentX + dx;
                let neighborY = currentY + dy;
                if(neighborX >= 0 && neighborX < rows && neighborY >= 0 && neighborY < cols){
                    if(!visited[neighborX][neighborY] && tiles[neighborX][neighborY].isPassable()){
                        visited[neighborX][neighborY] = true;
                        queue.push([neighborX, neighborY]);
                        this.tileGrid[neighborX][neighborY].setColor(color)
                        console.log("Neighbor colored: (" + neighborX + ", " + neighborY + ")");
                    }
                }
            }
        }
    }

    /**
     * NEED TO HAVE Player as a member of this class so that the player's
     * coordinates can be moved.
     */

    onKeyPress() {
        if (key == 'w' || keyCode == UP_ARROW) {
            player.y--;
        }
        if (key == 'a' || keyCode == LEFT_ARROW) {
            player.x--;
        }
        if (key == 's' || keyCode == DOWN_ARROW) {
            player.y++;
        }
        if (key == 'd' || keyCode == RIGHT_ARROW) {
            player.x++;
        }
        if(key === " " || keyCode === 32){
            colorTiles(getTile(player.getX(), player.getY()), player.getHoldingColor());
        }
        // if(key === " " || keyCode === 32){
        //     fillSpace(playerX, playerY, [244, 0, 0]);
        // }
    }
}