describe('Controller: FirstTimeCtrl', function () {
  var controllerFactory, scope, mockApi, location;
 
  function createController() {
    return controllerFactory('FirstTimeCtrl', {
      $scope: scope,
      api: mockApi
    });
  }
 

  beforeEach(module('dashboardApp'));
 

  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    location = $injector.get('$location');
    
    controllerFactory = $controller;
  }));
 

  beforeEach(function() {
   
  });
 

  it('should be at should redirect to /login if isStudent is truthy', function() {
    createController();
    location.path('/first-time')
    scope.isStudent = true;
    scope.$apply();
    expect(location.path()).toBe('/login');
  });
});