function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = function (data) {
    this.array.push(data)
  }

  ArrayList.prototype.toString = function () {
    let str = ''
    for (let i = 0; i < this.array.length; i++) {
      str += this.array[i] + ' '
    }
    return str
  }

  ArrayList.prototype.swap = function (m, n) {
    const temp = this.array[n]
    this.array[n] = this.array[m]
    this.array[m] = temp
  }

  // 冒泡排序 算法复杂度O(N^2)
  // 相邻元素a,b比较大小 a>b则a,b交换位置 然后右移继续比较 直到比较到倒数第二个元素 第一轮结束
  // 进行下一轮 比较到倒数第三个元素... 依次继续下去
  // 参考下面例子 第一轮比较比较9次 第二轮比较8次... 7次...1次
  // 比较次数: 9+8+7+6+5+4+3+2+1  -> n-1 + n-2 +... 1  -> n*(n-1) / 2 -> n^2/2 - n/2 -> n^2
  // 假如两次比较实际只交换一次 那么平均交换次数为 n^2/4 - n/4 ->  n^2
  ArrayList.prototype.bubbleSort = function () {
    const len = this.array.length
    for (let j = len - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i + 1)
        }
      }
    }
  }

  // 选择排序
  // 比较次数 O(N^2) 交换次数 O(N)
  // 设置最小值下标默认是0 从1开始找 找到最小的值 设置最小值下标 交换最小值和当前元素的位置
  // 比较次数和冒泡排序一致 交换次数为n-1次 比冒泡排序效率高些
  ArrayList.prototype.selectionSort = function () {
    const len = this.array.length
    for (let j = 0; j < len - 1; j++) {
      let min = j
      for (let i = min + 1; i < len; i++) {
        if (this.array[min] > this.array[i]) {
          min = i
        }
      }
      this.swap(min, j)
    }
  }

  // 插入排序
  // 效率比冒泡排序和选择排序效率都高
  // 比较次数或者复制次数最多 1+2+3+...+n-1  --> n*(n-1)/2  平均比较次数 n*(n-1)/4
  ArrayList.prototype.insertionSort = function () {
    const len = this.array.length
    // 外层循环 从1开始分别和前面已经排序的项比较
    for (let i = 1; i < len; i++) {
      const temp = this.array[i]
      let j = i
      // 因为不知道要和前面的项比较几次 所有用while比较好
      while (this.array[j - 1] > temp && j > 0) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }

  // 希尔排序
  ArrayList.prototype.shellSort = function () {
    const len = this.array.length
    // 增量(间隔)
    let gap = Math.floor(len / 2)
    while (gap >= 1) {
      for (let i = gap; i < len; i++) {
        const temp = this.array[i]
        let j = i
        while (this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
  }
}

let list = new ArrayList()
// list.insert(3)
// list.insert(4)
// list.insert(5)
// list.insert(1)
list.insert(10)
list.insert(2)
list.insert(22)
list.insert(1)
list.insert(11)
list.insert(13)
list.insert(14)
list.insert(9)
list.insert(8)
list.insert(18)
list.insert(36)
list.insert(1)
// console.log(list.array)
// list.bubbleSort()
// console.log(list.toString()) // 1 2 8 9 10 11 13 14 18 22
// list.selectionSort()
// list.insertionSort()
list.shellSort()
console.log(list.toString()) // 1 1 2 8 9 10 11 13 14 18 22 36
