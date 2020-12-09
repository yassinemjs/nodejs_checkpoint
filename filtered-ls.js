const fs = require('fs')
var path = process.argv[2];
var extension = '.' + process.argv[3]

fs.readdir(path,  (err, files) => {
    if (err)  console.log(err)
    else {
    files.forEach( file => {
        if (path.extname(file) === extension) {
            console.log(file) }
    })
}})
