function compare(propertyName) {
  return function (obj1, obj2) {
    return obj1[propertyName] - obj2[propertyName]
  }
}

const list = [
  { name: 'jack', age: 20 },
  { name: 'mianma', age: 32 },
  { name: 'liu', age: 18 },
  { name: 'k', age: 2 },
]

console.log(list.sort(compare('age')))

function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}

let newFactorial = factorial
factorial = function () {
  return 9
}
console.log(factorial(5), 'factorial')
console.log(newFactorial(5))

// function Outer() {
//   inner()
// }
// function inner() {
//   alert(inner.arguments.callee.caller)
// }

// Outer()
// console.log(newFactorial.toLocaleString(), factorial.toString())

var factor = function f(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * f(num - 1)
  }
}

const factor1 = factor
var factor = () => 1
console.log(factor1(5)) // 120

// 闭包 -> 可以访问其它函数作用域的函数

var result = []
function arrListFn() {
  for (var i = 0; i < 10; i++) {
    result[i] = (function () {
      return i
    })()
  }
  return result
}
arrListFn()
console.log(result)

for (var i = 0; i < 10; i++) {
  console.log(i)
}

// if (true) {
//   var color = 'red'
// }
function outputNumbers() {
  ;(function () {
    for (var j = 1; j < 4; j++) {
      // alert(j)
      console.log(i)
    }
  })()
  // alert(j)
}
outputNumbers()
;(function () {
  var now = new Date()
  if (now.getMonth() == 7 && now.getDate() == 18) {
    alert('中秋节快乐💖💖💖💖💖💖')
  }
})()
