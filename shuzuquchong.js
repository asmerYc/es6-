//1.数组去重indexof
var arr = [1,2,3,1,2,4,4,5,6,5]

// function unique(arr) {
//   let newArr = [];
//   for(var i =0;i<arr.length;i++){
//     for(var j = 0;j<newArr.length;j++){
//       if(arr[i] === newArr[j]) {
//         break
//       }
//     }
//     if(j === newArr.length){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
//2-------------------
// function unique(arr) {
//   for(let i =0;i<arr.length;i++) {
//     for(let j = i+1;j<arr.length;j++) {
//       if(arr[i] === arr[j]) {
//         arr.splice(j,1);
//         j--
//       }
//     }
//   }
//   return arr
// }
//3.--------------------------
// function unique(arr) {
//   let res = [];
//   for(let i =0;i<arr.length;i++){
//     if(res.indexOf(arr[i]) === -1) {
//       res.push(arr[i])
//     }
//   }
//   return res;
// }
//4.排序后去重
// function unique(arr) {
//   let res = [];
//   arr.sort((a,b) => a-b)
//   for(let i =0;i<arr.length;i++) {
//       if(arr[i] === arr[i+1]) {
//         arr.splice(i,1)
//         i--;
//       }
//   }
//   return arr
// }

//5.第二种排序去重 试想我们先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，
//然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res，让我们写个 demo：
function unique(arr) {
  let res = []
  arr.sort((a,b) => a-b);
  for(let i=0;i<arr.length;i++) {
    if(arr[i] !== arr[i+1]) {
      res.push(arr[i])
    }
  }
  return res;
}
console.log(unique(arr));