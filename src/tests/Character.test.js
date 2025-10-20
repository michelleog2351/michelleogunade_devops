const assert = require("assert");
const Character = require("../Character");

describe("Character Class", function () {
  it("should return the correct name", function () {
    const character = new Character("Michelle", 100, 50);
    assert.strictEqual(character.getName(), "Michelle");
  });
});
