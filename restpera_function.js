//     by using rest parameter, we can hold/store more than one value
//     ES6
//     we will represent rest parameter with "..." operator
//     "..." operator called as spread operator
//     we can have only "one" spread operator per function
//     position of spread operator should be last in occurances

// function fun_one(...arg1) {
//   console.log(arg1);
// }
// // fun_one();
// fun_one("Hello_1");
// fun_one("Hello_1", "Hello_2");
// fun_one("Hello_1", "Hello_2", "Hello_3");
// fun_one(undefined, undefined);
// fun_one(undefined, null);

// function fun_one(...arg1,...arg2){

// };

// function fun_one(...arg1,arg2){}

// function fun_one(arg1, arg2 = "Hello_2", ...arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one();
// fun_one("Hello_1", undefined, "Hello_3", "Hello_4");
// fun_one(undefined, undefined, undefined);
// fun_one(null, null, null);

// // A rest parameter must be last in a parameter list.
// function fun_one(...arg1,arg2)
// {
//     console.log(arg1,arg2)
// }
// fun_one("Hello_1","Hello_2")