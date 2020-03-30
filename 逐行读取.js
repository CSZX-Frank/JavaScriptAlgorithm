// 1.实现输入输出,固定一行或多行输入（node.js）
const readline = require("readline");  
const rl = readline.createInterface({  
    input: process.stdin,  
    output:process.stdout,
    prompt: '请输入> '
});  
   
var inputArr = [];  
var lineNum = 0;  
rl.on('line', function(line){  
    inputArr.push(line);  // 多行输入
    var n = parseInt(inputArr[0]);  
  
    if(lineNum == n){  
        // 下面就可以对数据进行处理......  
        var arr = inputArr.slice(1);  
        console.log(arr);  
        inputArr = [];// 清空数组  
        rl.close();  // 触发了close事件
    }else{  
        lineNum++;  
    }          
});  
  
rl.on('close', function() {  
    console.log('程序结束');  
    process.exit(0);  
});



// 2.一次全部读取后使用（node.js）
process.stdin.resume();
process.stdin.setEncoding("ascii"); // utf-8

let input = "";
process.stdin.on("data", function (data) { // 先将所有行的输入完
    //将输入的数据赋给input
    input += data;
    let chunk = data.slice(0, -2);
    console.log("此时的输入",chunk)
    if (chunk === '') { // 检测是否输入的是回车
        process.stdin.emit('end');
    }
})

process.stdin.on('end', function () {
    //将输入的多行数据转换为数组
    let arrStr = input.trim().split("\r\n"); // 先去掉前后空格，在按照回车换行来分割,最后触发end的是一个空字符串（即最后一个\r\n前）
    let arr = [];
    for (const e of arrStr) { // 转为整数
        arr.push(e.split(' ').map(k=>parseInt(k)));
    }
    console.log("最终得到的输入：");
    console.log(arr);


    input = ""; // 复位输入
})


// JavaScript V8
while(line=readline()){
    var lines = line.split(' ');
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    function add(m,n){
        return m+n;
    }
    console.log(add(a,b));
} 