// 单向链表实现
function LinkedList() {
  // 链表节点类
  function Node(data) {
    this.data = data
    this.next = null
  }
  // 链表长度
  this.length = 0
  // 链表head指针
  this.head = null

  // 追加方法
  LinkedList.prototype.append = function (data) {
    let newNode = new Node(data)
    // 如果链接为空
    if (this.length === 0) {
      // 链表长度为0 head指向第一个节点
      this.head = newNode
    } else {
      // 声名一个变量current保存第一个节点
      let current = this.head
      // 遍历链表 最后一个节点next指向null
      while (current.next) {
        current = current.next
      }
      // 最后一个节点的next指向追加的节点
      current.next = newNode
    }
    // 链表长度+1
    this.length += 1
  }

  // toString方法
  LinkedList.prototype.toString = function () {
    let linkString = ''
    let current = this.head
    // 遍历节点, 节点data相加
    while (current) {
      linkString += current.data + ' '
      current = current.next
    }
    return linkString
  }

  // 插入方法
  LinkedList.prototype.insert = function (position, data) {
    // 越界判断 如果插入位置为负数或者插入位置大于链表长度(位置为链表长度时,其实就是插入链表末尾)返回false
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)
    // 插入第一个位置时
    if (position === 0) {
      // 新插入节点的next指向原先第一个节点(this.head)
      newNode.next = this.head
      // head指向新插入节点
      this.head = newNode
    } else {
      // 不是第一个位置时
      let index = 0
      // 保存当前节点
      let current = this.head
      // 保存上一个节点(默认head节点的上一个节点为null)
      let previous = null
      // 遍历position前的节点 index等于position跳出循环
      while (index++ < position) {
        // 保存上一个节点
        previous = current
        current = current.next
      }
      // 上一个节点的next指向新插入的节点
      previous.next = newNode
      // 新插入的节点的next指向当前的节点(当前节点后移)
      newNode.next = current
    }
    // 链表长度+1
    this.length += 1
    return true
  }

  // get方法
  LinkedList.prototype.get = function (position) {
    // 越界判断 获取位置小于0或者大于等于链表长度时返回null
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    let index = 0
    // 遍历链表(获取位置为3, 对于链表的下标为2的节点)
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // indexOf方法
  LinkedList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0
    // 遍历链表
    while (current) {
      // 节点data等于传入的data时返回节点下标
      if (current.data === data) {
        return index
      }
      index += 1
      current = current.next
    }
    return -1
  }

  // removeAt方法
  LinkedList.prototype.removeAt = function (position) {
    // 越界判断 如果删除位置为负数或者删除位置大于等于链表长度 返回false
    if (position < 0 || position >= this.length) return null
    let current = this.head
    // 位置为0相当于删除第一个节点
    if (position === 0) {
      // 将head指向第一个节点的next就相当于删除了第一个节点
      this.head = this.head.next
    } else {
      let previous = null
      let index = 0
      // 遍历节点
      while (index++ < position) {
        previous = current
        current = current.next
      }
      // 上一个节点的next指向当前节点的next就相当于删除了当前节点
      previous.next = current.next
    }
    // 链表长度-1
    this.length -= 1
    return current.data
  }

  // remove方法
  LinkedList.prototype.remove = function (data) {
    // 获取要删除节点的下标
    let position = this.indexOf(data)
    // 删除这个下标的节点
    return this.removeAt(position)
  }

  // upate方法
  LinkedList.prototype.update = function (position, data) {
    // 越界判断 如果更新位置为负数或者更新位置大于等于链表长度 返回false
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    // 遍历节点 找到要更新位置的节点
    while (index++ < position) {
      current = current.next
    }
    // 更新节点信息
    current.data = data
    // 返回节点
    return current
  }
}

const linked = new LinkedList()

linked.append('naruto')
linked.append('kakashi')
linked.append('sasuki')
console.log(linked)
console.log(linked.toString())
linked.insert(2, 'obito')
console.log(linked)
console.log(linked.toString())

console.log(linked.get(2))

console.log(linked.indexOf('obito'))
console.log(linked.removeAt(2))
console.log(linked.remove('kakashi'))
console.log(linked.remove('naruto'))
linked.append('konan')
console.log(linked.update(1, 'newKakashi'))
console.log(linked)
