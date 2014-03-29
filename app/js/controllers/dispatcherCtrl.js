angular.module('dashboardApp')

.controller('DispatcherCtrl', function($scope, $location, dashStorage) {

    var autoLogin = dashStorage.getUserPrefs().autoLogin;
    var isStudent = dashStorage.get("isStudent");
   
    if (autoLogin) {
        $location.path("/wallet");
        //need to figure out why this is needed
        $scope.$digest();
    }
    
    (isStudent) ? $location.path("/login") :
                  $location.path("/first-time");


});
    