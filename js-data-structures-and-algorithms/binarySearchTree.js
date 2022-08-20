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
    let current = this.root
    let parent = null
    let isLeftChild = true
    while (current.key !== key) {
      parent = current
      if (current.key > key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      if (current === null) return false
    }
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    }
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
