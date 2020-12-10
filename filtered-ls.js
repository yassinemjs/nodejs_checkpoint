const fs = require('fs')
const path=require('path')

var folder = process.argv[2];
var extension = '.' + process.argv[3]

fs.readdir(folder,  (err, files) => {
    if (err)  console.log(err)
    else {
    files.forEach( file => {
        if (path.extname(file) === extension) {
            console.log(file) }
    })
}})
