// 哈希表实现 - 哈希表是基于数组实现
// 优点: 插入 删除 效率高 时间复杂都接近O(1) 比树快 编码容易 瞬时查找 数组基于内容查找 只能从头遍历 删除元素需要位移其它元素 修改操作效率低
// 不足: 数据无序 无法从小到大排序 key不允许重复
// 解决冲突使用的链地址法(冲突: 下标重复) Java中的HashMap就使用的链地址法
// 解决冲突还可以使用开放地址法(寻找空白单元格添加重复元素(线性探测/二次探测/再哈希法))
// 结构 [ [[k,v],[k,v]], [[k,v],[k,v]], [[k,v],[k,v]], [[k,v],[k,v]] ]
// 装填因子=哈希表数据总个数/哈希表长度 > 0.75 时需要扩容 扩容一般扩容2倍并设置为质数
function HashTable() {
  // 用来存放数据
  this.storage = []
  // 当前哈希表的元素总个数
  this.count = 0
  // 哈希表的长度 后面扩容用
  this.limit = 7

  // 哈希函数
  HashTable.prototype.hashFunc = function (str, size) {
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    return hashCode % size
  }

  // 插入/修改操作
  HashTable.prototype.put = function (key, value) {
    // 获取索引值
    const index = this.hashFunc(key, this.limit)
    // 根据索引值取出bucket(桶)
    let bucket = this.storage[index]
    // 桶不存在则创建桶并添加到该索引的位置
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    // 判断是否是修改数据
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      // 修改
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    // 添加
    bucket.push([key, value])
    this.count += 1
    // 扩容 - 装填因子大于0.75 扩容后的limit最好是质数
    if (this.count > this.limit * 0.75) {
      const newLimit = this.limit * 2
      const newPrime = this.getPrime(newLimit)
      this.resize(newPrime)
    }
  }

  // 获取操作
  HashTable.prototype.get = function (key) {
    // 获取key对应的下标
    const index = this.hashFunc(key, this.limit)
    // 获取bucket
    const bucket = this.storage[index]
    // bucket不存在则直接返回null
    if (!bucket) {
      return null
    }
    // bucket存在 则线性查找bucket
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }

  // 删除操作
  HashTable.prototype.remove = function (key) {
    // 获取key对应的下标
    const index = this.hashFunc(key, this.limit)
    // 获取bucket
    const bucket = this.storage[index]
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count -= 1
        // 缩容
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const newLimit = Math.floor(this.limit / 2)
          const newPrime = this.getPrime(newLimit)
          this.resize(newPrime)
        }
        return tuple[1]
      }
    }
    return null
  }

  // 是否为空
  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  // 哈希表元素个数
  HashTable.prototype.size = function () {
    return this.count
  }

  // 扩容/缩容
  HashTable.prototype.resize = function (newLimit) {
    // 保存旧的数组内容
    let oldStorage = this.storage
    // 重置所有属性
    this.storage = []
    this.count = 0
    this.limit = newLimit
    // 遍历oldStorage 将bucket重新插入
    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i]
      if (!bucket) continue
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }

  // 判断质数 质数：只能被1和自身整除的数
  // 一个数如果能因数分解 则分解得到的数 一个一定小于等于sqrt(num) 一个一定大于等于sqrt(num)
  // sqrt(16) 2*8 4*4
  // 方法1 遍历 2-num-1 如果都不能整除 则为质数
  // 方法2 遍历2-sqrt(num) 如果都不能整除 则为质数
  HashTable.prototype.isPrime = function (num) {
    let sqrtNum = parseInt(Math.sqrt(num), 10)
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false
      }
      return true
    }
  }

  // 获取质数
  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
}

const hashTable = new HashTable()
hashTable.put('naruto', 'num1')
hashTable.put('sasuki', 'num2')
hashTable.put('kakashi', 'num3')
hashTable.put('obito', 'num4')
hashTable.put('kona', 'num5')
hashTable.put('tobi', 'num6')
// hashTable.put('kakashi1', 'num33')
// hashTable.put('obito1', 'num44')

console.log(hashTable.get('naruto'))
console.log(hashTable.get('obito'))
console.log(hashTable.get('sasuki'))
console.log(hashTable.get('kakashi'))
console.log(hashTable.get('kona'))
console.log(hashTable.get('tobi'))

hashTable.put('sasuki', 'num_update')
console.log(hashTable.get('sasuki'))
console.log(hashTable.remove('sasuki'))
console.log(hashTable.get('sasuki'))
console.log(hashTable.isEmpty())
console.log(hashTable.size())
console.log(hashTable.storage)
