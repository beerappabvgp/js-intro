let age = 19;

// if (age >= 18) {
//     console.log("The person is eligible to vote .. .");
// } else {
//     console.log("the person is not eligible to vote ... ");
// }

// given a number to me I wanted to print the day 

let number = 1;

// if (number === 1) {
//     console.log("monday ... ");
// } else if (number === 2) {
//     console.log("tuesday .....");
// } else if (number === 3) {
//     console.log("wednesday .... ");
// } else if(number === 4) {
//     console.log("Thursday .... ");
// } else if(number === 5) {
//     console.log("Friday .... ");
// } else if(number === 6) {
//     console.log("Saturday .... ");
// } else if(number === 7) {
//     console.log("Sunday ...");
// } else {
//     console.log("Not a valid day .... ");
// }

// shorthand operator

(age >= 18) ? console.log("Eligible for voting ....") : console.log("Not eligible for voting .... ")


// switch statement in js 


switch(number) {
    case 1: 
        console.log("monday ....");
        break;
    case 2:
        console.log("tuesday ... ");
        break;
    case 3:
        console.log("wednesday ... ");
        break;
    case 4:
        console.log("Thursday ... ");
        break;
    case 5:
        console.log("Friday ....");
        break;
    case 6:
        console.log("Saturday ...");
        break;
    case 7:
        console.log("Sunday ...");
        break;
    default:
        console.log("Not a valid day ... ");
        break;
}