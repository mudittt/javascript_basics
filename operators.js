let x = 3;
let y = 3;
console.log("x -> ", x);
console.log("y -> ", y);

// arithematic
console.log("x + y -> ", x + y);
console.log("x - y -> ", x - y);
console.log("x * y -> ", x * y);
console.log("x / y -> ", x / y);
console.log("x % y -> ", x % y);
console.log("x ** y -> ", x ** y); // x to the power y

// iterative
console.log(++x);
console.log(x++);
console.log(y--);
console.log(--y);
console.log("x -> ", x);
console.log("y -> ", y);

// relative
console.log("is x > 0?", x > 0);
console.log("is x >= 1?", x >= 1);
console.log("is x <= 1?", x <= 1);
console.log("is x < 0?", x < 0);

// comparison
// console.log(1 === 1); // strict equality operator (type + value)
// console.log("1" === 1); // strict equality operator (type + value)
// console.log(1 == 1); // lose equality operator , it will convert the type of rightside element to that of left
// console.log("1" == 1); // lose equality operator , it will convert the type of rightside element to that of the left side.
// console.log(true == 1); // lose equality operator , it will convert the type of rightside element to that of the left side.

// ternary
let point = 110;
console.log("points -> ", point);
let type = point > 100 ? "gold" : "copper";
console.log(
  "are points > 100? if yes, print 'gold' otherwise print 'copper' -->  ",
  type
);

//logical
// console.log(true && true);
// console.log(false || false);
// console.log(false || !false);

// falsy ->
// undefined,
// null
// 0
// false
// '' (empty string)
// NaN (not a number)

// truthy -> anything that is not falsy
