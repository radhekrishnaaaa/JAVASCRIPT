function myFunc()
{
    return "calling myFunc";
}
console.log(typeof(myFunc));
console.log(myFunc());
console.log(myFunc);
let newFunc = myFunc;  //function assignment
// console.log(newFunc);
console.log(newFunc());

console.log("Before function");
function doSum1(a,b) {
    // console.log("inside function");
    // console.log(a+b);
    return a+b;

}
console.log(doSum1(10,20)); //function calling
console.log("Before function");

function doSum2(a, b) {
  console.log(a + b);
}
doSum2(10, 20);

function doSum3(a, b) {
  return a + b;
}
console.log(doSum3(100, 200));



function fun_one(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
fun_one("ReactJS", "NodeJS", "MongoDB");
fun_one("Node");
fun_one(undefined, "NodeJS");
fun_one(null, null, null);

//-===================================

let function_one = function fun_one()
{
  console.log("Called fun_one");
  return "return fun_one"
}
// console.log(function_one)
function fun_two(xyz)
{
  // xyz()
  console.log(xyz())
  // console.log("Called fun_one");
}
fun_two(function_one)
