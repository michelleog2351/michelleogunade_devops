/**
 * Represents a character in the game.
 * @class
 * @author
 * @version 1.0
 */

class Character {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

module.exports = Character;
