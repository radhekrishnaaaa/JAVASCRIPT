// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned

// Return value
// The index of the first element in the array that passes the test. Otherwise, -1
// ================================================================================================
// let arr = [10, 20, 20, 30, 10, 60];
// function test(element)  {
//     console.log("element : " + element)  // element : 10  0
//     return "HEllo";
//   }
// console.log(
//   arr.findIndex(test)
// );

// let arr = [10, 20, 20, 30, 10, 60];
// console.log(arr.findIndex(element => element === 30));   // 3


// let array1 = [6, 5, 13, 14, 15];
// let isLargeNumber = (element) => element > 10;
// console.log(isLargeNumber(13))                      //true
// console.log(array1.findIndex(isLargeNumber));            //2


// let arr1 = [100, 200, 300, 400, 500, 60];
//  console.log(
//   arr1.findIndex((element, index) => {
//     return element === 300;
//   })                                          //2
// );