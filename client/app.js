var app = angular.module('app',['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/partials/logReg.html'
  })
  .when('/dashboard',{
    templateUrl: '/partials/dashboard.html'
  })
  .when('/newpolls',{
    templateUrl: '/partials/polls.html'
  })
  .when('/viewpoll/:id', {
    templateUrl: '/partials/viewpoll.html'
  })
  .otherwise({
    redirectTo: '/'
  })

})
