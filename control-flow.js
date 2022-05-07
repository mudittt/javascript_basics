// if-else
let hour = 22;
if (hour >= 6 && hour < 12) {
  console.log("goodmorning!");
} else if (hour >= 12 && hour < 18) {
  console.log("goodafternoon!");
} else {
  console.log("goodevening!");
}

// switch-case
let role;
switch (role) {
  case "guest":
    console.log("guest user!");
    break;
  case "moderator":
    console.log("moderator user!");
    break;

  default:
    console.log("unknown user!");
    break;
}

// for-loop
for (let i = 0; i < 5; i++) {
  console.log("for loop - ", i);
}

// for-each
// while loop
// do-while loop

// for-in
const person = {
  name: "mudit",
  age: 19,
};
for (const key in person) {
  console.log(key, person[key]); // bracket notation because value of key i s defined at run time.
}

// for-of
const colors = ["red", "pink", "blue"];
for (const iterator of colors) {
  console.log(iterator); // iterator is type of a pointer
}

// break and continue
let i = 1;
while (i <= 5) {
  if (i === 3) {
    i++;
    continue;
    // break; -> out of the while loop.
    // continue; -> start of the while loop.
  }
  console.log(i);
  i++;
}

// FizzBuzz
function FizzBuzz(input) {
  if (typeof input != "number") {
    // return "not a number!";
    return NaN; //typeof NaN -> "number"
  }
  if (input % 15 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
    return input;
  }
}
let output = FizzBuzz("bg");
console.log(output);
