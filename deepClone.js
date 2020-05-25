//
function checkType(item) {
  return Object.prototype.toString.call(item).slice(8,-1)
}

function deepClone(target) {
  let type = checkType(target)
  let result;
  if (type === 'Array') {
    result = []
  }  else if( type === 'Object') {
    result = {}
  } else {
    return target
  }


  //遍历目标数据
  for(let i in target) {
    let value = target[i];
    if(checkType(value) === 'Object' || checkType(value) === 'Array') {
      result[i] = deepClone(value)
    } else {
      result[i] = target[i]
    }
  }
  return result
}
// 不知道为啥不行呢  打个断点

// var item = [1,2,[,3,4,[,5,6]]]
var item = {name:11,age:13}
console.log(deepClone(item))