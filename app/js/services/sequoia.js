angular.module('dashboardApp')

.factory('sequoia', function($http, $q, sequoiaURLs) {

    function parseToken(data) {
        var query = 'AUTHENTICATIONTOKEN" value="';
        var beginIndex = data.indexOf(query) + query.length;
        data           = data.slice(beginIndex);
        var endIndex   = data.indexOf('"');
        var token      = data.substring(0, endIndex);
        return token;
    }

    function parseFunds(data) {
        var json = angular.fromJson(data);
        return {
            uros:      json.d._ItemList[0].BalanceInDollarsStr.replace(/\s+/g, ''),
            declining: json.d._ItemList[1].BalanceInDollarsStr.replace(/\s+/g, '')
        }
    }

    return {

        authenticate: function() {

            var deferred = $q.defer();

            $http.get(sequoiaURLs.token)
            .success(function(data) {

                var token = parseToken(data);

                $http.post(sequoiaURLs.auth, {
                    AUTHENTICATIONTOKEN: token
                })

                .success(function() {
                    deferred.resolve();
                })

                .error(function() {
                    deferred.reject({msg: "Couldn't post sequoia auth token."})
                })

            })

            .error(function() {
                deferred.reject({msg: "Couldn't make a connection to sequoia."})
            })

            return deferred.promise;
        },

        fetchFunds: function() {

            var deferred = $q.defer();
            this.authenticate()
            .then(function() {
                
                $http.post(sequoiaURLs.balance, {})
            
                .success(function(data) {
                    var funds = parseFunds(data);
                    deferred.resolve(funds);
                })

                .error(function() {
                    deferred.reject({msg: "Couldn't fetch funds."})
                })

            }, function(error) {
                deferred.reject(error);
            })
          
            return deferred.promise;
        }
    };
});