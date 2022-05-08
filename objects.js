/*
const circle = {
  // number
  radius: 5,
  // object-nested
  location: {
    x: 1,
    y: 1,
  },
  //boolean
  isVisible: true,
  //function
  draw: function () {
    console.log("draw");
  },
};
*/
// calling the draw method.
//circle.draw();

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// factory functions
function createCircle(rad) {
  return {
    radius: rad,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(5);
console.log(circle1);

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// constructor functions
function CreateCircle(rad) {
  this.radius = rad;
  this.draw = function () {
    console.log("draw");
  };
  // 'this' is a kind of an object.
}
const Circle2 = new CreateCircle(7);
// new creates an empty js object
// 'this' objects are added to 'new'.
console.log(Circle2);

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// functions are objects
console.log("name of the object -> ", CreateCircle.name);
console.log("number of arguements ->", CreateCircle.length);
console.log("who created this object? ->", CreateCircle.constructor);

CreateCircle.call({}, 6);
// first arguement is a empty object indicating 'this'
// it is equivalent to the code in line 45.

CreateCircle.apply({}, [6, 7, 5, 98]);
//useful when we want to pass an array as the second arguement

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

let x = { value: 10 };
let y = x; // both x and y are pointing to the same address where value is stored.
x.value = 20;

const person = {
  name: "mudit",
  age: 19,
};

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// enumeration of properties of an object
for (let iterator of Object.keys(person)) {
  console.log(iterator);
  // Object is a built-in constructor function
  // Object.keys return a string array which contains the properties and methods of this object
}

for (let iterator of Object.entries(person)) {
  console.log(iterator);
  // instead of returning the key only, 'Object.entries' return key value pair as an array
}

if ("name" in person) {
  console.log("is 'name' in the object named 'person' ? ", true);
}

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// cloning an object
let human = {};
// using for-in loop
for (let key in person) human[key] = person[key];
console.log("copied using for loop ->", human);

// using Object.assign
// let people = Object.assign({}, person);
let people = Object.assign({ color: "yellow" }, person);
console.log("copied using 'Object.assign' ->", people);

// using spread operator
let beings = { ...person };
beings.race = "brown";
console.log("copied using spread operator ->", beings);

// ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~

// strings
// google - 'javascript string'
// google - 'javascript math'

// string ~ primitve
// although, string is primitive data type, there are functions and methods of string
// this is because, the compiler automatically converts the primitive datatype to 'String' constructor function
// it is hence assumed to be an object.

// something like this
// string ~ object
// built-in constructor 'String()'
let text = new String("hello");
let message = " my first message hehe ";

// the length of the string
console.log("length ->", message.length);

// return the character at a perticular index
console.log("character at index 0 ->", message[2]);

// return the character at a perticular index
console.log("character at index 1 ->", message[1]);

// checks if the string contains 'xyz'
console.log("does this string have 'my' ? ->", message.includes("my"));

// if the string ends with 'xyz'
console.log(
  "does this string starts with 'mudit' ? ->",
  message.startsWith("mudit")
);

// if the string ends with 'xyz'
console.log("does this string ends with 'hehe' ? ->", message.endsWith("hehe"));

//does not change the original one
console.log("replace 'hehe' with 'haha' ->", message.replace("hehe", "haha"));

// converts the text to uppercase
console.log("uppercase ->", message.toUpperCase());

// trims off the whitespace/extraspaces
console.log("trim ->", message.trim());

// split the strings into different sub string arrays
console.log("split with whitespace ->", message.split(" "));
