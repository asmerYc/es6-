//第一种  test()
// var a = 1;
// function test() {
//   console.log(this.a);
// }
// test()
//  直接不带任何引用形式的去调用函数,则this指向全局对象,因为没有其他影响去改变This.this默认就是指向全局对象
// 浏览器是window.node中是global,这个结论是在非严格情况下的,  严格情况下的这个this其实是Undefined

//认准第二种 "xxx.test()"形式

// var a = 1;
// function test() {
//   console.log(this.a)
// }
// var obj = {
//   a:2,
//   test
// }
// console.log(obj.test())


//串烧
var a = 1;
function test() {
  console.log(this.a)
}
var obj = {
  a:2,
  test
}
var obj0 = {
  a:3,
  obj
}
obj0.obj.test()