// function declaration
// I can call this function even before defining it.
function walk() {
  console.log("walk");
}

// function expression
// I can not call this function before defining it.
let run = function () {
  console.log("run");
};

// named function expression
// not able to access with the name 'exercise()'
let jog = function exercise() {
  console.log("jog");
};

// hoisting
// it is a process in javascript,
// in which all the function declaration goes to the top of the machine code at run time

//

// arguments
function sum() {
  let total = 0;
  for (const i of arguments) {
    total += i;
  }
  return total;
}
// 'arguments' keyword will show all the passed arguments as a array.
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//

// rest
// spread func BUT in parameter.
// must be the last formal parameter.
function product(...args) {
  return args.reduce((a, b) => a * b);
}
console.log(product(1, 2, 3, 4, 5));

//

// default paramter
// all parameters to the right must be default.
function interest(principal, rate = 10, years = 2) {
  return principal * (rate / 100) * years;
}
console.log(interest(100));

//

// getters and setters
const person = {
  firstName: "mudit",
  lastName: "tyagi",

  // now we can call fullname as a property(not as a function)
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  // with 'set' the value after the assignment operator will be treated as argument of the setter.
  set fullName(value) {
    if (typeof value !== "string")
      throw new Error("Entered Value is Not a String.");

    const parts = value.split(" ");
    if (parts.length !== 2)
      throw new Error("Enter a Valid First and Last Name.");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "bhadua kumar";
console.log(person);

//

// try and catch
try {
  person.fullName = null;
} catch (error) {
  alert(error);
}
