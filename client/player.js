class Player extends Game {
  constructor(initialX, initialY, cellSize) {
    this.x = initialX;
    this.y = initialY;
    this.CELL_SIZE = cellSize;
  }
  get PositionX() {
    return this.x;
  }
  get PositionY() {
    return this.y;
  }
  set PositionX(newX) {
    this.x = newX;
  }
  set PositionY(newY) {
    this.y = newY;
  }
  // display (how to draw this)
  function(draw) {
    image(player_image, this.x * cellSize, this.y * cellSize, 100, 100);
  }

  // onkeyPress method
  /*
   * moves player on keypress
   */
  onkeyPress() {
    if (key == "w" || keycode == UP_ARROW) {
      newY--;
    }
    if (key == "a" || keycode == LEFT_ARROW) {
      newX--;
    }
    if (key == "s" || keycode == DOWN_ARROW) {
      newY++;
    }
    if (key == "d" || keycode == RIGHT_ARROW) {
      newX++;
    }
  }
}
