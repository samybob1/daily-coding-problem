const solve = numbers => {
    const positives = numbers.filter(x => x > 0);
    const unique = new Set(positives);
    const sorted = [...unique].sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        const number = sorted[i];
        const previous = number - 1;
        const next = number + 1;

        if (previous > 0 && !unique.has(previous)) {
            return previous;
        }

        if (next > 0 && !unique.has(next)) {
            return next;
        }
    }

    return null;
};

// Tests
function test(numbers) {
    console.log(`Input = "${numbers}": output = ${solve(numbers)}`);
}

test([3, 4, -1, 1]);
test([1, 2, 0]);
