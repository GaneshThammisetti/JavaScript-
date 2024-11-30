let user = {
    name: "kiran",
    age: 21
  };
   // Function to clone the object
  function cloneObject(obj) {
    let clone = {};  
    for (let key in obj) {
      clone[key] = obj[key];  
    }
    return clone;  
  }
  
  let userClone = cloneObject(user); 
  console.log(userClone); 
  