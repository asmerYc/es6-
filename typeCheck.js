//类型检测函数

function _typeOf(item) {
  let map = {
    '[object String]':'string',
    '[object Number]':'Number',
    '[object Null]':'Null',
    '[object Undefined]':'Undefined',
    '[object Boolean]':'Boolean',
    '[object Function]':'Function',
    '[object RegExp]':'RegExp',
    '[object Date]':'Date',
    '[object Array]':'Array',
    '[object Object]':'Object',
    '[object Symbol]':'Symbol',
  }
  let type = Object.prototype.toString.call(item)
  return map[type]
}

let item = [2]

console.log(_typeOf(item))