function reverseString(str) {
    let reversed = ''; // Initialize an empty string to store the reversed string

    // Loop through the input string starting from the end
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Add each character to the reversed string
    }

    return reversed; // Return the reversed string
}

// Example usage
const inputString = "hello";
console.log(reverseString(inputString)); 
