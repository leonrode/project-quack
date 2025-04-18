class Player {
    constructor(initialX, initialY) {
        this.x = initialX;
        this.y = initialY;
        this.holdingColor = "purple";
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
    getHoldingColor() {
        return this.holdingColor;
    }
    setHoldingColor(color) {
        this.holdingColor = color;
    }
}

// allow the Player class to be exported
module.exports = Player;