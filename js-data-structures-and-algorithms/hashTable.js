// 哈希表实现
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
    for (let i = 0; i < this.storage.length; i++) {
      const tuple = this.storage[i]
      // 修改
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }
    // 添加
    bucket.push[(key, value)]
    this.count += 1
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
    for (const i = 0; i < this.storage.length; i++) {
      const tuple = this.storage[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
}
