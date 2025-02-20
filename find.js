//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//Return value
// The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
//================================================================================================
let array1 = [6, 5, 13, 14, 15];
let isLargeNumber = (element) => element > 10;
console.log(isLargeNumber(14))                     //true
console.log(array1.find(isLargeNumber));           //13

let arr = [10, 20, 20, 30, 10, 60];
console.log(arr.find(element => element === 30));  //30