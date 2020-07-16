
// Inch to  feet convert
function inchToFeet(n) {
    var result = n / 12;
    return result
}
console.log(inchToFeet(120))
console.log(inchToFeet(61))


// find a leap year.. solve one
var IsLeapYear = 2024;
if (IsLeapYear % 4 == 0 && IsLeapYear % 100 != 0) {
    console.log("This year is leap year")
}
else if (IsLeapYear % 400 == 0) {
    console.log("This year is leap year")
}
else {
    console.log("This year is not leap year")
}
// .. solve tow
function isLeapYear(year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}
console.log(isLeapYear('2000'))


// Calculate Factorial of a number using for loop, function, while loop
let isFactorial = 1;
for(i = 1; i <5; i++){
    isFactorial = isFactorial * i;
    console.log(isFactorial, i)
}

function Factorial(n) {
    let isFactorial = 1;
    for (i = 1; i <= n; i++) {
        isFactorial = isFactorial * i;
    }
    return isFactorial, i;
}
console.log(Factorial(6))

function factorial(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact = fact * i
        i++
    }
    return fact
}
console.log(factorial(5))


// recursive function
function isFactorial(n) {
  if(n == 0){
      return 1
  }else{
      return n * isFactorial(n-1)
  }
}
console.log(isFactorial(5))


// Create a Fibonacci Series using a for loop & recursive
function fibo(n) {
    let fibonacci = [0, 1];
    for (i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci
}
console.log(fibo(10))

function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {

        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(10))



// Check whether a number is a Prime Number or not. 2 system loop & function

let isPrime = 10;
for (i = 2; i < isPrime; i++) {
    if (isPrime % i == 0) {
        console.log("It's a prime numbur")
    }
    else {
        console.log("It's not a prime numbur")
    }
    break
}

function isPrime(n){
    for(i = 2; i<n; i++){
        if(n%i==0){
            return "It's a prime numbur"
        }
        else{
            return "It's not a prime numbur"
        }
    }
}
console.log(isPrime(11))










