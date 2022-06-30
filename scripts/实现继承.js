function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Child(name, age, like) {
  Person.call(this, name, age);
  this.like = like;
}

const p = new Child("周杰伦", 12, "play games");
console.log(p.name);

function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.baseProps = function () {
  console.log("base fn");
};

function Dog(name, age, tn) {
  Animal.call(this, name, age);
  // const fn = Animal.bind(this, name, age);
  // fn();
  this.tn = tn;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
const d = new Dog("dog", 10, 4);
console.log(d);
d.baseProps();

function Parent(name, age) {
  this.name = name;
  this.age = name;
}

Parent.prototype.getUserInfo = function () {
  console.log("hello user");
};

function Child(like, name, age) {
  Parent.call(this, name, age);
  this.like = like;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const ming = new Child("xiaoming", 18, "play games");
console.log(ming);
ming.getUserInfo();

function object(o) {
  function G() {}
  G.prototype = o;
  return new G();
}

let tell = {
  name: "ko",
  list: [1, 2, 3, 4, 5],
};
let a1 = object(tell);
a1.name = "kp";
a1.list.push(6);
console.log(a1.list);
console.log(a1);
console.log(tell);

class Color {
  constructor(type) {
    this.type = type;
  }
  consFunc() {
    console.log("hello");
  }
}

class Yellow extends Color {
  constructor(type, name) {
    super(type);
    this.name = name;
  }
}
const y = new Yellow("color", "yellow");
y.consFunc();

console.log(typeof Color); // function
console.log(Yellow.__proto__); // Class
