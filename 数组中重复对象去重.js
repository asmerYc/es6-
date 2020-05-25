var person = [
  {
    name:"张三",
    age:12,
    id:123
  },
  {
    name:"张三",
    age:13,
    id:123
  },
  {
    name:"李四",
    age:12,
    id:124
  }, 
  {
    name:"王五",
    age:12,
    id:125
  },
  {
    name:"李四",
    age:12,
    id:124
  }

]

function unique(arr) {
  for(let i =0;i<arr.length;i++) {
    for(let j = i+1; j<arr.length;j++) {
      if (arr[i].id == arr[j].id) {
        arr.splice(j,1);
        j--;
      }
    }

  }
  return arr
}
console.log(unique(person))