function mergeObjects(userInfo1, userInfo2) {
    
    return Object.assign({}, userInfo1, userInfo2);
  }
  
  // Example usage:
  const userInfo1 = { name: "sunny", age: 25, city: "AP" };
  const userInfo2 = { age: 23, city: "TS", country: "INDIA" };
  
  const mergedUserInfo = mergeObjects(userInfo1, userInfo2);
  console.log(mergedUserInfo);

  