function generateFibonacci(n) {
    
    let fibonacciSequence = [];
    
    
    if (n <= 0) {
      return fibonacciSequence; 
    } else if (n === 1) {
      fibonacciSequence.push(0); 
    } else {
      fibonacciSequence.push(0, 1); 
    }
    
    
    for (let i = 2; i < n; i++) {
      
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }
    
    return fibonacciSequence;
  }
  
  // Example usage:
  const numTerms = 10; // Generate the first 10 Fibonacci numbers
  console.log(generateFibonacci(numTerms));
  