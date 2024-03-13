
/* Spread operator for objects and arrays. Spread operators it's useful for copyng a variable */

/* Objects
let user = {
    name: "pepito",
    email: "pepito@gmail.com"
}

user.id = 2;
console.log(user); */


let user = {
    name: "pepito",
    email: "pepito@gmail.com"
};
//Spreading an object into another one

let userWithId = {
    id: 2,
    ...user
};

// console.log(userWithId);
// console.log(user);

// Spread Array

let numbers = [1, 2, 3];

// Here will get all the numbers plus the pushed 15;
let newNumbers = [...numbers]; 

newNumbers.push(15)

console.log(numbers);
console.log(newNumbers);