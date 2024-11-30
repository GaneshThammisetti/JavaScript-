let student = {
    name: "akhil",
    age: 21,
    grade: "A"
  };
  
  // Loop through each key in the student object
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  