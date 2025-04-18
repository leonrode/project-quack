/**
 * 1. connected sockets
 * 
 */

/**
 * game.updatePlayerPosition(0, (x, y), 
 */
class Game {

  constructor() {

    this.level = new Level();



  }

  updatePlayerPosition(playerId, newPosition) {
    // changes the position in the level of a given playerId

    this.level.updatePlayerPosition(playerId, newPosition);

    //
  }

  // this creates a string that represents the game state
  getGameState() {

  }
}