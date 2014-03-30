angular.module('dashboardApp')

.controller('WalletCtrl', function($scope, dashStorage, sequoia, blackboard) {
    
    $scope.funds = dashStorage.getFunds();
    var creds = dashStorage.getBlackboardCreds();


    blackboard.login(creds)
    .then(function() {

        sequoia.fetchFunds()
        .then(function(funds) {
            $scope.funds = funds;
            dashStorage.setFunds(funds);
        }, function(error) {
            console.log(error);
        })
    }, function(error) {
        console.log(error);
    })
   
})
