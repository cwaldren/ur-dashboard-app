angular.module('dashboardApp')

.controller("LoginCtrl", function($scope, $location, dashStorage, blackboard) {
   
    $scope.autoLogin = dashStorage.getUserPrefs().autoLogin;
   
    $scope.userCreds  = dashStorage.getBlackboardCreds();
    $scope.loginStatus = {
        attemptingLogin: false,
        error: false
    }
    
    //If the user has chosen to autologin, send them to the wallet
    //if ($scope.autoLogin) $location.path('/wallet');
    
    //Else, lets see if they have a valid saved netID
    $scope.netID = $scope.userCreds.netID;

    $scope.updateAutoLogin = function() {
        dashStorage.setUserPref('autoLogin', $scope.autoLogin);
    }
    
    $scope.login = function() {
        if (!$scope.loginForm.$valid) return;

        var promise = blackboard.login({
            netID: $scope.netID, 
            password: $scope.password
        });


        $scope.loginStatus.attemptingLogin = true;

        promise.then(function(result) {
            if (result.error) {
                $scope.loginStatus.error = "Invalid Blackboard credentials.";
            } else {
                var creds = {
                    netID: $scope.netID,
                    password: $scope.autoLogin ? $scope.password : null
                }
                dashStorage.setBlackboardCreds(creds);
            }
        }, function(error) {
             $scope.loginStatus.error = error.error; 
        })

        promise['finally'](function() {
             $scope.loginStatus.attemptingLogin = false;
        })

       

    }
})