[1, 5, 10, 15].find(function(value, index, arr) {
  // return value > 9;
  if(value > 9) {
    console.log(index)
    console.log(arr)
  }
}) // 10