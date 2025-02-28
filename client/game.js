class Game {
    constructor(player1, player2, board) {
        this.player1 = player1;
    }

}

class board extends Game {
    constructor(canvasSize, checkerAmount){
        this.canvasSize = canvasSize;
        this.cellSize = checkerSize/checkerAmount;
    }
}