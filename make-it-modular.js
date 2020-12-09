var filterExt = require('./mymodule.js')
var folder = process.argv[2]
var ext = process.argv[3]

filterExt(folder, ext,  (err, list) =>  {
    
    if (err)
      return console.error('There is an error:', err)
  
    list.forEach( file => console.log(file))
    
  })