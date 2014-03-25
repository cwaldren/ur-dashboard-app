angular.module('dashboardApp')

.factory('blackboard', function($http, $q, blackboardURLs) {
    return {
        login: function(user) {
            var promise = this.logout();
            var deferred = $q.defer();
            promise.then(function() {
                
                

                var postData = {
                    user_id: user.netID,
                    encoded_pw: window.btoa(user.password),
                    encoded_pw_unicode: ".",
                    login: "Login",
                    action: "login"
                }

                $http({
                    withCredentials:true,
                    url: blackboardURLs.login,
                    method: "POST",
                    data: postData,
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) {
                    var loggedIn = (response.indexOf('topframe.logout.label') !== -1);
                    deferred.resolve({error: !loggedIn});
                }).error(function() {
                    deferred.reject({error: 'Blackboard connection failure.'});
                });

            }, function(error) {
                deferred.reject({error: error.error})
            });

            
            return deferred.promise;
        },

        logout: function() {
            var deferred = $q.defer();
            $http.get("https://my.rochester.edu/webapps/login/?action=logout")
                  .success(function() {
                    deferred.resolve({error: null});
                }).error(function() {
                    deferred.reject({error: 'Blackboard connection failure.'})
                })

            return deferred.promise;
             
        }
    };
});