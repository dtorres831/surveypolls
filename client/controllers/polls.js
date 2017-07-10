  app.controller('pollsController', function ($scope,pollsFactory,$routeParams) {

  // pollsFactory.getAll(function (data) {
  //   $scope.polls = data
  // })
  if($routeParams.id){
    pollsFactory.getAll(function (data) {
      $scope.polls = data
      for(poll in $scope.polls){
        if($scope.polls[poll]['_id']=== $routeParams.id){
          $scope.cur_poll = $scope.polls[poll]
          // console.log($scope.cur_poll);
        }
      }
    })
  }else{
    pollsFactory.getAll(function (data) {
      $scope.polls = data
    })
  }
  $scope.create = function () {
    pollsFactory.create($scope.newPoll);
  }
  $scope.delete = function (id) {
    pollsFactory.delete(id,function () {
      pollsFactory.getAll(function (data) {
        $scope.polls = data
      })
    })
  }
  $scope.show = function (id) {
    pollsFactory.show(id, function (data) {
      $scope.cur_poll = data
    })
  }
  $scope.vote = function (index) {
    pollsFactory.vote($routeParams.id,index, function () {
      $scope.show($routeParams.id)
    })
  }
})
