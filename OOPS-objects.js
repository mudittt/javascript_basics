// declaration
// factory functions
// construction functions
// 'this'
// let vs var
// value vs reference type
// dot notation and bracket location
// dynamic nature of javascript
// deleting and adding elements of an object
// for-in
// 'in' operator

// abstraction
// private properties and methods
function Circle(r) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = r;
  // here we made a local object 'defaultLocation' inside the 'circle' function.
  // this local object can't be accesed outside this function.
  // kinda act as private object of a class in c++
  // we can use this object in another object of this function.
}

// getters and setters
// we can set a predefined object as setter or getter using 'defineProperty' method.
function CircleNew(r) {
  let defaultLocation = { x: 0, y: 0 };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (arr) {
      if (
        typeof arr[0] !== Number ||
        typeof arr[1] !== Number ||
        arr.length > 2
      )
        throw new Error("Invalid Coordinates...");
      defaultLocation.x = arr[0];
      defaultLocation.y = arr[1];
    },
  });
}

// stopwatch();
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error("StopWatch is already Running...");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Start the watch first stoopid...");
    running = false;
    endTime = new Date();

    const seconds = endTime.getSeconds() - startTime.getSeconds();
    duration += seconds;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
  this.reset = function () {
    endTime = null;
    startTime = null;
    duration = 0;
    running = false;
  };
}
