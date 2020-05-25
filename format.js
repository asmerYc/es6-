// function getType(obj) {
//   const str = Object.prototype.toString.call(obj);
//   const map = {
//     '[object Boolean]': 'boolean',
//     '[object Number]': 'number',
//     '[object String]': 'string',
//     '[object Function]': 'function',
//     '[object Array]': 'array',
//     '[object Date]': 'date',
//     '[object RegExp]': 'regExp',
//     '[object Undefined]': 'undefined',
//     '[object Null]': 'null',
//     '[object Object]': 'object'
//   };

//   return map[str];
// }
// console.log(getType([0]))
let promise = new Promise((resolve,reject) =>{
  console.log("Promise");
  resolve()
})
promise.then(res => {
  console.log('resolved')
})
console.log('hi')