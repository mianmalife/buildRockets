// 实现call 1
// 1. 将函数设置为对象的属性
// 2. 执行该函数
// 3. 删除该函数
// "use strict";
Function.prototype.myCall = function (ctx) {
  let context = ctx || window;
  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }
  context.fn = this;
  // eval("ctx.fn(" + args + ")");
  const res = context.fn(...args);
  delete context.fn;
  return res;
};

Function.prototype.myApply = function (ctx, arr) {
  let context = Object(ctx) || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    let args = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push(arr[i]);
    }
    result = context.fn(...args);
  }
  delete context.fn;
  return result;
};

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new Error("错了, 函数才有bind");
  }
  let selfs = this;
  const slist = Array.prototype.slice.call(arguments, 1);
  let FP = function () {};
  let fb = function () {
    console.log(this, FP);
    const last = Array.prototype.slice.call(arguments);
    return selfs.apply(this instanceof FP ? this : context, slist.concat(last));
  };
  FP.prototype = this.prototype;
  fb.prototype = new FP();
  return fb;
};

let obj = {
  a: 1,
};

function Test1(name, age) {
  return {
    name,
    age,
    a: this.a,
  };
}

// const tt = Test1.bind(obj, "bb");
// console.log(tt("200"));
// const nt = new tt("200");
// console.log(nt);
// const result1 = Test1.myCall(obj, "mm", 20);
// console.log(result1);
// const result2 = Test1.myApply(obj, ["haha", 18]);
// console.log(result2);
const result3 = Test1.myBind(obj, "kaka");
const r = new result3("newparams");
console.log(r);
// result3("newparams");
// console.log(result3("newparams"));

// 实现new
function newIns() {
  const Constructor = [].shift.call(arguments);
  let obj = Object.create(Constructor.prototype);
  // obj.__proto__ = Constructor.prototype;
  let result = Constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  // return {
  //   age,
  //   name,
  //   habit: "play",
  // };
  return function () {
    return {
      name,
    };
  };
}
Person.prototype.say = "say";
Person.prototype.onHi = function () {
  console.log(this, "this");
  console.log("hi," + this.name);
};

const man = newIns(Person, "ZH", 18);
console.log(man.name);
console.log(man.age);
console.log(man.say);
console.log(man.height);
console.log(man.habit);
console.log(man());
// man.onHi();
