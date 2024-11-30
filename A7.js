function countVowels(str) {
    // Initialize a counter for vowels
    let vowelCount = 0;
    
    // Define the vowels (both lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (vowels.includes(str[i])) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
  // Example usage:
  const inputString = "Hello World!";
  console.log(countVowels(inputString)); // Output: 3
  