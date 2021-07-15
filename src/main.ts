function isPrime(number: number): boolean {
    let isPrime: boolean = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    //Mac dinh la true nen ko can xet TH number = 2
    return isPrime;
}

console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(16));

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum = 0;
for(let number of array){
    if(isPrime(number)){
        sum+=number;
        console.log(number);
    }
}
console.log(`Sum of number: ${sum}`);