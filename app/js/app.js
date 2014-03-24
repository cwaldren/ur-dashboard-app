angular.module('dashboardApp', ['ngRoute'])



.config(function($routeProvider) {
  $routeProvider
    .when('/wallet', {
      templateUrl: 'views/wallet.html', 
      controller: 'WalletCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/', {
      templateUrl: 'views/firstTime.html',
      controller: 'FirstTimeCtrl'
    })
    .otherwise({redirectTo: '/'});
})


