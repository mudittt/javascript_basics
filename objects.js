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
