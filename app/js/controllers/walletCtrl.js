angular.module('dashboardApp')

.controller('WalletCtrl', function($scope, dashStorage, sequoia) {
    
    $scope.funds = dashStorage.getFunds();

    sequoia.fetchFunds()
    .then(function(funds) {
        $scope.funds = funds;
        dashStorage.setFunds(funds);
    }, function(error) {
        console.log(error);
    })
})
