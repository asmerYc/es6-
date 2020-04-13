let s = 'loveleetcode';
let c = 'e';
function shorttestTochar(s,c){
  let sArr = [...s];
  let count = [];
  let sort = [];
  sArr.forEach((item,index) => {
    if(item === c) {
      count.push(index)
    }
    
  })
  for(let i =0;i<sArr.length;i++){
    let arr = count.map(item => Math.abs(item -i));
    sort.push(Math.min(...arr))
  }
  console.log(sort)
}
shorttestTochar(s,c)