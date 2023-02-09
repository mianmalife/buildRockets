function flatFn(arr) {
  return flats(arr, [])
}

function flats(arr, res) {
  if (!Array.isArray(arr)) throw new Error('请输入一个数组!')
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]
    Array.isArray(curr) ? flats(curr, res) : res.push(curr)
  }
  return res
}

const res1 = flatFn([1, [2, 3], 3, 4, [[5, 6]], [7, 8], 9])
console.log(res1)
const res2 = flatFn(1)
console.log(res2)
