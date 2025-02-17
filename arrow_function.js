function fun_one(num1)
{
    return num1*2
}

let fun_one = (num1) => {
    return num1*2;
}

let fun_one = (num1,num2) => num1*num2;
console.log(fun_one)
console.log(fun_one(10,20))

let fun_one = (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
};
fun_one("Angular13", "NodeJS", "MongoDB");
fun_one("ReactJS", "NodeJS", "MongoDB");
fun_one("VueJS", "NodeJS", "MongoDB");
fun_one();
fun_one(undefined, "Hello_2");
fun_one(null, null, null);