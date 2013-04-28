'use strict';

angular.module('malaysiaGeneralElectionApp')
  .filter('mainFilter', function () {
    return function (input) {
      return 'mainFilter filter: ' + input;
    };
  });
