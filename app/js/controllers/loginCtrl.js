angular.module('dashboardApp')

.controller("LoginCtrl", function($scope, $location, dashStorage) {
   
    $scope.rememberMe = dashStorage.get('rememberMe');
    $scope.attemptingLogin = false;

    $scope.updateRememberMe = function() {
        dashStorage.put('rememberMe', $scope.rememberMe);
    }
    
    $scope.login = function() {
        if (!$scope.loginForm.$valid) return;
        $scope.attemptingLogin = true;
    }
});