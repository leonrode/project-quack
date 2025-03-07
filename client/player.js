class Player{
    constructor(initialX, initialY, cellSize, image) {
        this.x = initialX;
        this.y = initialY;
        this.CELL_SIZE = cellSize;
        this.image = image;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    // display (how to draw this)
    draw() {
        
        image(this.image, this.x * this.CELL_SIZE, this.y * this.CELL_SIZE, 100, 100);
    }

    // onkeyPress method
    /*
    * moves player on keypress
    */
    onKeyPress() {
        if (key == 'w' || keyCode == UP_ARROW) {
            this.y--;
        }
        if (key == 'a' || keyCode == LEFT_ARROW) {
            this.x--;
        }
        if (key == 's' || keyCode == DOWN_ARROW) {
            this.y++;
        }
        if (key == 'd' || keyCode == RIGHT_ARROW) {
            this.x++;
        }

        // if(key === " " || keyCode === 32){
        //     fillSpace(playerX, playerY, [244, 0, 0]);
        // }
    }
}