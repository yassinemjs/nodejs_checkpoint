
let arr = process.argv.slice(2).map(Number)
let res=arr.filter(x => x).reduce((x,y) => x+y)
console.log(res) 