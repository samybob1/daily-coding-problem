function containsAddUpTo(numbers, total) {
    let left = 0;
    let right = numbers.length - 1;
    numbers.sort((a, b) => a - b);

    while (left < right) {
        const result = numbers[left] + numbers[right];

        if (result === total) {
            return true;
        }

        if (result < total) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

// Tests
function test(numbers, total) {
    console.log(`List "${numbers}" contains two numbers that add up to ${total}?`, containsAddUpTo(numbers, total));
}

test([10, 15, 3, 7], 17);
test([82, 7, 28, 3], 35);
test([13, 1, 82, 9], 20);
test([5, 120, 2, 3], 99);
