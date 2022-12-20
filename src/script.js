// Initialize variables for the first two terms of the Fibonacci sequence
let term1 = 1;
let term2 = 2;

// Initialize the sum to the value of the second term (since it's an even number)
let sum = term2;

// Set the maximum value for the Fibonacci sequence
const maxValue = 4000000;

// Calculate the next term in the Fibonacci sequence until we reach the maximum value
while (term1 + term2 <= maxValue) {
  // Calculate the next term in the sequence
  let nextTerm = term1 + term2;
  
  // If the next term is even, add it to the sum
  if (nextTerm % 2 == 0) {
    sum += nextTerm;
  }
  
  // Set the first term to the second term and the second term to the next term
  term1 = term2;
  term2 = nextTerm;
}

// Display the final sum in the HTML element with id "sum"
document.getElementById("sum").innerHTML = sum;
