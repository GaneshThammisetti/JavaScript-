function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;  
    }
    return count;  
  }
  
  let user = {
    name: "Akhil",
    age: 21,
    isAdmin: true
  };
  
  console.log(countProperties(user));  
  