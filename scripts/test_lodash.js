const _ = require('lodash')
// const array = { a: 1 }
// const array1 = { a: 1 }
// const array2 = { b: 1 }
// const copy = _.cloneDeep(array)
// console.log(copy, _.eq(array, array1))
// console.log(_.eq(array, array)) // true
// console.log(_.isEqual(array, array1))
// console.log(_.eq(NaN, NaN)) // true
// console.log(_.eq(+0, -0)) // true
// console.log(Object.is(NaN, NaN)) // true
// console.log(Object.is(+0, -0)) // false

// let o = { a: 1 }
// a1 = o
// console.log(_.eq(a1, o)) // true
// console.log(_.isEqual(array, array2)) // false

// // eq 检查对象引用是否相同
// // isEqual 进行值比较

// // 获取数组中匹配的索引
// function getIndex(array, key) {
//   let { length } = array
//   while (length--) {
//     if (_.eq(array[length][0], key)) {
//       return length
//     }
//   }
//   return -1
// }

// const newArray = [
//   [1, 2],
//   [3, 4],
//   [4, 6],
// ]
// const index3 = getIndex(newArray, 1)
// const index4 = getIndex(newArray, 4)
// const index5 = getIndex(newArray, 5)
// console.log(index3) // 1
// console.log(index4) // 2
// console.log(index5) // -1

// // 缓存key-value 的集合 [key, value] // [ [ 1, 2 ], [ 3, 4 ] ]
// class ListCache {
//   constructor(entries) {
//     let index = -1
//     const length = entries == null ? 0 : entries.length
//     this.clear()
//     while (++index < length) {
//       const entry = entries[index]
//       this.set(entry[0], entry[1])
//     }
//   }
//   delete(key) {
//     const data = this.__data__
//     const index = getIndex(data, key)
//     if (index < 0) {
//       return false
//     }
//     const lastIndex = data.length - 1
//     if (lastIndex === index) {
//       data.pop()
//     } else {
//       data.splice(index, 1)
//     }
//     --this.size
//     return true
//   }
//   get(key) {
//     const data = this.__data__
//     const index = getIndex(data, key)
//     return index < 0 ? undefined : data[index][1]
//   }
//   has(key) {
//     return getIndex(this.__data__, key) > -1
//   }
//   clear() {
//     this.__data__ = []
//     this.size = 0
//   }
//   set(key, value) {
//     const data = this.__data__
//     const index = getIndex(data, key)

//     if (index < 0) {
//       ++this.size
//       data.push([key, value])
//     } else {
//       data[index][1] = value
//     }
//     return this
//   }
// }

// const listCache = new ListCache([
//   [1, 2],
//   [3, 4],
// ])

// console.log(listCache.__data__, listCache.size) // [ [ 1, 2 ], [ 3, 4 ] ] 2

const copylist = _.cloneDeep([1, 2, 3, 4, 5, 6])
console.log(copylist)
