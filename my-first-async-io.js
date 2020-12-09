var fs = require('fs')
var file = process.argv[2]
fs.readFile(file ,'utf8' ,(err,data) => { 
var n =data.toString.split('\n').length -1 
console.log(n) })