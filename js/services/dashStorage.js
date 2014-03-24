angular.module('dashboardApp')

.factory('dashStorage', function() {

    return {
        get: function(key) {
             var item = JSON.parse(localStorage.getItem(key));
             return (item == null ? false : window.atob(item));
        },

        put: function(key, value) {
            localStorage.setItem(key, JSON.stringify(window.btoa(value)));
        }

    }
})
