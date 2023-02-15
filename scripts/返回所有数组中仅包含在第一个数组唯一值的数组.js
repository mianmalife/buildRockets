function diff(arr /*arrays*/) {
  let idx = 0
  const alen = arguments.length
  while (++idx < alen) {
    arr = compare(arr, arguments[idx])
  }
  return arr

  function compare(one, two) {
    if (!Array.isArray(two)) {
      return one.slice()
    }
    const oLen = one.length
    const tLen = two.length
    let idx = -1
    let arr = []
    while (++idx < oLen) {
      const oValue = one[idx]
      let haved = false
      for (let i = 0; i < tLen; i++) {
        const tValue = two[i]
        if (oValue === tValue) {
          haved = true
          break
        }
      }
      if (haved === false) {
        arr.push(oValue)
      }
    }
    return arr
  }
}

const resp = diff(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'])
console.log(resp)
