// objects => collction of key value pairs 

// name -> bharath
// age -> 23
// address -> AP


let address = {
    "country": "India",
    "State": "AP",
    "district": "CTR",
    "street": "Gandhi Street",
    "doorNumber": "6-9",
    "pincode": "673324"
}

let user = {
    name: "anil",
    age: "23",
    address: address
}


console.log(user);
console.log(user.address.street);
console.log(user.address.country);

delete user.address.pincode;
console.log("deleted pincode : ", user);


// console.log(user);


// // Reading the object data

// console.log("user.name = ", user.name);
// console.log("user.age = ", user.age);

// // []

// console.log("Accessing using bracket notation ... ", user["name"]);
// console.log("address ... ", user["address"]);


// // Updating the js object 

// user.name = "Ganesh";

// console.log("Updated the user name ... ", user);


// // deleting the property inside of an object


// delete user.age;
// console.log("Deleted the age ... ", user);

// // ALL the CRUD operations 


// // nested objects 

