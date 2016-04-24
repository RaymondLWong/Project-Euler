// Problem 1 - Multiples of 3 and 5 (TypeScript)
function simpleSolution(limit: number) {
    var sum = 0;

    while (limit--) {
        if (limit % 3 === 0 || limit % 5 === 0) {
            sum += limit;
            console.log(`limit is: ${limit}, sum is: ${sum}`);
        }
    }

    console.log(`simple solution sum is ${sum}`);
}

function genericSolution(multiples: Array<number>, limit: number) {
    let sum = 0;

    while (limit--) {
        // must not add number more than once
        multiples.some((multiple) => {
            if (limit % multiple === 0) {
                sum += limit;
                return true;
            }
        });
    }

    console.log(`generic solution sum is ${sum}`);
}

const LIMIT = 1000;
simpleSolution(LIMIT);
genericSolution([3, 5], LIMIT);
