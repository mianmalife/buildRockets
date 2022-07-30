// 双向链表
function DoublyLinkedList() {
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  this.head = null
  this.tail = null
  this.length = 0

  DoublyLinkedList.prototype.append = function (data) {
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
      newNode.prev = current
      this.tail = newNode
    }
    this.length += 1
  }

  DoublyLinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        let index = 0
        let current = this.head
        while (index++ < position) {
          current = current.next
        }
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
  }

  DoublyLinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = newData
    return current
  }

  DoublyLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  DoublyLinkedList.prototype.indexOf = function (data) {
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

  DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
    return current.data
  }

  DoublyLinkedList.prototype.remove = function (data) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }

  DoublyLinkedList.prototype.toString = function () {
    let current = this.head
    let linkStr = ''
    while (current) {
      linkStr += current.data + ' '
      current = current.next
    }
    return linkStr
  }

  DoublyLinkedList.prototype.forwardToString = function () {
    let current = this.head
    let forwardStr = ''
    while (current) {
      forwardStr += current.data + ' '
      current = current.next
    }
    return forwardStr
  }

  DoublyLinkedList.prototype.backwardToString = function () {
    let current = this.tail
    let backwardStr = ''
    while (current) {
      backwardStr += current.data + ' '
      current = current.prev
    }
    return backwardStr
  }

  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

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
