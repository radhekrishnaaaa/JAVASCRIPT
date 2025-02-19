    // while defining the functions, we will initilize arguments with default values
    // this concept introduced in ES6

function fun_one(arg1 = "Hello_1", arg2 = "Hello_2", arg3 = "Hello_3") {
  console.log(arg1, arg2, arg3);
}
fun_one();
fun_one("H_1", "H_2", "H_3");
fun_one("Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4");
fun_one(undefined, undefined, undefined);
fun_one(null, null, null);
fun_one(undefined, undefined, "H_3");

function fun_one(arg1,arg2="hello_2"){
    console.log( arg1, arg2 );
}
fun_one();
fun_one("hello_1");
fun_one(undefined,undefined);
fun_one(null,null);