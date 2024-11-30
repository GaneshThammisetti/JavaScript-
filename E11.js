
const salaries = {
    "roy": 100000,
    "johny": 150000,
    "kiran": 90000,
    "pavan": 120000
  };
  
  
  function sortSalariesByValue(salaries) {
    
    const entries = Object.entries(salaries);
  
    
    entries.sort((a, b) => a[1] - b[1]); 
  
    
    const sortedSalaries = Object.fromEntries(entries);
    
    return sortedSalaries;
  }
  
  
  const sortedSalaries = sortSalariesByValue(salaries);
  
  console.log(sortedSalaries);
  
  