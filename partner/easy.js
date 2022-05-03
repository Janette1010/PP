// EASY
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let odds = arr.filter(n => n % 2)

console.log(odds)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let even = arr1.filter(n => n % 2 == 0);

console.log(even)
// EASY 2
function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            // TODO: write the code to check for prime numbers
        }
    }
}
let isPrime = checkPrime(5)
console.log(isPrime);
