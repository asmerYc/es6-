// var foo = function() {
//   console.log('foo1');
// }
// foo()
// var foo = function() {
//   console.log('foo2')
// }
// foo()

// function foo() {
//   console.log('foo1')
// }
// foo()
// function foo() {
//   console.log('foo2');
// }
// foo()

// 变量提升 只会提升变量名的声明 而不会去提升变量的赋值初始化
// 函数提升的优先级大于变量提升的优先级,即函数提升在变量提升之上

// console.log(a)
// var a = 1;
// console.log(a)

// function a() {
//   console.log(2)
// }
// console.log(a);
// var a = 3;
// console.log(a);
// function a() {
//   console.log(3)
// }
// a()
// console.log(a)
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
obj.count = 1
//  setting count!
console.log(++obj.count)

