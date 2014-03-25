angular.module('dashboardApp', ['ngRoute'])


/* ROUTES */
.config(function($routeProvider) {
  $routeProvider
    .when('/wallet', {
      templateUrl: 'views/wallet.html', 
      controller: 'WalletCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/', {
      templateUrl: 'views/firstTime.html',
      controller: 'FirstTimeCtrl'
    })
    .otherwise({redirectTo: '/'});
})


/* CONSTANTS */
.constant('blackboardURLs', {
  login:         "https://my.rochester.edu/webapps/login/index",
  studentAccess: "https://my.rochester.edu/webapps/portal/frameset.jsp?tab_tab_group_id=_46_1"
})

.constant('sequoiaURLs', {
  token:   "https://my.rochester.edu/webapps/bb-ecard-sso-bb_bb60/token.jsp",
  auth:    "https://ecard.sequoiars.com/eCardServices/AuthenticationHandler.ashx",
  balance: "https://ecard.sequoiars.com/eCardServices/eCardServices.svc/WebHttp/GetAccountHolderInformationForCurrentUser",
  user:    "https://ecard.sequoiars.com/eCardServices/eCardServices.svc/WebHttp/GetStudentForCurrentUser"
})


/* JSON ==> URLENCODED [bb compatibility] */
.config(function($httpProvider) {


   // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.withCredentials = true;

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data)
  {
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */ 
    var param = function(obj)
    {
      var query = '';
      var name, value, fullSubName, subName, subValue, innerObj, i;
      
      for(name in obj)
      {
        value = obj[name];
        
        if(value instanceof Array)
        {
          for(i=0; i<value.length; ++i)
          {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object)
        {
          for(subName in value)
          {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
        {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
      
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];

});


