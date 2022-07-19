// 栈 先进后出 后进先出 一种受限的线性结构(做了限制, 不能任意添加删除元素)
// 只能一端增加或者删除元素
// 分为 进栈 出栈  栈底 栈顶
// 基于数组实现栈
function Stack() {
  this.stackItems = []
}

// 进栈
Stack.prototype.push = function (element) {
  this.stackItems.push(element)
}

// 出栈
Stack.prototype.pop = function () {
  return this.stackItems.pop()
}

// 查看栈顶元素
Stack.prototype.look = function () {
  return this.stackItems[this.stackItems.length - 1]
}

// 查看元素个数
Stack.prototype.size = function () {
  return this.stackItems.length
}

// 栈是否为空
Stack.prototype.isEmpty = function () {
  return !this.stackItems.length
}

// 获取元素
Stack.prototype.toString = function () {
  let stackString = ''
  for (let i = 0; i < this.stackItems.length; i++) {
    stackString += this.stackItems[i] + ' '
  }
  return stackString
}

function decimalToBinary(decimalNumber) {
  const stack = new Stack()
  // 不确定循环次数 使用while
  while (decimalNumber > 0) {
    // 余数入栈
    stack.push(decimalNumber % 2)
    // 除以2向下取整
    decimalNumber = Math.floor(decimalNumber / 2)
  }

  let result = ''
  // 栈不为空继续循环获取余数
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}

const re = decimalToBinary(100)
console.log(re) // 1100100
