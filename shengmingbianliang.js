function fn() {
  console.log(this);
}
var obj = {fn:fn}
obj.fn();