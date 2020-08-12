/*
 * @Author: your name
 * @Date: 2020-08-12 14:40:26
 * @LastEditTime: 2020-08-12 15:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /es6-/forEach_async.js
 */
var  arr = [1,2,3,4,5,6];
(function loop(index){
  var timeout = setTimeout(function() {
    console.log(arr[index]);
    if( ++index < arr.length) {
      loop(index);
    } else {
      if(timeout) {clearTimeout(timeout)}
      console.log("弹窗事件全部执行完毕")
    }
  })
})(0)
// forEach跳出本次循环 
function forEachTest() {
  let arr = [1,2,3,4];
  arr.forEach(item => {
    if(item === 2) {
      return false;
    }
    console.log(item);
  })
}
forEachTest()
// forEach跳出整个循环
function outCircle() {
  let arr = [1,2,3,4];
  try {
    arr.forEach((item,index) => {
      if(item === 3) {
        throw new Error("end")
      }
      console.log(item);
    }) 
  } catch(e) {
    if(e.message != "end") throw e
  }
} 
outCircle()
//第二种方法：使用arr.some()或者arr.every()替代
// some()当内部return true时跳出整个循环：
// every()当内部return false时跳出整个循环