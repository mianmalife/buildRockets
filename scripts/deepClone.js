// Object.assign  // 只能复制一层
// slice, concat // 只能复制一层
// JSON.parse JSON.stringify 不能复制undefined, Symbol
// 递归
// lodash deepClone

const example1 = [1, 2, 3, 4]
const res = Object.assign([], example1)
res[1] = 0
console.log(example1, res)
const example2 = [{ a: 1 }, { a: 2 }]
const res2 = Object.assign([], example2)
res2[0].a = 3
console.log(example2, res2)
const example3 = { a: { c: 1 }, b: 2, d: undefined, e: Symbol() }
const res3 = Object.assign({}, example3)
res3.a.c = 'edit'
console.log(res3, example3)
console.log(Object.assign({}, { a: undefined }))
const slice = example1.slice(0)
slice[0] = 9
console.log(example1, slice)
const copy = JSON.parse(JSON.stringify(example3))
copy.a.c = 'JSON'
console.log(copy, example3)

function deepClone(obj) {
  let newObj = {}
  for (let key of Object.keys(obj)) {
    if (obj[key] && typeof obj[key] === 'object') {
      newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const example4 = { a: { c: 1 }, b: 2, d: undefined, e: Symbol() }
const copyExample4 = deepClone(example4)
copyExample4.a.c = 'c edit'
console.log(copyExample4, example4)
