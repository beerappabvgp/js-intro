const names = ["satish", "pavan", "rupesh"];
console.log(names);


// accessing

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[1] = "Manoj";

console.log(names);

names.pop();

console.log(names)


names.push("Ashwin");
console.log(names);


for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// nested arrays

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(matrix[0]);
console.log(matrix[0][2]);