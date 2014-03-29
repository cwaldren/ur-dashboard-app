angular.module('dashboardApp')

.factory('blackboard', function($http, $q, blackboardURLs) {
    return {
        login: function(user) {
          
            var deferred = $q.defer();

            //Logout first, so that we know their credentials are actually working

            this.logout()

            .then(function() {
                
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
                })

                .success(function(response) {

                    //Check if the logout button is there
                    var loggedIn = (response.indexOf('topframe.logout.label') !== -1);
                    
                    (loggedIn) ? deferred.resolve() : 
                                 deferred.reject({msg: 'Invalid Blackboard credentials.'});

                })

                .error(function() {
                    deferred.reject({msg: 'Blackboard connection failure.'});
                });

            }, function(error) {
                deferred.reject({msg: error.msg})
            });

            return deferred.promise;
        },

        logout: function() {

            var deferred = $q.defer();

            $http.get("https://my.rochester.edu/webapps/login/?action=logout")

            .success(function() {
                deferred.resolve();
            })
            
            .error(function() {
                deferred.reject({msg: 'Blackboard connection failure.'})
            })

            return deferred.promise;
        }
    };
});