// Initialize sum to 0
let sum = 0;

// Iterate through all numbers from 1 to 999
for (let i = 1; i < 1000; i++) {
  // If the number is a multiple of 3 or 5, add it to the sum
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

// Display the final sum in the HTML element with id "sum"
document.getElementById("sum").innerHTML = sum;
