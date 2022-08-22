// 二叉搜索树
function BinarySearchTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 树根
  this.root = null

  // 插入方法
  BinarySearchTree.prototype.insert = function (key) {
    // 创建节点
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      // 向右查找
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      handler(node.key)
      // 查找左子树中的节点
      this.preOrderTraversalNode(node.left, handler)
      // 查找右子树中的节点
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
    this.midOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 查找左子树中的节点
      this.midOrderTraversalNode(node.left, handler)
      handler(node.key)
      // 查找右子树中的节点
      this.midOrderTraversalNode(node.right, handler)
    }
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 查找左子树中的节点
      this.postOrderTraversalNode(node.left, handler)
      // 查找右子树中的节点
      this.postOrderTraversalNode(node.right, handler)
      // 处理节点
      handler(node.key)
    }
  }

  // 查找最大值
  BinarySearchTree.prototype.max = function () {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }

  // 查找最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // 搜索
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
  }

  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node === null) return false
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return node.key
    }
  }

  // 搜素-循环实现
  BinarySearchTree.prototype.searchWhile = function (key) {
    let node = this.root
    while (node !== null) {
      if (node.key > key) {
        node = node.left
      } else if (node.key < key) {
        node = node.right
      } else {
        return node.key
      }
    }
    return null
  }

  // 删除操作
  BinarySearchTree.prototype.remove = function (key) {
    // 查找到的节点
    let current = this.root
    // 查找到的节点的父节点
    let parent = null
    // 是否是左节点
    let isLeftChild = true
    // 循环开始
    while (current.key !== key) {
      parent = current
      // 向左查找
      if (current.key > key) {
        isLeftChild = true
        current = current.left
      } else {
        // 向右查找
        isLeftChild = false
        current = current.right
      }
      // 没有查找节点 直接返回null
      if (current === null) return false
    }
    // 跳出循环说明查找到了节点
    // 要删除的节点没有子节点
    if (current.left === null && current.right === null) {
      // 是根节点 直接赋值为null
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        // 是左子节点
        parent.left = null
      } else {
        // 是右子节点
        parent.right = null
      }
      // 要删除的节点有一个子节点
      // 有一个右子节点 / 有一个左子节点
    } else if (current.left === null) {
      // 是根节点 则根节点赋值为右节点
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        // 不是根节点 但是左节点 要删除的节点有一个右节点
        parent.left = current.right
      } else {
        // 不是根节点 但是右节点 要删除的节点有一个右节点
        parent.right = current.right
      }
    } else if (current.right === null) {
      // 和上一部分逻辑相反
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else {
      // 要删除的节点有两个子节点
      let successor = this.getSuccessor(current)
      if (this.root === current) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
    return null
  }

  // 获取前驱或者后继节点用来替换要删除的节点current
  // 前驱: 比current小一点点的节点
  // 后继: 比current大一点点的节点

  // 这里寻找后继节点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    let successsorParent = delNode
    let successor = delNode
    let current = delNode.right

    while (current !== null) {
      successsorParent = successor
      successor = current
      current = current.left
    }

    // 如果后继节点不是删除节点的右节点
    if (successor !== delNode.right) {
      successsorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}

let bstStr = ''
function handler(key) {
  bstStr += key + ' '
}
const bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

console.log(bst)
bst.preOrderTraversal(handler)
console.log(bstStr) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
bstStr = ''
bst.midOrderTraversal(handler)
console.log(bstStr) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
bstStr = ''
bst.postOrderTraversal(handler)
console.log(bstStr) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log(bst.max()) // 25
console.log(bst.min()) // 3
console.log(bst.search(10)) // 10
console.log(bst.searchWhile(10)) // 10

bst.remove(10)
bstStr = ''
bst.midOrderTraversal(handler)
console.log(bstStr) // 3 5 6 7 8 9 11 12 13 14 15 18 20 25

bst.remove(25)
bstStr = ''
bst.midOrderTraversal(handler)
console.log(bstStr) // 3 5 6 7 8 9 11 12 13 14 15 18 20

bst.remove(3)
bstStr = ''
bst.midOrderTraversal(handler)
console.log(bstStr) // 5 6 7 8 9 11 12 13 14 15 18 20

bst.remove(11)
bstStr = ''
bst.midOrderTraversal(handler) // 5 6 7 8 9 12 13 14 15 18 20
console.log(bstStr)
