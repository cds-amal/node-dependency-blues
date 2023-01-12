const assert = require("chai").assert;
const { processInput } = require("./command");


describe("Test capitalization", function() {

  [
    { input: "a b c".split(" "), expected: "A B C".split(" ") }
  ].forEach(({ input, expected }) => {
    it(`Caps ${input}`, () => {
      assert(expected, processInput(input), `should capitalize: ${input.join(" ")}`);
    });
  })

});
