app.factory('pollsFactory', function ($http,$location,$route) {
  factory={}
  factory.getAll = function (callback) {
    $http.get('/polls/getall').then(function (output) {
      callback(output.data)
    })
  },
  factory.create = function (poll) {
    // console.log('in factory');
    $http.post('/createpoll',poll).then(function (output) {
      if(output.data){
        $location.url('/dashboard')
      }
    })
  }
  factory.delete = function (id, callback) {
    return $http.delete(`/delete/${id}`).then(function (output) {
        callback(output.data);
      })
  }
  factory.show = function (id,callback) {
    $http.get(`/show/${id}`).then(function (output) {
      callback(output.data)
      console.log(output.data);
    });
  }
  factory.vote = function (pollId, index, callback) {
    $http.get('/viewpoll/' + pollId + '/vote/'+ index).then(callback);
  }

  return factory
})
