function Person() {}

const p1 = new Person();
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(p1.__proto__ === Person.prototype); // true
console.log(Person === Person.prototype.constructor); // true
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true

const object = new Object();
console.log(object.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
console.log(p1.constructor === Person); // true
console.log(Person.prototype);
console.log(Object.prototype.constructor === Object); // true
