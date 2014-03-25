'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('UR Dashboard App', function() {

  browser.get('tab.html');

  it('should be at /first-time automatically', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/first-time");
  });


  describe('first time view', function() {

    beforeEach(function() {
      browser.get('tab.html#/first-time');
    });


    it('should render first-time view when user navigates to /first-time', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Are you a student at the University of Rochester?/);
    });

  });



});
