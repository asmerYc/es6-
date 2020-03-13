function push(array,...items){
  items.forEach(item => {
    array.push(item);
    console.log(item)
  })
}
var a = [1,3,5];
push(a,2,4,6);
console.log(a);