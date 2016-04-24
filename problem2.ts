// Problem 2 - Even Fibonacci numbers (TypeScript)
function sumOfEvenFibonacciNumbers(limit: number) {
    let previousOne = 1;
    let previousTwo = 2;
    let sum = previousTwo;
    let term = 0;
    let flip = true;

    console.log(`starting with terms: ${[previousOne, previousTwo]}`);

    for (let i = previousTwo; i < limit; i++) {
        term = previousOne + previousTwo;

        if (term >= limit) { break; }
            console.log(`next term is: ${term}`);
        if (term % 2 == 0) {
            sum += term;
        }

        if (flip) {
            previousOne = term;
        } else {
            previousTwo = term;
        }

        flip = !flip;
    }

    console.log(`sum of even terms: ${sum}`);
}

let limit = 4 * 1000 * 1000;
sumOfEvenFibonacciNumbers(limit);
