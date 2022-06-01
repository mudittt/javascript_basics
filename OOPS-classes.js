class Circle {
  constructor(radius) {
    // 'radius' and 'move' are native to 'Circle'
    this.radius = radius;
    this.move = function () {
      console.log("</> Moved </>");
    };
  }

  // 'draw' will be added in the prototype of 'Circle'
  draw() {
    console.log("</> Drawn </>");
  }
}

const c = new Circle(5);

// There are two ways of writing a class
// Classes (unlike functions) are not hoisted
// That means they doesn't go the top of the machine code at runtime
// We must call them after they're declared.

// class declaration
class Box {}

// class expression
const greet = class goodmorning {};

class Math2 {
  // static elements are not usable for the objects of a class
  // but they are usable for a class itself.
  // like the 'Math' class.
  static abs(num) {
    return num > 0 ? num : -num;
  }
}

const m = new Math2();

// private members using Symbol()
// Symbol() is creating a unique number every time it's used.
// so every Symbol() is unique.

// It's a convention to use ' _ ' before a private member's name.
const _length = Symbol();
const _breadth = Symbol();
const _areaRect = Symbol();

class Rectangle {
  constructor(length, breadth) {
    this[_length] = length;
    this[_breadth] = breadth;
  }
  [_areaRect]() {
    console.log("_breadth * _length");
  }
}

const r = new Rectangle(10, 5);

// can still get the elements using this complicated method.
const key = Object.getOwnPropertySymbols(r)[0];
console.log(r[key]);
