

//ANCHOR -------> Metodo map, filter y find, programación funcional

let numbers = [2, 4, 5];

/* In the first position of the callback, it receives the first element and then the position */
let mappedNumbers = numbers.map((element, index) => element + index);
console.log(mappedNumbers);

//Filter

let products = [
    {
        name: "telephone",
        price: 150
    },
    {
        name: "computer",
        price: 200
    },
    {
        name: "tablet",
        price: 100
    }
];

let filteredProducts = products.filter((element, index) => element.price > 150)
console.log(filteredProducts);

// FIND: Just returns the element that match with the condition, always choose the first match.

let selectedProduct = products.find((element, index) = element.price === 150)
console.log(selectedProduct);

