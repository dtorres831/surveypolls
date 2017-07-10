var  mongoose = require('mongoose');
var Schema = mongoose.Schema
// var ObjectId = Schema.ObjectId;
var User = require('../models/users.js');
var Options = new Schema({
  text : String,
  votes : {type: Number, default: 0}
})

var PollsSchema = new Schema({
  question: String,
  _author:{type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  option:[Options],
  date: { type: Date, default: Date.now() },

})

mongoose.model('Polls', PollsSchema )
