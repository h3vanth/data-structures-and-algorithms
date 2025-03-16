class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(log n)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  getNode(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }

    let prevNode = null;
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.value === value) {
        if (!currentNode.left && !currentNode.right) {
          if (prevNode.left === currentNode) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
        } else if (currentNode.left && !currentNode.right) {
          if (value < prevNode.value) {
            prevNode.left = currentNode.left;
          } else {
            prevNode.right = currentNode.left;
          }
        } else if (!currentNode.left && currentNode.right) {
          if (value < prevNode.value) {
            prevNode.left = currentNode.right;
          } else {
            prevNode.right = currentNode.right;
          }
        } else {
          // Both left and right is present
          const leftNode = currentNode.left;
          const rightNode = currentNode.right;

          prevNode.right = rightNode;
          rightNode.left = leftNode;
        }
        return;
      } else {
        prevNode = currentNode;
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  _balance() {}
}

/*
      1
    /   \
   0     2
          \
           7
          / \
         6   10
*/

function test() {
  const tree = new BinarySearchTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(0);
  tree.insert(7);
  tree.insert(6);
  tree.insert(10);

  tree.remove(7);

  console.log(tree.getNode(1));
  console.log(tree.getNode(0));
  console.log(tree.getNode(2));
  console.log(tree.getNode(6));
  console.log(tree.getNode(10));
}

test();
