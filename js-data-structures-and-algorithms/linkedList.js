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
    if (this.length === 0) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length += 1
  }

  // toString方法
  LinkedList.prototype.toString = function () {
    let linkString = ''
    let current = this.head
    while (current) {
      linkString += current.data + ' '
      current = current.next
    }
    return linkString
  }

  // 插入方法
  LinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
    }
    this.length += 1
    return true
  }

  // get方法
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // indexOf方法
  LinkedList.prototype.indexOf = function (data) {
    let current = this.head
    let index = 0
    while (current) {
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
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }

  // remove方法
  LinkedList.prototype.remove = function (data) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }

  // upate方法
  LinkedList.prototype.update = function (position, data) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = data
    return current
    // let node = this.get(position)
    // if (node) {
    //   this.remove(node)
    //   this.insert(position, data)
    // }
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
// console.log(linked.removeAt(2))
// console.log(linked.remove('kakashi'))
// console.log(linked.remove('naruto'), linked)
console.log(linked.update(1, 'newKakashi'))
console.log(linked)
