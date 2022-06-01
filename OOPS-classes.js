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
