module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/js/vendor/angular/angular.min.js',
      'app/js/vendor/angular/angular-*.min.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'app/js/*.js',
      'test/unit/**/*.js'
    ],



    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
