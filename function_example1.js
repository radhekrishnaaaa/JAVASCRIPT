let function_one = function fun_one()
{
   console.log("Called fun_one");
   return "return fun_one"
 }
 // console.log(function_one)
 function fun_two(xyz)
 {
   console.log(" inside Before")
   console.log(xyz)
   console.log(" inside After")
 }
 console.log(" outside Befor")
 fun_two(function_one())  //fun_two("return fun_one")
 console.log(" outside After")/

// ===============================================================

// let function_one = function fun_one()
// {
//   console.log("Called fun_one");
//   return "return fun_one"
// }
// function fun_two(xyz)
// {
//   console.log("called fun_two")
//   return xyz
// }
// let new_var_of_fun_one = fun_two(function_one);
// console.log(new_var_of_fun_one())

// ======================================================================


function fun_one(num1)
{

    return num1*2
}
function fun_two(num2)
{
    return num2*5
}
function fun_three(param1,param2)
{
    return param1+param2;
}
console.log(fun_three(fun_one(10),fun_two(10)))