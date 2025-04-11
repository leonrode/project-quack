class Level{
    constructor(rows, cols, backgroundColor, playerImage){
        this.rows = rows;
        this.cols = cols;
        this.backgroundColor = backgroundColor;
        this.tileGrid = [];

        //this.clientPlayer
        this.player = new Player(1, 1, cellSize, playerImage);

        for(let i = 0; i < rows; i++){
            this.tileGrid[i] = [];
            for(let j = 0; j < cols; j++){
                this.tileGrid[i][j] = new Tile(i, j, backgroundColor);
            }
        }
    }

    getTileGrid(){ return this.tileGrid; }

    // returns Tile corresponding to an x posiiton and y position
    getTile(x, y){ return this.tileGrid[x][y]; }

    createWall(x, y){
        this.tileGrid[x][y] = new Wall(x, y);
    }

    swap(x1, y1, x2, y2){
        const temp = this.tileGrid[x1][y1];
        this.tileGrid[x1][y1] = this.tileGrid[x2][y2];
        this.tileGrid[x2][y2] = temp;
    }

    draw() {
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                color = level.getTile(i, j).getColor();
    
                
                fill(color);
                rect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }

        this.player.draw();

        
    }

    colorTiles(tile, color){
        console.log("coloring tiles with " + color);
        const visited = [];
        let queue = [[tile.getX(), tile.getY()]];
        
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
        tile.setColor(color);
        while(queue.length > 0) {
            let [currentX, currentY] = queue.shift();
            for(let [dx, dy] of dir){
                let neighborX = currentX + dx;
                let neighborY = currentY + dy;
                
                if(neighborX >= 0 && neighborX < rows && neighborY >= 0 && neighborY < cols){
                    if(!visited[neighborX][neighborY] && this.tileGrid[neighborX][neighborY].isPassable()){
                        visited[neighborX][neighborY] = true;
                        queue.push([neighborX, neighborY]);
                        this.tileGrid[neighborX][neighborY].setColor(color);
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
            if(this.getTile(this.player.getX(), this.player.getY() - 1).isPassable())
                this.player.y--;
        }
        if (key == 'a' || keyCode == LEFT_ARROW) {
            if(this.getTile(this.player.getX() - 1, this.player.getY()).isPassable())
                this.player.x--;
        }
        if (key == 's' || keyCode == DOWN_ARROW) {
            if(this.getTile(this.player.getX(), this.player.getY() + 1).isPassable())
                this.player.y++;
        }
        if (key == 'd' || keyCode == RIGHT_ARROW) {
            if(this.getTile(this.player.getX() + 1, this.player.getY()).isPassable())
                this.player.x++;
        }
        if(key === " " || keyCode === 32){
            this.colorTiles(this.getTile(this.player.getX(), this.player.getY()), this.player.getHoldingColor());
        }
    }
}