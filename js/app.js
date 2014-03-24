angular.module('dashboardApp', ['ngRoute'])



.config(function($routeProvider) {
  $routeProvider
    .when('/wallet', {
      templateUrl: 'views/wallet.html', 
      controller: 'WalletController'
    })
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .otherwise({redirectTo: '/'});
})


