var fs = require('fs')
var path = require('path')

module.exports = (folder,ext ,callback) => {

fs.readdir(folder, (err,list) => {
  if(err) return callback(err)
  list = list.filter (file => path.extname(file) === '.' +ext)
  callback(null, list)
})
}

