// Set the number for which we want to find the largest prime factor
const number = 600851475143;

// Initialize the largest prime factor to 2 (since it's the smallest prime number)
let largestPrimeFactor = 2;

// Divide the number by 2 until it's no longer divisible
while (number % 2 == 0) {
  number /= 2;
}

// Start checking for prime factors at 3
let divisor = 3;

// Keep checking for prime factors until the divisor is greater than the number
while (divisor <= number) {
  // If the number is divisible by the divisor, divide it by the divisor and update the largest prime factor
  if (number % divisor == 0) {
    number /= divisor;
    largestPrimeFactor = divisor;
  }
  // Otherwise, move on to the next possible divisor (skip even numbers)
  else {
    divisor += 2;
  }
}

// If the number is still greater than 2, it's the largest prime factor
if (number > 2) {
  largestPrimeFactor = number;
}

// Display the largest prime factor in the HTML element with id "largest"
document.getElementById("largest").innerHTML = largestPrimeFactor;
