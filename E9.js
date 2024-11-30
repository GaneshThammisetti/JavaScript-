function createUserInfo(userInfo = {}) {
   
    const { name = 'jay', age = 25, city = 'UP' } = userInfo;
    
 
    return { name, age, city };
  }
  
  
  const userInfo1 = { name: 'rakesh', age: 24 };
  const userInfo2 = { city: 'london' };
  const userInfo3 = {};
  
  console.log(createUserInfo(userInfo1)); 
  console.log(createUserInfo(userInfo2)); 
  console.log(createUserInfo(userInfo3)); 
  console.log(createUserInfo());