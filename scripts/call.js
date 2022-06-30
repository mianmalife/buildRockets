// 指定一个this 和单独几个参数来调用一个函数
const likeToArray = (like) => Array.prototype.slice.call(like);
console.log(likeToArray({ length: 2, 0: 1, 1: 2 }));

let obj = {
  a: 1,
  fn: function () {
    return this.a + 1;
  },
};

const add = obj.fn();
console.log(add); // 2

const cdd = obj.fn.call(this);
console.log(cdd); // NaN

console.log(Array(100).fill(1));
const a100 = Array.apply(null, Array(100)).map((x) => 1);
console.log(a100);
