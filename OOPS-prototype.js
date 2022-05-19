// a prototype is just a regular object in javascript.
// it is similar to a parent class.
// when user calls a prototype's method/function, the js engine climbs up the prototypical ladder to find the same.

// an array is a child of prototype-array(0)
// array(0) is a child of prototype-Object

// objects created by the same constructor will have the same prototype.

// property descriptors
let person = { name: "mudit" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  // this will make this property readable only.
  writable: false,
  // made it enumerable.
  enumerable: true,
  // cannot be deleted.
  configurable: false,
});

person.name = "mannu";
// here we are changing name to mannu but it will not change -> (writable ~ false)
delete person.name;
// here we are deleting name but it will not get deleted -> (configurable ~ false)
console.log(person);

// we can avoid repetition by adding the repeated property to the parent class (i.e prototype)

function Circle(rad) {
  this.radius = rad;
}
// added the repeating property to the prototype ~
Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.toString = function () {
  return "circle with radius " + this.radius;
};

const c1 = new Circle(5);
console.log("toString() ~ ", c1.toString());
const c2 = new Circle(2);

// these properties will not show using 'keys' keyword.
// only radius will show.
console.log("Object.keys() ~ ", Object.keys(c1));

// but these properties will show using 'for in' .
// radius and draw() both will show.
for (const key in c1) {
  console.log("for-in ~ ", key);
}

// hasOwnProperty()
console.log(
  `does 'c1' has 'draw' property on it's own ? `,
  c1.hasOwnProperty("draw")
);

console.log(
  `does 'c1' has 'radius' property on it's own ? `,
  c1.hasOwnProperty("radius")
);
