const solve = require("./7");

test("encoded message '111' to output a total of 3 decoded messages", () => {
  const result = solve('111');
  expect(result).toBe(3);
});
