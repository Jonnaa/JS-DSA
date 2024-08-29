// Good analogy for classes is they are like a cookie cutter
// Important to know classes since all data structures use classes

// Always capitalize the first letter of the class name
class Cookie {
  // Classes always have something that is called a constructor
  // A constructor will create the new "cookies" from the class
  // color is a parameter
  constructor(color) {
    // js uses this and python uses self
    this.color = color;
  }

  // Now we'll create get color and set color
  // Getters and setters are the 2 broad categories
  // of methods(function inside an object) that you create in classes
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

// Now that a class is created, we can instantiate(create a new instance) a cookie
// instantiating in js requires the "new" keyword
// 1 argument is required and that argument is color
let cookieOne = new Cookie("green");

console.log(cookieOne.getColor());
cookieOne.setColor("yellow");
console.log(cookieOne.getColor());
