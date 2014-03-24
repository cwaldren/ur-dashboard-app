angular.module('dashboardApp')

.factory('dashStorage', function() {

    return {
        get: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },

        put: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

    }
})
