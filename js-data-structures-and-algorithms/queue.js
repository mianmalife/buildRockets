// 队列 先进先出
// 从前端删除元素 从后端插入元素
function Queue() {
  this.queueItems = []
}

// 元素插入队列
Queue.prototype.enqueue = function (element) {
  this.queueItems.push(element)
}

// 从队列删除元素
Queue.prototype.dequeue = function () {
  return this.queueItems.shift()
}

// 获取队列前端元素
Queue.prototype.front = function () {
  return this.queueItems[0]
}

// 获取队列元素个数
Queue.prototype.size = function () {
  return this.queueItems.length
}

// 队列是否为空
Queue.prototype.isEmpty = function () {
  return this.queueItems.length === 0
}

// 获取队列元素字符串
Queue.prototype.toString = function () {
  let queueString = ''
  for (let i = 0; i < this.queueItems.length; i++) {
    queueString += this.queueItems[i]
  }
  return queueString
}

// 击鼓传❀

function playFlower(array, num) {
  const queue = new Queue()
  // 所有人插入队列
  for (let i = 0; i < array.length; i++) {
    queue.enqueue(array[i])
  }

  // 不知道要进行多少轮才能找到最后留下的人 所以用while
  while (queue.size() > 1) {
    // 前num - 1个人删除并重新插入列表末尾 先进先出
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 删除数到num的人
    queue.dequeue()
  }
  // 获取最后留下的人
  const last = queue.front()
  return array.indexOf(last)
}

const end = playFlower(['sasuki', 'naruto', 'kakashi', 'madala', 'obito'], 4)
console.log(end)
