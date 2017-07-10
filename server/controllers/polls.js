var mongoose = require('mongoose')
// var User = mongoose.model('User')
var Poll = mongoose.model('Polls')
module.exports = (function () {
  return{
    create: function (req, res) {
      // console.log(req.body);
      var poll = new Poll({question:req.body.question, _author:req.session.user})
      poll.option.push({text:req.body.one})
      poll.option.push({text:req.body.two})
      poll.option.push({text:req.body.three})
      poll.option.push({text:req.body.four})
      poll.save(function (err,data) {
        if(err){
          console.log(err);
        }else{
          res.json(data)
        }
      })
    },
    delete: function (req,res) {
      Poll.remove({_id:req.params.id}, function (err,data) {
        if(err){
          res.json(err)
          console.log(err);
        }else{
          console.log('whats up');
          res.json(data)
        }
      })
    },
    getAll: function (req, res) {
      Poll.find({},function (err,data) {
        res.json(data)
      })
      .populate('_author')
      .exec(function(err,data){})
    //   Poll.find({},function(err,data){
    //     if (err){
    //       res.json(false);
    //     }
    //     else {
    //       res.json(data);
    //     }
    //   });
    //   .populate('_author')
    //   .exec(function(err, question){})
    // },
  //   Poll.find({})
  //     .populate('_author')
  //     .exec(function(err, data){
  //       if (err){
  //         res.json(false);
  //       }else {
  //         res.json(data);
  //     }
  // });
  },
  show: function (req, res) {
    Poll.findOne({_id:req.params.id},function (err,polls) {
      if(err){
        console.log(err);
      }
      res.json(polls)
    })


  },
  vote: function (req,res) {
    // console.log(req.params);
    Poll.findOne({_id:req.params.pollId}, function (err,polls) {
      if(err){
        console.log(err);
      }
      // console.log(req.params.index);
      // console.log(polls);
      polls.option[req.params.index].votes++
      polls.save(function (err) {

        if (err) {
          console.log(err);
        }
        res.json({status:'ok'})
      })
    })
  },
  }
})()
