class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (this.root == null) {
      this.root = node;
    } else {
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
  }

  remove(value) {

  }

  _balance() {

  }
}

function test() {
  const tree = new BinarySearchTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(0);
  tree.insert(7);
  tree.insert(6);
  tree.insert(10);
  console.log(tree);
}

test()
