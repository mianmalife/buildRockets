// 双向链表 head指向第一个节点 tail指向最后一个节点
// 每个节点都有一个指向前一个节点的指针 prev 和 一个指向后一个节点的指针 next
function DoublyLinkedList() {
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  this.head = null
  this.tail = null
  this.length = 0

  // 追加操作
  DoublyLinkedList.prototype.append = function (data) {
    let newNode = new Node(data)
    // 链表为空 直接head指向新节点 tail指向新节点 即是第一个节点又是最后一个节点
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 链表不为空
      let current = this.head
      // 循环遍历节点
      while (current.next) {
        current = current.next
      }
      // 找到最后一个节点 current current的next指向新节点 新节点的prev指向current节点
      current.next = newNode
      newNode.prev = current
      // 修改tail指向最后一个节点
      this.tail = newNode
    }
    // 节点长度+1
    this.length += 1
  }

  // 插入操作 传入要插入的位置以及节点
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 越界判断 位置为负数或者位置大于链表长度则返回false
    if (position < 0 || position > this.length) return false
    // 创建新节点
    let newNode = new Node(data)
    // 链表为空时
    if (this.length === 0) {
      // head tail都指向新节点
      this.head = newNode
      this.tail = newNode
    } else {
      // 链表不为空 插入位置0
      if (position === 0) {
        // 原链表第一个节点变为第二个节点 原链表第一个节点的上一个节点变为新节点 prev指向新节点
        // 新节点的next指向原链表第一个节点
        // head指向第一个节点 即 新节点
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        // 插到链表末尾(相当于追加)
      } else if (position === this.length) {
        // 最后一个节点tail的next指向新节点
        // 新节点的prev指向tail
        // 最后一个节点变为新节点 即 tail指向新节点
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        // 遍历节点 找到要插入的位置的原节点 current
        let index = 0
        let current = this.head
        while (index++ < position) {
          current = current.next
        }
        // 新节点的next指向current
        // 新节点的prev指向current的prev 即新节点的上一个节点是current的上一个节点
        // current的上一个节点的next指向新节点
        // current的上一个节点变为新节点
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    // 链表长度+1
    this.length += 1
    return true
  }

  // 更新操作
  DoublyLinkedList.prototype.update = function (position, newData) {
    // 越界判断 负数或者位置等于链表长度 直接返回null 链表下标是从0开始 不能更新不存在的元素
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    // 遍历找到要更新的节点
    while (index++ < position) {
      current = current.next
    }
    // 更新信息
    current.data = newData
    // 返回更新后的节点
    return current
  }

  // 根据位置获取链表节点
  DoublyLinkedList.prototype.get = function (position) {
    // 越界判断 负数或者位置等于链表长度 直接返回null 链表下标是从0开始 不能获取不存在的元素
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    // 遍历找到要更新的节点
    while (index++ < position) {
      current = current.next
    }
    // 遍历找到的节点
    return current.data
  }

  // 跟据节点找位置
  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0
    // 遍历节点 data相等时返回下标 否则返回-1
    while (current) {
      if (current.data === data) {
        return index
      }
      index += 1
      current = current.next
    }
    return -1
  }

  // 根据位置删除元素
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 越界判断 负数或者位置等于链表长度 直接返回null 链表下标是从0开始 不能删除不存在的元素
    if (position < 0 || position >= this.length) return null
    let current = this.head
    // 链表只有一个节点 删除节点后 head tail都指向null
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // 删除第一个节点
      if (position === 0) {
        // 第二个节点的prev指向null
        // head指向第二个节点
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        // 删除最后一个节点
        // 因为要返回删除的节点 所有这里将先将current等于this.tail
        current = this.tail
        // 倒数第二个节点变为最后一个节点 即 它的next指向null
        // tail指向倒数第二个节点
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        // 遍历找到要删除的节点
        while (index++ < position) {
          current = current.next
        }
        // 要删除节点的上一个节点的next指向要删除节点的下一个节点
        // 要删除节点的下一个节点的上一个节点为要删除节点的上一个节点
        // 因为没有任何节点指向current 所有current会被垃圾回收
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    // 链表长度-1
    this.length -= 1
    // 返回删除节点的data
    return current.data
  }

  // 删除操作
  DoublyLinkedList.prototype.remove = function (data) {
    // 找到删除元素下标
    let position = this.indexOf(data)
    // 根据下标删除元素
    return this.removeAt(position)
  }

  // 转为字符串
  DoublyLinkedList.prototype.toString = function () {
    let current = this.head
    let linkStr = ''
    while (current) {
      linkStr += current.data + ' '
      current = current.next
    }
    return linkStr
  }

  // 从开始打印链表
  DoublyLinkedList.prototype.forwardToString = function () {
    let current = this.head
    let forwardStr = ''
    while (current) {
      forwardStr += current.data + ' '
      current = current.next
    }
    return forwardStr
  }

  // 从结尾打印链表
  DoublyLinkedList.prototype.backwardToString = function () {
    let current = this.tail
    let backwardStr = ''
    while (current) {
      backwardStr += current.data + ' '
      current = current.prev
    }
    return backwardStr
  }

  // 链表长度
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 获取链表第一个节点
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

  // 获取链表最后一个节点
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }
}

const link = new DoublyLinkedList()
link.append('RNG')
link.append('EDG')
link.append('JDG')
link.append('V5')
link.append('AL')
link.append('OMG')
link.append('LNG')
console.log(link)
console.log(link.toString())
console.log(link.forwardToString())
console.log(link.backwardToString())
console.log(link.insert(2, 'IG'))
console.log(link)
console.log(link.get(2))
console.log(link.indexOf('IG'))
console.log(link.removeAt(0))
console.log(link.remove('IG'))
console.log(link.remove('JDG'))
console.log(link)
console.log(link.toString())
console.log(link.update(2, 'TES'))
console.log(link.update(3, 'UP'))
console.log(link)
console.log(link.getHead())
console.log(link.getTail())
