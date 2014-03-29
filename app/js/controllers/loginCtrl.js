angular.module('dashboardApp')

.controller("LoginCtrl", function($scope, $location, dashStorage, blackboard) {
   
    $scope.autoLogin = dashStorage.getUserPrefs().autoLogin;
   

    $scope.userCreds  = dashStorage.getBlackboardCreds();
    
    $scope.netID = $scope.userCreds.netID;
    
    $scope.loginStatus = {
        attemptingLogin: false,
        error: false
    }
    
   

    $scope.updateAutoLogin = function() {
        dashStorage.setUserPref('autoLogin', $scope.autoLogin);
    }
    
    $scope.login = function() {

        if (!$scope.loginForm.$valid) return;

        $scope.loginStatus.attemptingLogin = true;
    
        var creds = {
            netID: $scope.netID,
            password: $scope.password
        }

        blackboard.login(creds)
        .then(function(result) {
            //if they don't want autologin, let's not store their password
            if (!$scope.autoLogin) creds.password = null;
            dashStorage.setBlackboardCreds(creds);
            $location.path("/wallet");

        }, function(error) {
            $scope.loginStatus.error = error.msg;
        })

        .finally(function() {
            $scope.loginStatus.attemptingLogin = false;
        })

    }
})