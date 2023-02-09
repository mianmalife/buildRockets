function dedup(arr, f) {
  void 0 === f && (f = JSON.stringify)
  let newList = []
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let or = arr[i]
    let curr = f(or)
    if (!obj[curr]) {
      newList.push(or)
      obj[curr] = true
    }
  }
  return newList
}

const res = dedup([1, 2, 2, 2, 1, 2, 4, 5, 4, 3])
const res1 = dedup(
  [
    { a: 2, b: 1 },
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 1, b: 4 },
  ],
  (value) => value.a
)
console.log(res)
console.log(res1)
