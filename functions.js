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

//

// 'this' keyword
// when used inside a method, it will indicate the object it is in.
// But when used inside a normaL FUNCTION , it will refer to the WINDOW object.

const video = {
  title: "Oye lucky, lucky Oye!",
  tags: ["abhay deol", "paresh rawal", "archana puran singh"],
  showTags() {
    // the first 'this' will point this 'video' object.
    this.tags.forEach(function (i) {
      // the 'this' below is inside a callback function,
      // so it will point at the window object.
      console.log(this.title, "->", i);
      // BUT IF WE USE THE ARROW FUNCTION (=>), IT WILL POINT AT 'video' only.
      // in order to make 'this' (inside call back function) point at 'video',
      // we have to pass another arguemnt in 'foreach'
    }, this);
    // here the second argument 'this' indicates 'video' only
    // because it is outside the callback function & inside video object.
  },
};

video.showTags();

function test(num1, num2) {
  console.log(this);
  // 'this' is pointing at the window object.
}

test();
// function is an object, it has its own inbuilt methods.

// call
// first argument is the object that 'this' will point at.
test.call({ funcName: "call" }, 1, 4);

// apply
// first argument is the object that 'this' will point at.
// second arguement is an array with function paramters in it.
test.apply({ funcName: "apply" }, [1, 4]);

// bind
// it is a type of function, we must call it.
// it will permanently bind 'this' to whatever object we pass in bind().
test.bind({ funcName: "bind-permanently" })(1, 2);
