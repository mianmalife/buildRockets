let obj = {
  a: 1,
  add: function () {
    return this.a + 1;
  },
};

const num = obj.add();
console.log(num); // 2

// 创建原型为obj的对象
const o = Object.create(obj);
o.a = 3;
console.log(o.add()); // 4
console.log(
  o.__proto__,
  Object.getPrototypeOf(o),
  o.constructor.prototype.__proto__
);
// { a: 1, add: f}
// { a: 1, add: f}
// null

function Test1() {}
Test1.prototype.foo = "haha k";

const t = new Test1();
t.a1 = "haha t";
console.log(t.constructor.prototype); // {foo: 'haha k', constructor: ƒ}
console.log(t.__proto__); // {foo: 'haha k', constructor: ƒ}

let hoo = {
  h: 1,
};

console.log(hoo.prototype, Object.prototype);

// 对象的原型链
// o -> Object.prototype -> null
// 数组的原型链
// [] -> Array.prototype -> Object.prototype -> null
// 函数的原型链
// func -> Function.prototype -> Object.prototype -> null

const foo = Object.create(null);
console.log(foo.hasOwnProperty); // undefined
// 原型链
// foo -> null
let lf = { j: 1, undefined: 1 };
const bar = Object.create(lf);
console.log(bar.__proto__.__proto__.__proto__); // null
// 原型链
// bar -> lf -> Object.prototype -> null

console.log(lf.hasOwnProperty("j"));
