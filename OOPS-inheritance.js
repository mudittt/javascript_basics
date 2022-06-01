// Circle
function Circle(rad, color) {
  // Shape(color);
  // by writing the above line, the Shape() function will be called and the 'this' object will point at 'window' object.
  Shape.call(this, color);
  // by using the call method, we passed 'this' to be used as the current object.
  // therefore 'this' will point at 'new' instead of  'window'.

  this.radius = rad;
}

// we had to make a function 'draw' in the prototype of Circle() because we didn't want to suck up space
// for every new object of Circle() i.e c1, c2, c3, ...

/*
        Circle.prototype.draw = function () {
        console.log("draw.");
        };
*/

// Square
function Square(a, color) {
  Shape.call(this, color);
  this.side = a;
}

// we had to make a function 'draw' in the prototype of Square() because we didn't want to suck up space
// for every new object of Square() i.e s1, s2, s3, ...

// but now 'object' (which is the prototype of both -Square()- and -Circle()- ) have two 'draw()' function.
// to avoid this, and for future shapes, we shall make a seperate prototype for all the shapes ~

/*
        Square.prototype.draw = function () {
        console.log("draw.");
        };
*/

// by doing what we did in the following lines of code, we added two functions in Shape()'s prototype
function Shape(col) {
  this.color = col;
}

// shape()'s prototype is 'Object'
Shape.prototype.draw = function () {
  console.log("draw.");
};
// now we can use these two functions in any object of any Circle()'s object or Square()'s object.
Shape.prototype.duplicate = function () {
  console.log("duplicate.");
};
// or any other figure, which inherit the 'Shape' object.

// Here we made a square()'s and Circle()'s prototype = Shape().
// while doing so we are losing the 'prototype.constructor' property of Circle and Square.

/*
    Square.prototype = Object.create(Shape.prototype);
    Circle.prototype = Object.create(Shape.prototype);
*/

// As a good practice, we are reassigning the 'prototype.constructor' property.
//  ~ new Circle.prototype.constructor(9) == new Circle(9) ~
//  ~ new Square.prototype.constructor(9) == new Square(9) ~

/*
    Circle.prototype.constructor = Circle;
    Square.prototype.constructor = Square;
*/

// we created a lot of noise in our code by writing indivisual code for inheritance of Circle and Square,
// if there we 50 different polygons in our code, it would've been a waste of codelines , memory, time, etc etc
// so we should make a function for that ~

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle, Shape);
extend(Square, Shape);

const c = new Circle(1, "red");
const s = new Square(1, "yellow");
