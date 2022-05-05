// This is my first js code.
console.log("hello world!"); // inspect -> console and also in cmd " node index.js "

// defining a variable.
let name = "Mudit"; // by default value of a variable is undefined.
console.log(name);

// defining a constant.
const interestRate = 5.5;
//interestRate = 5.4; // Uncaught TypeError: Assignment to constant variable.
console.log(interestRate);

// primitives or value-types
let surname = "Tyagi"; // string literal
let age = 19; // number literal
let isApproved = true; // boolean literal
let random1; // undefined literal
let random2 = undefined; // undefined literal
let random3 = null; //typeof null >> 'object'

// reference-types ~ object, array, function.
// object
let person = { name: "lamao", age: 20 };
console.log(person); // dot notation
person.name = "Sagar"; // bracket notation
person["age"] = 34;
console.log(person.age);
console.log(person["name"]);

// array
let color = ["blue", "red"];
color[2] = "green";
console.log(color);
console.log(color[2]);
console.log(color.length); // there are more...

// function
// console.log() is also a function...
function greet(sh) {
  alert("This is done by greet function." + sh);
}
let shutup = "\nClose this tab or die, choice is YOURS..";
greet(shutup);
