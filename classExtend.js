//常见的几种继承方式

//父类型 
function Person (name,age) {
  this.name = name;
  this.age = age;
  this.play = [1,2,3];
  this.setName = function() {}
}

Person.prototype.setAge = function(){}

//子类型

function Student(price) {
  this.price = price;
  this.setCore = function () {  }
}
Student.prototype = new Person()
var s1 = new Student()
console.log(s1)