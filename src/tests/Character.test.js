// mocha test for Character class

const assert = require("assert");
const Character = require("../Character");

describe("Character Class", function () {
  it("should return the correct name", function () {
    const character = new Character("Michelle");
    assert.strictEqual(character.getName(), "Michelle");
  });

  it("should not match an incorrect name", function () {
    const character = new Character("Nezuko");
    assert.notStrictEqual(character.getName(), "Yoshino");
  });
});
