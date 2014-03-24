angular.module('dashboardApp')

.directive('loader', function () {
    return {
        restrict: 'AC',
    
        scope: {
            loaderColor: '@'
        },
        template: '<style type="text/css">.windows8 .wBall .wInnerBall { background:{{loaderColor}};}</style>' +
                    '<div class="windows8">'+
                    '<div class="wBall" id="wBall_1">'+
                    '<div class="wInnerBall">'+
                    '</div>'+
                    '</div>'+
                    '<div class="wBall" id="wBall_2">'+
                    '<div class="wInnerBall">'+
                    '</div>'+
                    '</div>'+
                    '<div class="wBall" id="wBall_3">'+
                    '<div class="wInnerBall">'+
                    '</div>'+
                    '</div>'+
                    '<div class="wBall" id="wBall_4">'+
                    '<div class="wInnerBall">'+
                    '</div>'+
                    '</div>'+
                    '<div class="wBall" id="wBall_5">'+
                    '<div class="wInnerBall">'+
                    '</div>'+
                    '</div>'+
                    '</div>'
        }
});