// varibal is an identifier that can store information
// int x;
// variable is container name given to location
// identifier..

// variale declare using keyword "var" ,"let","const"


var var1 = "C Language";
console.log(var1);
let x=10
const y =30;
console.log(x)
console.log(y)
console.log(typeof var1);
var var1 = 10;
console.log(typeof var1);
var var1 =true;
console.log(typeof var1);



// string : collection of charater
// using singlequote ''
// using doublequote " "
// using backtick  `  introduced in es6
// backtick also known as template literal--(IQ)
// backtick also used in paragraph


// let para = 'Loremipsum do lor, sit ametconsecteturadipisicing elit.Voluptatibus, sed!`

// let para1 = 'Lorem ipsum dolor, "sit" amet consectetur adipisicing elit. Voluptatibus, sed!'
// let para1 = `Lorem ipsum dolor, "sit" amet consectetur adipisicing 'elit'. Voluptatibus, sed!`
// console.log(para1)


let a ;
console.log(a)


function test(){}
console.log(test)


console.log(typeof "Hello");                  //string
console.log(typeof 100);                      //number
console.log(typeof true);                     //boolean
console.log(typeof undefined);                //undefined
console.log(typeof null);                     //object
console.log(typeof []);                       //object
console.log(typeof function () { });          //function
console.log(typeof {});                       //object
console.log(typeof 100n);                     //bigint
console.log(typeof Symbol("Hello"));          //symbol

var large_number = 28169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946281692683912639269236928468129462816926839126392692369284681294628169268391263926923692846812946n;
let large_number = 1n;
console.log(typeof large_number);