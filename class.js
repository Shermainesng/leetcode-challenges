//REFERENCE TYPE
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//CONTEXT VS SCOPE
//scope is created when there is {}
function b() {
  let a = 4;
}
//if i console.log(a), nothing will happen
//this refers to what object i am inside of
function a() {
  console.log(this);
}
//prints a window object
const object4 = {
  a: function () {
    console.log(this);
  }
};
//object4.a() prints {a: f}

//INSTANTIATION- when i make copies/instances of an object and resuse the code
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi i am ${this.name}, and i am ${this.type}`);
  }
}
//everytime i create a player, it runs the constructor method which creates these properties on the player object
class Wizard extends Player {
  //(extend whatever player has) class wizard adds on to whatever player has
  constructor(name, type) {
    super(name, type); //access to the player class constructor and functions, and extend its properties to this class
  }
  play() {
    console.log("i m ${this.type}");
  }
}
const wizard1 = Wizard("shelly", "healer"); //Wizard{} - an instasnce of the wizard class, which has access to both player and wizard's classes
