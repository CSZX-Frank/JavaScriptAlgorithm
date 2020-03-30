// 递归实现深拷贝
function Clone(obj) {
   //先判断是数组还是对象（执行对应的拷贝）
   var objCopy = Array.isArray(obj) ? [] : {};
   //拷贝的对象不能为空
   if (obj && typeof obj === "object") {
      for (key in obj) {//遍历
         if (obj.hasOwnProperty(key)) {
            //拷贝的对象不能为空
            if (obj[key] && typeof obj[key] === "object") {
               objCopy[key] = Clone(obj[key]);
            } else {
               objCopy[key] = obj[key];
            }
         }
      }
   }
   return objCopy;
}
 

//  测试用例
let arrPrev = [1, 2, 3, 4, 5];
let arr = Clone(arrPrev);
console.log(arr === arrPrev);

let objPrev = { name: "Frank" };
let obj = Clone(objPrev);
console.log(objPrev === obj);


//  浅拷贝
let objAssign = Object.assign(objPrev);
console.log(objPrev === objAssign);

let num_1 = [1, 2, 3];
let num_2 = num_1;
console.log(num_1 === num_2);

//  数组的拷贝
/**
 * 1.直接赋值为浅拷贝
 * 2.slice和concat适用于数组成员不是对象的数组，故为只对第一层是深拷贝
 */
// 数组的push()方法，也是浅拷贝

// DOM的拷贝
/**
 * .cloneNode() 参数为true时执行深复制，false时为浅复制
 *
 */



//  总结
/**
 * 赋值运算符 = 实现的是浅拷贝，只拷贝对象的引用值；
 * JavaScript 中数组和对象自带的拷贝方法都是“首层浅拷贝”；
 * JSON.stringify 实现的是深拷贝，但是对目标对象有要求（非 undefined，function）；
 * 若想真正意义上的深拷贝，请递归。
 */

