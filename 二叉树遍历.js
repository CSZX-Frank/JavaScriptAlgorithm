var levelOrder = function(root, floor = 0, arr = []) {
    // 广度优先搜索,层次遍历,辅助队列,非递归
    if(!root) return [];
    const result = [];
    const queue = [root]; // 辅助队列，放入根节点
    while(queue.length) {
      const level = queue.length; // 当前层的节点数，每一个for循环出队的节点个数
      const currLevel = []; // 当前层的节点值数组
      for(let i = 0; i < level; i++) { // 每次遍历当前一层节点，并将下一层节点入队
        const curr = queue.shift(); // 当前访问的节点出队
        curr.left && queue.push(curr.left); // 出队节点的子女如果存在则入队
        curr.right && queue.push(curr.right); // 出队节点的子女如果存在入队
        currLevel.push(curr.val); // 储存当前层
      }
      result.push(currLevel); // 向结果中添加当前层的节点值
    }
    return result;
  };

// 中序遍历二叉树
var inorderTraversal = function(root) {
  // 栈
  const res = [];
  const stack = [];
  let cur = root;
  while (cur !== null || stack.length) {
      while (cur !== null) {
          stack.push(cur);
          cur = cur.left;
      }
      cur = stack.pop();
      res.push(cur.val); // 前序和中序遍历的区别
      cur = cur.right;
  }
  return res;
};

// 前序遍历二叉树
var preorderTraversal = function(root) {
  // 辅助栈
  const stack =[], res = [];
  let cur = root;
  while (cur !== null || stack.length) {
      while (cur !== null) {
          stack.push(cur);
          res.push(cur.val);
          cur = cur.left;
      }
      cur = stack.pop();
      cur = cur.right;
  }
  return res;
};

// 后序遍历二叉树
var postorderTraversal = function(root) {
  // 栈
  const stack = [], res = [];
  let cur = root;
  while (cur !== null || stack.length) {
      while (cur !== null) {
          stack.push(cur);
          res.unshift(cur.val);
          cur = cur.right;
      }
      cur = stack.pop();
      cur = cur.left;
  }
  return res;
};