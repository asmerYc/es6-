var arr = [1, 2, 3, 4];
const result = arr.reduce((acc, cur) => {
  return (acc += cur);
});
console.log(result);
var info = [
  {
    name: "张三",
    age: 12,
  },
  {
    name: "lisi",
    age: 16,
  },
  {
    name: "wangwu",
    age: 12,
  },
];
const ages = info.reduce((acc, cur) => {
  return (acc += cur.age);
}, 0);
console.log(ages);

//将二维数组转换为一纬数组
var erweiArr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const yiweiArr = erweiArr.reduce((acc, cur) => acc.concat(cur), []);
console.log(yiweiArr);

//计算数组中每个元素出现的次数
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const nameCount = names.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(nameCount);

var 
