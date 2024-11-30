// Block scope //

a=8
if(a>3)
{
    console.log("in");
    var b=20;
}
console.log(b);


// Local or Function block // error

function fn()
{
    var a=10;
    console.log(a);
}
fn();
console.log("out side a value"+a);