// 优先级队列
function PriorityQueue() {
  this.queueItem = []

  // 元素插入队列
  PriorityQueue.prototype.enqueue = function (element, priority) {
    const priorityItem = new PriorityElement(element, priority)
    // 队列为空 直接插入
    if (this.queueItem.length === 0) {
      this.queueItem.push(priorityItem)
    } else {
      let addStaus = false
      for (let i = 0; i < this.queueItem.length; i++) {
        if (priorityItem.priority < this.queueItem[i].priority) {
          this.queueItem.splice(i, 0, priorityItem)
          addStaus = true
          break
        }
      }
      if (!addStaus) {
        this.queueItem.push(priorityItem)
      }
    }
  }

  // 出队列
  PriorityQueue.prototype.dequeue = function () {
    return this.queueItem.shift()
  }

  // 队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.queueItem.length === 0
  }

  // 队列元素个数
  PriorityQueue.prototype.size = function () {
    return this.queueItem.length
  }

  // 队列元素字符串
  PriorityQueue.prototype.toStr = function () {
    let queueStr = ''
    for (let i = 0; i < this.queueItem.length; i++) {
      queueStr += `${this.queueItem[i].element}-${this.queueItem[i].priority} `
    }
    return queueStr
  }
}
function PriorityElement(element, priority) {
  this.element = element
  this.priority = priority
}

const queue = new PriorityQueue()
queue.enqueue('naruto', 2)
queue.enqueue('kakshi', 4)
queue.enqueue('madala', 1)
queue.enqueue('sasuki', 3)

console.log(queue.queueItem)
console.log(queue.toStr())
console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.isEmpty())
