// how do we declare variables in js 

// let, var , const 


// console.log(user);  // TDD 

// // let userName = "Ganesh";

// const user = "Vishnu";

// console.log("user after initialization : ", user);

// console.log(userName);


// js has a behaviour called hoisting 

// All the variable or function declarations will be moved to the top 




// 


// var user;
// console.log(user);
// user = "Vishnu";
// console.log("user after initialization : ", user);



// When I tried to access the variable that is defined with var it shows undefined
// But when I tried to access the same variable using const, let I got reference error right



// Function hoisting 


// greet("Ganesh");

// function greet(name) {
//     console.log("Hello, ", name);
// }


// under the hood

// function greet(name) {
//     console.log("Hello, ", name);
// } 

// greet("Ganesh");



// arrows functions


// greeting(); // tdd

// const greeting = () => {
//     console.log("This is from arrow function ... ");
// }



// under the hood

// const greeting;
// greeting();
// greeting = () => {
//     console.log("This is from arrow function ... ");
// }



// greeting(); // tdd
// console.log("greeting = ", greeting);
// var greeting = () => {
//     console.log("This is from arrow function ... ");
// }

// greeting();

// under the hood

// var greeting = undefined;
// console.log("greeting = ", greeting);
// greeting = () => {
    // console.log("This is from arrow function ... ");
// }
// greeting();

// let user = "dsfn";

// user();


// console.log("greeting = ", greeting);
// let greeting = () => {
//     console.log("This is from arrow function ... ");
// }

// greeting();

// under the hood

// let greeting;
// console.log("greeting = ", greeting);
// greeting = () => {
//     console.log("This is from arrow function ... ");
// }
// greeting();



// let , const , var 


// console.log("user: ", user);
// let user = "dskf";


// user = undefined
// var -> undefined
// let , const => TDD => reference error 


// greeting();

// var user = "dsfgn"
// console.log(user)


// console.log(user);
// var user = "sdfdg"


// global scope 
// let global = "global variable";

// const greeting = () => {
//     let local = "local";
//     console.log("local inside of greeting ... ");
//     console.log("greeting ... ");
//     console.log("I am accessing global var : ", global);
//     global = "I have modified ... "
// }

// const task1 = () => {
//     let local = "task1 var";
//     console.log("task1 var: ", local);
//     global = "Task1 has modified it .. .."
// }

// greeting();
// console.log("Global var after greeting has modified ... ", global);
// task1();

// console.log("Global var is : ", global);
// // console.log("local in global scope : ", local);



// const names = ["sad", "sdf", "sadf", "euhd"];

// for(let i = 0; i < names.length; i++) {
//     console.log(`name ${i} is: `, names[i]);    
// }

if (true) {
 let ud = "DSfj";
} else if(true){

} else {

}




// // lexical scope
// let global = "global variable";

// const greeting = () => {
//     let local = "local";
//     // let global = "This is local variable to the greeting";
//     console.log("I am accessing global var : ", global);
// }

// greeting();

// scope chain 


// lexical 


// const globalVar = "This is Global to all the functions ... ";

const task1 = () => {
    const data = "Data from task1";
    const task2 = () => {
        const res = "data2 result"
        // const global = "This is task2 variable...";
        console.log("Global at task2 : ", globalVar);
        // console.log(data);
        const task3 = () => {
            // const taskData = "This is task3 ... "
            // console.log(taskData);
            // console.log(res);
            let global = "This is task3 variable ... "
            // console.log("Global is : ", global);
        }
        task3();
    }
    task2();
}

task1();

// task3()
// task2()
// task1()
// global scope 

// First checks the current scope

// If the variable is not present in the current scope then it searches for the variable in the outer scope


// Global scope => Line 1 => Line 235


let jdndf = "fs"



