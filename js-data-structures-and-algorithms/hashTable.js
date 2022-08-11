// 哈希表实现
// 结构 [ [[k,v],[k,v]], [[k,v],[k,v]], [[k,v],[k,v]], [[k,v],[k,v]] ]
function HashTable() {
  // 用来存放数据
  this.storage = []
  // 当前哈希表的长度
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
    // 扩容
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

  // 判断质数
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
