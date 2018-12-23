const solve = input =>
  input.map((x, i) =>
    input.reduce((total, y, j) => i === j ? total : total * y, 1)
  );

// Tests
function test(input) {
  console.log(`Input = "${input}": output = "${solve(input)}"`);
}

test([1, 2, 3, 4, 5]);
test([3, 2, 1]);
