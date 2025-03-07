class Board {
    constructor(rows, columns, tiles) {
        this.row = rows
        this.col = columns
        this.tileSet = tiles
    }

    initializeTiles() {
        // initialize this.tileSet with {isPassable: ..., color: ...}

        for(let i = 0; i < this.row; i++){
            this.tileSet[i] = [];
            for(let j = 0; j < this.col; j++){
                this.tileSet[i][j] = {isPassable: true, color: [255, 255, 255]};
            }
        }

    }

    getR() {
        return this.row
    }
    getC() {
        return this.col
    }
    getTiles() {
        return this.tileSet
    }
    /*setR(newR) {
        this.row = newR
    }*/

    draw() {
        // go thru each tile
        // draw a rect whose color depends on isPassable flag
    }
    
    makeWall(tiles, rowPos, colPos) {
        tiles[rowPos][colPos].isPassable = false
    }
}