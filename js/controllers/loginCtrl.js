angular.module('dashboardApp')

.controller("LoginCtrl", function($scope, $location, dashStorage) {
   
    $scope.rememberMe = dashStorage.get('rememberMe');


    $scope.updateRememberMe = function() {
        dashStorage.put('rememberMe', $scope.rememberMe);
    }
 
});