const Player = require("./player");
const Tile = require("./tile");

class Level {
    constructor(rows, cols, backgroundColor) {
        this.rows = rows;
        this.cols = cols;
        this.backgroundColor = backgroundColor;
        this.tileGrid = [];

        this.player1 = new Player(1, 1);
        this.player2 = new Player(2, 2);

        for (let i = 0; i < rows; i++) {
            this.tileGrid[i] = [];
            for (let j = 0; j < cols; j++) {
                this.tileGrid[i][j] = new Tile(i, j, backgroundColor);
            }
        }
    }

    getTileGrid() { return this.tileGrid; }

    // returns Tile corresponding to an x posiiton and y position
    getTile(x, y) { return this.tileGrid[x][y]; }

    createWall(x, y) {
        this.tileGrid[x][y] = new Wall(x, y);
    }

    swap(x1, y1, x2, y2) {
        const temp = this.tileGrid[x1][y1];
        this.tileGrid[x1][y1] = this.tileGrid[x2][y2];
        this.tileGrid[x2][y2] = temp;
    }

    colorTiles(tile, color) {
        console.log("coloring tiles with " + color);
        const visited = [];
        let queue = [[tile.getX(), tile.getY()]];

        const dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        for (let i = 0; i < rows; i++) {
            visited[i] = [];
            for (let j = 0; j < cols; j++) {
                visited[i][j] = false;
            }
        }
        visited[tile.getX()][tile.getY()] = true;
        tile.setColor(color);
        while (queue.length > 0) {
            let [currentX, currentY] = queue.shift();
            for (let [dx, dy] of dir) {
                let neighborX = currentX + dx;
                let neighborY = currentY + dy;

                if (neighborX >= 0 && neighborX < rows && neighborY >= 0 && neighborY < cols) {
                    if (!visited[neighborX][neighborY] && this.tileGrid[neighborX][neighborY].isPassable()) {
                        visited[neighborX][neighborY] = true;
                        queue.push([neighborX, neighborY]);
                        this.tileGrid[neighborX][neighborY].setColor(color);
                    }
                }
            }
        }
    }

    /**
     * return JSON representation of the game state
     */
    getGameJSON() {
        const state = {
            playerPositions: [[this.player1.getX(), this.player1.getY()], [this.player2.getX(), this.player2.getY()]],
            board: this.tileGrid
        }

        return JSON.stringify(state); // "{playerPositions: [...], board: [...]}"
    }

}

module.exports = Level;