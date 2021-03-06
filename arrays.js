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

//

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

//

// reference types ~
const yesORno = course.find(function (courseName) {
  return courseName.name === "node.js";
});
const index = course.findIndex(function (courseName) {
  return courseName.name === "node.js";
});
console.log(yesORno);
console.log(index);

//

// arrow function
const arrow = course.find((courseName) => {
  return courseName.name === "node.js";
});
console.log(arrow);

//

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

//

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

//

// concatinating with spread
const combinedUsingSpread = [...second, ...first];
const sliceUsingSpread = [...combined];
console.log(combinedUsingSpread);
console.log(sliceUsingSpread);

//

// iterating an array
const randomArray = [56, 58, 45, 39, 99];

// for of
console.log("using for-of");
for (const i of randomArray) {
  console.log(i);
}

// for in
console.log("using for-in");
for (const i in randomArray) {
  console.log(i, "-> ", randomArray[i]);
}

// for each
console.log("using for-each");
randomArray.forEach((element) => {
  console.log(element);
});

/*randomArray.forEach(function (element) {
  console.log(element);
});*/

//

// joining an array
const normal = [23, 24, 25];
const joined = normal.join(",");
console.log(joined);

//

// splitting (string)
const originalString = "hi i am mudit";
const parts = originalString.split(" ");
const rejoinedString = parts.join("-");
console.log(parts);
console.log(rejoinedString);

//

// sorting an array
const unsorted = [34, -67, 31, 12, 38];
unsorted.sort();
console.log(unsorted);
unsorted.reverse();
console.log(unsorted);

const student = [
  { roll: 1, name: "tarun" },
  { roll: 2, name: "shivam" },
];

// updated for objects.
student.sort((a, b) => {
  // comparison of ascii values
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

//

// every
const ifAllPositive = unsorted.every(function (element) {
  return element >= 0;
});
// the above piece of code will check if all the elements of 'unsorted' are positive or NOT.
// it will return true if YES, and false if NO.
// all the later elements will be ignored if one negative element is found.
console.log(ifAllPositive);

//

// some
const ifAtleastOnePositive = unsorted.some((element) => {
  return element >= 0;
});
// the above piece of code will check if altleast one element of 'unsorted' is positive or NOT.
// it will return true if YES, and false if NO.
// all the later elements will be ignored if one positive element is found.
console.log(ifAtleastOnePositive);

//

// filtering an array
const filtered = unsorted.filter((value) => value <= 0);
console.log(filtered);

// mapping members of an array into something else,
const items = filtered.map((element) => {
  return "<li>" + element + "</li>";
});
const htmlCODE = "<ul>" + items.join("") + "</ul>";
console.log(htmlCODE);

// mapping them in an object
const items2 = filtered.map((element) => {
  const obj = { value: element };
  return obj;
});
// const items2 = filtered.map(element => ({ value: element }));
// extra parenthesis is required
console.log(items2);

//

// reducing an array
const scoreOUTof100 = [67, 98, 76, 89, 97];

// initially by-default accumulated = index[0] and current value = index[1]
// we are returning their sum to the 'accumulated', so now accumlated = index[0] + index [1].
// by the end of the array, we get the sum of all of its elements.

// by 'reduce' we can reduce an array to a number, an object, etc
const sum = scoreOUTof100.reduce(
  (accumulated, currentValue) => accumulated + currentValue
);
console.log(sum);
