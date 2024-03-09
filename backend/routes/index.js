const express = require('express')
const router = express.Router()
const fs = require('fs')

fs.readdirSync(__dirname).forEach(function(file) {
    if(file === 'index.js') return 
    var name = file.substring(0, file.indexOf('.'));
    router.use('/' + name, require('./' + name));

})

module.exports = router;