var user = require('./../controllers/users.js')
var poll = require('./../controllers/polls.js')
module.exports = function (app) {
  app.post('/login', function (req,res) {
    user.login(req,res)
  })
  app.get('/checkstatus', function (req,res) {
    user.checkStatus(req,res)
  })
  app.get('/logout', function (req,res) {
    user.logout(req,res)
  })
  app.post('/createpoll',function (req,res) {
    poll.create(req,res);
  })
  app.get('/polls/getall', function (req,res) {
    poll.getAll(req,res)
  })
  app.delete('/delete/:id', function (req,res) {
    poll.delete(req,res)
  })
  app.post('/vote', function (req,res) {
    poll.vote(req,res)
  })
  app.get('/show/:id', function (req,res) {
    poll.show(req,res)
  })
  app.get('/viewpoll/:pollId/vote/:index', function (req,res) {
    poll.vote(req,res);
  })
}
