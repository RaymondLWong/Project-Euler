// Problem 3 - Largest prime factor (TypeScript)

function findPrimeFactors(n: number) {
    let primeFactors: Array<number> = [];
    let i = 2;

    while (n !== 1) {
        if (n % i === 0) {
            primeFactors.push(i);

            while (n % i === 0) {
                let primeFactor = n / i;
                console.log(`${n} / ${i} = ${primeFactor}`);
                n = primeFactor;
            }
        }

        i++;
    }
    console.log(`the prime factors of ${n} are ${primeFactors}`);
    console.log(`the largest prime factor is ${primeFactors[primeFactors.length -1]}`);
}

var targetStr = '600,851,475,143';
var target = parseInt(targetStr.replace(/,/g, ''), 10);

findPrimeFactors(target);
