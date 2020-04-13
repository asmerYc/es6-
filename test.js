//乞丐版深拷贝
// JSON.parse(JSON.stringify())

//基础版
// function clone (target){
//   let cloneTarget = {};
//   for(const key in target) {
//     cloneTarget[key] = target[key]
//   }
//   console.log(cloneTarget);
//   return cloneTarget
// }
//如果是深拷贝的话，考虑到我们要拷贝的对象是不知道有多少层深度的，我们可以用递归来解决问题，稍微改写上面的代码：
//如果是原始类型，无需继续拷贝，直接返回
//如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
//很容易理解，如果有更深层次的对象可以继续递归直到属性为原始类型，这样我们就完成了一个最简单的深拷贝：
// function clone(target){
//   if(typeof target === 'object') {
//     let cloneTarget = {};
//     for(const key in target){
//       cloneTarget[key] = clone(target[key]);
//     }
//     console.log(cloneTarget)
//     return cloneTarget
//   } else {
//     return target;
//   }
// }
// const target = {
//   test1:1,
//   test2:2,
//   test3:"TEST3",
//   test4:{
//     child1:"child1",
//     child2:{
//       child3:"child3",
//       child4:{
//         child5:"child5"
//       }
//     }
//   }
// }

//兼容数组
function clone(target) {
  if(typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for(const key in target){
      cloneTarget[key] = clone(target[key]);
    }
    console.log(cloneTarget)
    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};

//解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，
//当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，
//如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。

function clone(target,map=new Map()){
  if(typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if(map.get(target)) {

    }
  }
}

clone(target);
