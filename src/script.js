// Set the number of prime numbers we want to find
const numPrimes = 10001;

// Initialize the current number and count of primes to 2 (since it's the first prime number)
let currentNumber = 2;
let numPrimesFound = 0;

// Keep checking for prime numbers until we find the desired number
while (numPrimesFound < numPrimes) {
  // Assume the current number is prime
  let isPrime = true;
  
  // Check if the current number is divisible by any number less than itself
  for (let i = 2; i < currentNumber; i++) {
    if (currentNumber % i == 0) {
      // If the current number is divisible by another number, it's not prime
      isPrime = false;
      break;
    }
  }
  
  // If the current number is prime, increment the count of primes found
  if (isPrime) {
    numPrimesFound++;
  }
  
  // Move on to the next number
  currentNumber++;
}

// The current number is the 10001st prime number
const prime = currentNumber - 1;

// Display the 10001st prime number in the HTML element with id "prime"
document.getElementById("prime").innerHTML = prime;
