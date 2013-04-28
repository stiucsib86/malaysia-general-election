'use strict';

angular.module('malaysiaGeneralElectionApp')
  .directive('mainDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the mainDirective directive');
      }
    };
  });
