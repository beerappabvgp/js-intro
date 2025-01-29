// copy by value

// It is actually copying the data
let x = 100;
let y = x;

// x = 

console.log("y = ", y);
console.log("x = ", x);

x = 90;

console.log("y = ", y);
console.log("x = ", x);


// copy by reference 

// the address location of the data is getting copied 

let address = {
    "country": "India",
    state: "AP",
    pincode: 645432,
    doorNo: 8943,
}

let user = {
    name: "ganesh",
    age: 23,
    address: address
}

let userCopy = user;

console.log("user: ", user);
console.log("userCopy: ", user);

user.name = "vishnu";

console.log("======================================");

console.log("user: ", user);
console.log("userCopy: ", userCopy);

// user - 0xAS

// userCopy - 0xAS


// 0xAS => {name: "ganesh"}

// 0xAS => {name: "vishnu"}


// Heap and Stack

// RAM - Heap and Stack

// let x = 100;
// stack -> x - OxA - 100
// let y = 200;
// stack -> y -> 0xS - 200
// let z = y;
// stack -> z -> 0xW - 200

// let y = 1000;
// stack -> y -> 0xS - 1000;


// Heap 

// let user = {
//     name: "ganesh",
//     age: 23,
//     address: "XYZ"
// }

// Heap -> 0xHeap {
//     name: "ganesh",
//     age: 23,
//     address: "XYZ"
// }

// stack -> user -> 0xHeap
// let userCopy = user;
// stack -> userCopy -> 0xCopy = 0xHeap

// user.name = "vishnu"
// heap => 0xHeap => {
//     name: "vishnu",
//     age: 23,
//     address: "XYZ"
// }



// let user2 = {...user};

// stack -> user2-> 0xuser => 0Xuser2

// heap -> 0xuser2 => {
//     name: "vishnu",
//     age: 23,
//     address: "XYZ"
// }

let nums = [1,2,3];

let numsCopy = nums;

console.log("nums: ", nums);
console.log("numsCopy: ", numsCopy);

console.log('==========================================');
nums.push(100);

console.log("nums: ", nums);
console.log("numsCopy: ", numsCopy);


let user2 = {...user};

console.log("user: ", user);
console.log("user2: ", user2);

user.name = "modified";

console.log("========================================");

console.log("user: ", user);
console.log("user2: ", user2);


console.log("-------------------------------------------------");

console.log("user: ", user);
console.log("user2: ", user2);

user.address.country = "US";


console.log("-------------------------------------------------");

console.log("user: ", user);
console.log("user2: ", user2);




// deep copy // shallow copy

console.log("-===-=--=============================")

let user3 = {...user, address: {...user.address}}

console.log("user: ", user);
console.log("user3: ", user3);


user.address.country = "EN";
console.log("-===-=--=============================")
console.log("user: ", user);
console.log("user3: ", user3);