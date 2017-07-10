var  mongoose = require('mongoose');
var Schema = mongoose.Schema
// var ObjectId = Schema.ObjectId;

var UserSchema = new Schema ({
   name: {type:String, require:true, minlength: 3},
   polls:[{type:mongoose.Schema.Types.ObjectId, ref:'Polls'}]
});
// var PollsSchema = new Schema({
//   question: String,
//   _name:{ type: ObjectId, ref: 'User' },
//   one: String,
//   two: String,
//   three: String,
//   four: String,
//   date: { type: Date, default: Date.now() },
//   votes: Number,
// })
//
// mongoose.model('Polls', PollsSchema )

mongoose.model('User', UserSchema)
