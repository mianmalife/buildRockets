function sectionSort(list) {
  function swap(a, b) {
    let temp = list[b]
    list[b] = list[a]
    list[a] = temp
  }
  for (let i = 0; i < list.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(i, minIndex)
    }
  }
  return list
}

const res = sectionSort([3, 22, 1, 33, 2, 32, 3])
console.log(res)

// [1, 22, 3, 33, 2, 32, 3] 2
