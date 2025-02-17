let fun_one = () => {
  return "Hello";
};
console.log(fun_one);

let fun_One = ()=>{
    return ()=>{
        return() =>{
            return "ano_2 inside 1"
        } //anonymous function _2
    }  //anonymous function _1
}
console.log(fun_One()()())


let fun_two = () => {
  return () => {
    return () => {
      return "Hello";
    };
  };
};
console.log(fun_two()()());

let fun_three = (arg1,arg2,arg3)=>{
    console.log(arg1(),arg2(),arg3())
}
fun_one(
    ()=>{return "ano_1"},
    ()=>{return "ano_2"},
    ()=>{return "ano_3"}
)
fun_one(
    ()=> "ano_1",
    ()=> "ano_2",
    ()=> "ano_3"
)