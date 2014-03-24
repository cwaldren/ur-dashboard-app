 angular.module('dashboardApp')

.controller("FirstTimeCtrl", function($scope, $location, dashStorage) {
   
    $scope.isStudent = dashStorage.get('isStudent');

    //If the person is a student, we want 
    if ($scope.isStudent) {
        $location.path("/login");
    }

    $scope.proceedToLogin = function() {
        dashStorage.put('isStudent', true);
        $location.path("/login");
    }

    $scope.uninstall = function() {
        chrome.management.uninstallSelf();
    }

});