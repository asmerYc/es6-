// async function async() {
//   setTimeout(function(){
//     return 'Hello'
//   },50)
// }
// async function string() {
//   let name = "world";
//   let qian =  await async()
//   console.log(`${qian}${name}`)
// }
// string()

let num1 = 2
async function yibu() {
  return 3
}
async function add(num1) {
  const Num = await yibu()
  console.log(Num + num1)
}
add(num1)