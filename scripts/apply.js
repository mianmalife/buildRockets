// 返回有指定this值和参数的函数结果
const max = Math.max.apply(null, [1, 2, 3, 4, 5]);
console.log(max);

const m1 = [1, 3, 4, 5];
const m2 = [6, 7, 8, 9, 20];

m1.push.apply(m1, m2);
console.log(m1); // [1, 3, 4, 5, 6, 7, 8, 9, 20]

function minOfArray(arr) {
  let min = Infinity;
}

function minOfArray(arr) {
  let min = Infinity;
  let MAXRANG = 20;

  for (let i = 0, len = arr.length; i < len; i += MAXRANG) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + MAXRANG, len))
    );
    min = Math.min(submin, min);
  }
  return min;
}

let min = minOfArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 32, -2, 4, 34, -8, 34, -45, 34, 343, 4, 32, 2,
  33, 43, 4, 23, 2, 323, 23,
]);
console.log(min);
