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
console.log(factorial(5))
console.log(newFactorial(5))

function Outer() {
  inner()
}
function inner() {
  alert(inner.arguments.callee.caller)
}

Outer()
console.log(newFactorial.toLocaleString(), factorial.toString())
