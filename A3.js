function sumArray(numbers) {
    let sum = 0; // Initialize a variable to store the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Add each number in the array to the sum
    }
    return sum; // Return the total sum
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));  // Output: 15
