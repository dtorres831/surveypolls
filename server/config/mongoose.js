var mongoose = require('mongoose')
var path = require('path')
var fs = require('fs')
var model_path = path.join(__dirname  + './../models')
mongoose.connect('mongodb://localhost/meanfirst')
fs.readdirSync(model_path).forEach(function (file) {
  if(file.indexOf('.js')>=0){
    require(model_path + '/' + file)
  }
})
