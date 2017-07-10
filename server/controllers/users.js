var mongoose = require('mongoose')
var User = mongoose.model('User')
// var Poll = mongoose.model('Polls')
module.exports = (function () {
  return{
    login:function (req,res) {
        User.findOne({name:req.body.name}, function (err, data) {
        if(!data){
          var user = new User(req.body)
          user.save(function (err, data) {
            req.session.user = data
            req.session.save()
            res.json(data)
          })
        }else{
          req.session.user = data
          req.session.save()
          res.json(data)
        }
      })
    },
    checkStatus: function (req, res) {
      if(req.session.user){
        res.json(req.session.user)
      }else{
        res.json(null)
      }

    },
    logout: function (req, res) {
      req.session.destroy();
      res.redirect('/')
    },
    // create: function (req, res) {
    //     var poll = new Poll(req.body)
    //     poll.save(function (err,data) {
    //       if(err){
    //         console.log(err);
    //       }else{
    //         res.json(data)
    //       }
    //     })
    // },
    // getAll: function (req, res) {
    //   Poll.find({}, function (err,data) {
    //     res.json(data)
    //   })
    // },
  }
})()
