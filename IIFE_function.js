//     Immidiate Invokable Functional Expression
//     ES9
//     when ever we create the functions, automatically it will be invoked
//     Syntax
//     ******
//     ((arg1,arg2,arg3,....argn)=>{
//         business logic
//     })(param1,param3,param3,....paramn);

let a = [12];
console.log(a);

a.push(() => {
  console.log("IIFE");
});

console.log(a[1]());
//IIFE

((arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3);
})("Hello_1", "Hello_2", "Hello_3");
//Hello_1 Hello_2 Hello_3

let x = () => {
  return "hello";
};
console.log(x());

((arg1, arg2, arg3) => {
    console.log(arg1(), arg2, arg3);
  })(
    () => {
      return "hello_1";
    },
    (() => {
      return "hello_2";
    })(),
    (() => {
      return "hello_3";
    })()
  );
