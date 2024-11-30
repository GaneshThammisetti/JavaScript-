//implicit to string//

var result= "3"+"45";
console.log(result);

//implicit to boolean//

var result= "3"+"true";
console.log(result);

//Number Explicity//

var result= "999";
console.log(result);
result= Number(result);
console.log(typeof(result));
var str=String(result);
console.log(str);
console.log(typeof(str));