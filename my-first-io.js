const fs = require('fs')
var data = fs.readFileSync(process.argv[2])  ;
var n =data.toString().split('\n').length -1 ;
console.log(n)