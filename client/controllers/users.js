app.controller('userController', function ($scope, userFactory) {

  userFactory.checkStatus(function (data) {
    $scope.curUser = data;
  })

   $scope.login = function () {
    userFactory.login($scope.user)
  }
})
