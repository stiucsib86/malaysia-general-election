'use strict';

describe('Directive: mainDirective', function () {
  beforeEach(module('malaysiaGeneralElectionApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<main-directive></main-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mainDirective directive');
  }));
});
