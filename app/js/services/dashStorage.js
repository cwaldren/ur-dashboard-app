angular.module('dashboardApp')

.factory('dashStorage', function() {

    return {
        get: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },

        put: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },

        getBlackboardCreds: function() {
            return JSON.parse(localStorage.getItem('blackboardCredentials')) || '[]';
        },

        setBlackboardCreds: function(creds) {
            localStorage.setItem('blackboardCredentials', JSON.stringify(creds));
        },

        getUserPrefs: function() {
            return JSON.parse(localStorage.getItem('userPreferences')) || '{}';
        },

        setUserPref: function(pref, val) {
            var prefs = JSON.parse(localStorage.getItem('userPreferences')) || {};
            prefs[pref] = val;
            localStorage.setItem('userPreferences', JSON.stringify(prefs));

        } 




    }
})
