const fs = require("fs");
const path = require("path");
const n = Date.now();
fs.readFile(path.resolve(__dirname, "./call.js"), (err, data) => {
  if (err) return;
  console.log(Date.now() - n, "fs");
  console.log(err, data);
});

setTimeout(() => {
  console.log(Date.now() - n, "timeout");
}, 0);
// console.log("lesson one");
// const p1 = () => {
//   return new Promise((resolve) => {
//     resolve("hello");
//   });
// };
// const p2 = () => {
//   return new Promise((resolve) => {
//     resolve("world");
//   });
// };

// setTimeout(() => {
//   console.log("timeout");
// });

// const p3 = () => {
//   return new Promise((resolve, reject) => {
//     reject("error");
//   });
// };
// console.log("lesson two");

// p1().then((res) => {
//   console.log(res);
// });

// p2().then((res) => {
//   console.log(res);
// });

// p3().catch((err) => {
//   console.log(err);
// });
// queueMicrotask(() => {
//   console.log("这是一个微任务");
// });

// document.querySelector("h2").addEventListener("load", () => {
//   console.log("load");
// });

// console.log("less1");
// document.querySelector("h2").dispatchEvent(new Event("load"));
// console.log("less2");

// const work = () => {
//   queueMicrotask(() => {
//     console.log("microask");
//   });
//   console.log("work");
//   return "work";
// };
// console.log("11");
// setTimeout(() => {
//   console.log("timeout");
// });
// console.log(`hi ${work()}`);

// 11
// work
// hi work
// microask
// timeout

// 微任务不在其所处函数退出时，而是在主程序退出时被执行

// console.log(1);
// new Promise(() => {
//   console.log(2);
// });
// new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   console.log(4);
// });
// console.log(3);

// 1 2 3 4
