
/* Desestructuración hace el código más limpio y ordenado *- Desestructurar objetos y arreglos*/

let puppet = {
  name: "Jack",
  age: 2,
  race: "streetDog",
};

// console.log(puppet.name);
// console.log(puppet.age);
// console.log(puppet.race);

// Objects

const { age, race, name } = puppet;

console.log(name);
console.log(age);
console.log(race);

//Arrays

const puppetsArray = ["Jack", "Mike", "Joe"];

const [position1, position2, position3] = puppetsArray;
const [, , searchedPosition] = puppetsArray; //se dejan posiciones para sacar un elemento de un array

console.log(puppet1);
console.log(puppet2);
console.log(puppet3);
