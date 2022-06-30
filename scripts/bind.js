// bind() 返回一个新函数 新函数的this是bind的第一个参数
const modu = {
  a: 1,
  add: function (a1, b1) {
    console.log(this); // {a:1,add:f} Window {a:1,add:f}
    return this.a + 1 + a1 + b1;
  },
};

const result = modu.add();
console.log(result); // 2

const m = modu.add;

const m1 = m();

console.log(m1); // NaN

const m2 = m.bind(modu, 1, 2);
console.log(m2);
console.log(m2()); // 2

const m3 = modu.add;
console.log(m3.bind()());

function list() {
  console.log(this); // Windows
  return Array.prototype.slice.call(arguments);
}

const blist = list.bind(null, 1, 3, 5, 7, 8);
console.log(blist("last")); // [1, 3, 5, 7, 8, 'last']

function Hello() {
  this.as = 1;
}

Hello.prototype.add = function () {
  setTimeout(this.ko.bind(this), 1000);
};

Hello.prototype.ko = function () {
  console.log(this.as + 1, "ko");
};

const hello = new Hello();
hello.add();

function Add(x, y) {
  this.x = x;
  this.y = y;
}

Add.prototype.ok = function () {
  return this.x + "," + this.y;
};

let ojj = {};
let Boo = Add.bind(ojj, "007");
const boo = new Boo(66);
console.log(boo.ok()); // 007,66

Boo(55);
console.log(ojj);

// 类数组转数组

function likeToReal() {
  const bslice = Array.prototype.slice;
  const f = Function.prototype.apply.bind(bslice, arguments);
  return f();
}
const res = likeToReal(1, 2, 3);

console.log(res);
