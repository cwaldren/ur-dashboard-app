angular.module('dashboardApp', ['ngRoute'])

.controller('WalletController', function($scope) {

})

.controller("LoginController", function($scope, $location, dashStorage) {
    $scope.isStudent = dashStorage.get('isStudent');
    $scope.rememberMe = (dashStorage.get('rememberMe') === 'yes');

    $scope.proceedToLogin = function() {
      dashStorage.put('isStudent', 'yes');
      $scope.isStudent = true;
    }

    $scope.uninstall = function() {
      chrome.management.uninstallSelf();
    }


   $scope.updateRememberMe = function() {
      $scope.rememberMe = !$scope.rememberMe;
      if ($scope.rememberMe) {
        dashStorage.put('rememberMe', 'yes');
      } else {
        dashStorage.put('rememberMe', 'no');
      }


   }
 
})

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

.factory('dashStorage', function() {

    return {
        get: function(key) {
            var item = localStorage.getItem(key);
            return item ? window.atob(item) : false;
        },

        put: function(key, value) {
            localStorage.setItem(key, window.btoa(value));
        }
    }
})

