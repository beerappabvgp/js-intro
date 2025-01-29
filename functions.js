function add(num1, num2) {  // num1, num2 are called parameters 
    return num1 + num2;
}

// function sub(num1, num2) {
//     let res = num1 - num2;
//     return res;
// }

let resu = add(20,30);  // 20, 30 are arguments
console.log(resu);

// console.log("The sum of two numbers is : ", res);
// let subRes = sub(30, 10);
// console.log("The sub of two numbers is : ", subRes);


// functions

// 1. it accepts some inputs
// 2. it process the inputs the data
// 3. it returns the result 
// It avoids the repetition of code



// function expressions 

// let add = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(add(20,30));


// arrow functions

// let add = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(add(100, 100));


// Anonymous functions

// It does not have a function name 

// const add = function (num1, num2) {
//     return num1 + num2;
// }

// add(23,3);


// IIFE 

// let res = (function(num1, num2) {
//     return num1 + num2;
// })(200, 30);


// // add(10, 20);

// console.log(res);


// default arguments 
function greet(name="bharath") {
    console.log("hello ", name);
}

greet();