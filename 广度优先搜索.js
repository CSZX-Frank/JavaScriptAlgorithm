// 994题，BFS,使用辅助队列(类似于二叉树的层序遍历)
var orangesRotting = function (grid) {
    let [queue, fresh, minute] = [[], 0, 0];
    // 统计坏橘子坐标和新鲜橘子的个数
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            else if (grid[i][j] === 1) fresh++;
        }
    }
    console.log(queue)
    // 多次感染
    while (queue.length && fresh) {
        let nextQ = [];
        while (queue.length) { // 感染一轮
            let badOrange = queue.shift();
            let rotted = infectOthers(grid, badOrange[0], badOrange[1], nextQ);
            fresh -= rotted;
        }
        minute++;
        queue = nextQ;
    }
    return fresh ? -1 : minute;
}

function infectOthers(grid, i, j, queue) {
    let infected = 0;
    // 感染左边的橘子
    if (i > 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j]++;
        infected++;
        queue.push([i - 1, j]);
    }
    // 感染右边的橘子
    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
        grid[i + 1][j]++;
        infected++;
        queue.push([i + 1, j]);
    }
    // 感染上边的橘子
    if (j > 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1]++;
        infected++;
        queue.push([i,j - 1]);
    }
    // 感染下边的橘子
    if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
        grid[i][j + 1]++;
        infected++;
        queue.push([i, j + 1]);
    }
    return infected;
}

console.log(orangesRotting([[1,1,2,0,2,0]]))
