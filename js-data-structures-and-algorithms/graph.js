// 封装图结构
// 由顶点和边组成
// 顶点代表事物 边代表事物之间的关系
// 生活案例: 人和人之间的关系网 地铁图
// 特点: 顶点 vertex 可以用数组或者集合模拟 边 edge 可以用字典模拟 边分为无向边 有向边
// 度: 相邻的顶点数量 路径: 简单路径(0-1-2-3-4)/回路(第一个顶点也是等于最后一个顶点)
// 分类: 无向图 有向图 无权图 有权图
// 边的表示: 邻接矩阵/邻接表

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

function Graph() {
  this.vertexes = [] // 存储顶点
  this.edge = new Map() // 存储边

  // 添加顶点
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.edge.set(v, [])
  }

  // 添加边
  Graph.prototype.addEdge = function (v1, v2) {
    this.edge.get(v1).push(v2)
    this.edge.get(v2).push(v1)
  }

  // toString
  Graph.prototype.toString = function () {
    let resultStr = ''
    // 遍历顶点
    for (let i = 0; i < this.vertexes.length; i++) {
      resultStr += this.vertexes[i] + '->'
      // 获取对应边
      const edgeList = this.edge.get(this.vertexes[i])
      for (let j = 0; j < edgeList.length; j++) {
        resultStr += edgeList[j] + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }

  Graph.prototype.initialColor = function () {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }

  // 广度优先搜素
  Graph.prototype.bfs = function (initV, handler) {
    let colors = this.initialColor()
    const queue = new Queue()
    // 传一个顶点进入队列
    queue.enqueue(initV)
    while (!queue.isEmpty()) {
      // 出栈顶点
      let v = queue.dequeue()
      // 获取顶点的相邻顶点然后依次入栈
      let r = this.edge.get(v)
      // 设置为灰色表示已被访问, 但未探测它的相邻节点
      colors[v] = 'gray'
      for (let i = 0; i < r.length; i++) {
        // 如果没被探测过才入栈
        if (colors[r[i]] === 'white') {
          colors[r[i]] = 'gray'
          queue.enqueue(r[i])
        }
      }
      // 访问节点
      handler(v)
      // 设置为黑色表示顶点以及它的相邻顶点都被访问完了
      colors[v] = 'black'
    }
  }

  // 深度优先搜索
  Graph.prototype.dfs = function (initV, handler) {
    let colors = this.initialColor()
    this.dfsVisit(initV, colors, handler)
  }

  Graph.prototype.dfsVisit = function (v, colors, handler) {
    colors[v] = 'gray'
    handler(v)
    let vList = this.edge.get(v)
    for (let i = 0; i < vList.length; i++) {
      let item = vList[i]
      if (colors[item] === 'white') {
        this.dfsVisit(item, colors, handler)
      }
    }
    colors[v] = 'black'
  }
}

const vertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
let graph = new Graph()
for (let i = 0; i < vertex.length; i++) {
  graph.addVertex(vertex[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.toString())
// A->B C D
// B->A E F
// C->A D G
// D->A C G H
// E->B I
// F->B
// G->C D
// H->D
// I->E
let bfsStr = ''
graph.bfs(graph.vertexes[0], function (v) {
  bfsStr += v + ' '
})
console.log(bfsStr) // A B C D E F G H I
bfsStr = ''
graph.dfs(graph.vertexes[0], function (v) {
  bfsStr += v + ' '
})
console.log(bfsStr) // A B E I F C D G H
