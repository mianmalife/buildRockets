"use strict";
const now = new Date().getSeconds();

setTimeout(
  (a, b) => {
    console.log(a, b);
    const s = new Date().getSeconds() - now;
    console.log(s, "时间到！");
  },
  0,
  1,
  2
);

while (true) {
  if (new Date().getSeconds() - now >= 2) {
    console.log(">=2s");
    break;
  }
}

// 栈
// 函数调用形成了一个若干帧的组成
// 堆
// 对象被分配在堆中, 堆是一个用来表示一大块内存区域的计算机术语
