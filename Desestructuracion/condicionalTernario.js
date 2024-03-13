

//COnditional render: La información que le voy a mostrar el usuario por pantalla

/* Cuando se usa jsx no se pueden usar if, si ternarios */

let userRole = "buyer";

if (userRole === "seller") {
  console.log("Your stock is 10 products");
} else {
  ("You are not allowed to see this information");
}

//Ternario: es una forma de escribir un condicional en una sola línea

let userRole2 = "buyer"

if(userRole === "seller"){
  console.log("Your stock is 10 products")
};
console.log(userRole === "seller" && "Your stock is 10 products");

/* Operador ternario > Si el rol de usuario es vendedor, mostrar el mensaje*/

let message =
  userRole === "seller"
    ? "Your stock is 10 productos"
    : "I am sorry, i can not show you this information";

console.log(message);