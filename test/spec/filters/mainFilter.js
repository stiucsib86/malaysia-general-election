'use strict';

describe('Filter: mainFilter', function () {

  // load the filter's module
  beforeEach(module('malaysiaGeneralElectionApp'));

  // initialize a new instance of the filter before each test
  var mainFilter;
  beforeEach(inject(function ($filter) {
    mainFilter = $filter('mainFilter');
  }));

  it('should return the input prefixed with "mainFilter filter:"', function () {
    var text = 'angularjs';
    expect(mainFilter(text)).toBe('mainFilter filter: ' + text);
  });

});
