
const object1 = {
    Name: "Nani",
    Age: 25
  };
  
  const object2 = {
    City: "Hyderabad",
    Country: "India"
  };
  
  
  const mergedObject = { ...object1, ...object2 };
  
  console.log(mergedObject);
  
  
  