// arrays are also objects, so they have their built in functions and methods
/*
numbers.concat
numbers.copyWithin
numbers.entries
numbers.fill
numbers.filter
numbers.find
numbers.findIndex
*/
const numbers = [3, 4];
// end
numbers.push(5, 6);
numbers.push(3);

// beginning
numbers.unshift(1, 2);

// index ; number of items you wanna delete ; items you wanna add...
numbers.splice(2, 0, "a", "b");

// return the index, if not found returns -1.
console.log(numbers.indexOf("m"));

// return the index of the latest occurence of that element.
console.log(numbers.lastIndexOf(3));

// value types ~
console.log("true if present, false if not present -> ", numbers.includes(0));
console.log(numbers);

const course = [
  {
    id: 1,
    name: "node.js",
  },
  {
    id: 2,
    name: "react.js",
  },
];

// reference types ~
const yesORno = course.find(function (courseName) {
  return courseName.name === "node.js";
});
const index = course.findIndex(function (courseName) {
  return courseName.name === "node.js";
});
console.log(yesORno);
console.log(index);

// arrow function
const arrow = course.find((courseName) => {
  return courseName.name === "node.js";
});
console.log(arrow);

// removing element
const marks = [99, 98, 96, 97, 95, 93];
console.log(" array -> ", marks);

// end
const lastElement = marks.pop();
console.log(" removed element (end) -> ", lastElement);
console.log(" array -> ", marks);

// end
const firstElement = marks.shift();
console.log(" removed element (first) -> ", firstElement);
console.log(" array -> ", marks);

// middle
const middleElement = marks.splice(2, 1);
console.log(" removed element (at index) -> ", middleElement);
console.log(" array -> ", marks);

// combining an array
const first = [92, 93, 94];
const second = [95, 96, 97];

// combined 'first' with 'second' and stored it in 'combined'
const combined = first.concat(second);

// slicing an array
// includes index '1' and goes till the index '4-1'
// we can exclude second argument to store the remaining elements
// we can skip all the arguments to just copy the whole damn thing
const slice = combined.slice(1, 4);

console.log(combined);
console.log(slice);
