const { cons, car, cdr } = require("./5");

test("car(cons(3, 4) to return 3", () => {
  const result = car(cons(3, 4));
  expect(result).toBe(3);
});

test("cdr(cons(3, 4) to return 4", () => {
  const result = cdr(cons(3, 4));
  expect(result).toBe(4);
});
