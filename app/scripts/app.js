'use strict';

angular.module('malaysiaGeneralElectionApp', ["google-maps"])
        .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    }).when('/details/:constituency_code', {
      templateUrl: 'views/details.html',
      controller: 'DetailCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }]);
