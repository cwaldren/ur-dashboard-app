angular.module('dashboardApp')

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
 
});