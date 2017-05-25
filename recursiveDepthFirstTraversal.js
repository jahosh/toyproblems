class Tree {
  constructor(value = null) {
    this.val = value;
    this.children = [];
  }

  addChild(val) {
    const node = new Tree(val);
    this.children.push(node);
  }
}

const myTree = new Tree("root");
myTree.addChild("Josh");
myTree.addChild("Carina");

const traverseDepthFirstRecursive = (node) => {
  if (!node.children.length) {
    // output value
    console.log(node.val);
  } else {
    node.children.forEach((child) => {
      traverseDepthFirst(child);
    });
  }
}

const traverseDepthFirstIterative = (node) => {
  const stack = [node];

  while (stack.length) {
    const node = stack.pop();
    if (node.children.length) {
      node.children.forEach((child) => {
        stack.push(child);
      });
    } else {
      // output value
      console.log(node.val);
    }
  }
}