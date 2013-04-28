'use strict';

angular.module('malaysiaGeneralElectionApp').run(['$route', function($route) {
    $route.reload();
  }]);

function HomeCtrl($scope, $rootScope, $http) {

  $rootScope._breadcrumb = [{
      "name": "Home",
      "hash": "/"
    }
  ];

}

function DetailCtrl($scope, $rootScope, $routeParams, $http) {

  $rootScope.image_placeholder = {};
  $rootScope.image_placeholder.party = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFjklEQVR4Xu3Xx0skfRDG8TJnFEXEg4oJvIgZxYT/ujmsIgZEwXgUdRRzdqmGEfUg1rulOPV++za7ZfXUUx9+3ZOVSqVehIsEvphAFmC+mBRlSQKAAYIpAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAkAxhQXxYDBgCkBwJjiohgwGDAlABhTXBQDBgOmBABjiotiwGDAlABgTHFRDBgMmBIAjCkuigGDAVMCgDHFRTFgMGBKADCmuCgGDAZMCQDGFBfFgMGAKQHAmOKiGDAYMCUAGFNcFAMGA6YEAGOKi2LAYMCUAGBMcVEMGAyYEgCMKS6KAYMBUwKAMcVFMWAwYEoAMKa4KAYMBkwJAMYUF8WAwYApAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAlkPJi9vT05ODiQgYEBKSwsfDd8KpWSjY0NKS4ulq6uLsnKypKXlxdZX1+X4+Pj5HNTU5PU19d/ObSfvt+Xv9gPFWYsmLOzM1EQu7u7SVRDQ0NSVFT0GpvCGB8fl8fHR8nPz5fh4WHJzs6WlZUVOTo6kry8vOT/tK69vV1qamo+jfyn7/dD+zffJmPBTExMyP39/evACuLtCbO9vS37+/vJ/+u/K6inpyfRv1M4IyMjCTgFVFFRIW1tbbK6uio5OTnS3d0tl5eXsrm5KQUFBdLZ2SlTU1Ou9+vt7TUv6zf8QcaC0dNBHylzc3Nyc3OTnCBpMPp5eno6edScn5/L9fV1AuTh4SFZfG5ubvI5DUg/j46OytLSkpyenkplZaXc3t4mf9fa2ioNDQ3JaeR9v98AwPodMhZMelAFo6fBWzC6eIUyNjYmCwsLcnd393qiLC8vS1VVVfJOowj0xEk/svTEUlDPz89J+/Lycunr63uXqef9rMv6DfXhwOi7xuLiopSUlEhdXZ3s7OwkAFpaWqS6ujo5efQx8/YRlT5hdCH6Uqt/o1d/f7+UlZV9CuZf7/cbEFi+QzgwJycnoqfIx0vfW/SxoyeKAtETSU8mPYH0V9Tg4GDyiJqcnExOHr0UWEdHx6dg/uV+lkX9ltqMBzM7OytXV1evjyQ9TdIvw4rkz58/CQA9LfQdZ2ZmJnk3qa2tlYuLiwRNc3OzNDY2ytramhweHkppaWlSo70+/oLyvN9vQWD5HhkPRk8IfV/5+Cvp7TuOgtFHkL60Kq75+fl37yk9PT0JHsWlNfpCrHC2trZeX5D115NeXvdTzJl4ZTyY/xK6nhx6guilp8l3Xz99v++c538J5jsDjd4bMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd7uL9AOPbX2neNIAAAAAElFTkSuQmCC';
  $rootScope.image_placeholder.profile = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFjklEQVR4Xu3Xx0skfRDG8TJnFEXEg4oJvIgZxYT/ujmsIgZEwXgUdRRzdqmGEfUg1rulOPV++za7ZfXUUx9+3ZOVSqVehIsEvphAFmC+mBRlSQKAAYIpAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAkAxhQXxYDBgCkBwJjiohgwGDAlABhTXBQDBgOmBABjiotiwGDAlABgTHFRDBgMmBIAjCkuigGDAVMCgDHFRTFgMGBKADCmuCgGDAZMCQDGFBfFgMGAKQHAmOKiGDAYMCUAGFNcFAMGA6YEAGOKi2LAYMCUAGBMcVEMGAyYEgCMKS6KAYMBUwKAMcVFMWAwYEoAMKa4KAYMBkwJAMYUF8WAwYApAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAlkPJi9vT05ODiQgYEBKSwsfDd8KpWSjY0NKS4ulq6uLsnKypKXlxdZX1+X4+Pj5HNTU5PU19d/ObSfvt+Xv9gPFWYsmLOzM1EQu7u7SVRDQ0NSVFT0GpvCGB8fl8fHR8nPz5fh4WHJzs6WlZUVOTo6kry8vOT/tK69vV1qamo+jfyn7/dD+zffJmPBTExMyP39/evACuLtCbO9vS37+/vJ/+u/K6inpyfRv1M4IyMjCTgFVFFRIW1tbbK6uio5OTnS3d0tl5eXsrm5KQUFBdLZ2SlTU1Ou9+vt7TUv6zf8QcaC0dNBHylzc3Nyc3OTnCBpMPp5eno6edScn5/L9fV1AuTh4SFZfG5ubvI5DUg/j46OytLSkpyenkplZaXc3t4mf9fa2ioNDQ3JaeR9v98AwPodMhZMelAFo6fBWzC6eIUyNjYmCwsLcnd393qiLC8vS1VVVfJOowj0xEk/svTEUlDPz89J+/Lycunr63uXqef9rMv6DfXhwOi7xuLiopSUlEhdXZ3s7OwkAFpaWqS6ujo5efQx8/YRlT5hdCH6Uqt/o1d/f7+UlZV9CuZf7/cbEFi+QzgwJycnoqfIx0vfW/SxoyeKAtETSU8mPYH0V9Tg4GDyiJqcnExOHr0UWEdHx6dg/uV+lkX9ltqMBzM7OytXV1evjyQ9TdIvw4rkz58/CQA9LfQdZ2ZmJnk3qa2tlYuLiwRNc3OzNDY2ytramhweHkppaWlSo70+/oLyvN9vQWD5HhkPRk8IfV/5+Cvp7TuOgtFHkL60Kq75+fl37yk9PT0JHsWlNfpCrHC2trZeX5D115NeXvdTzJl4ZTyY/xK6nhx6guilp8l3Xz99v++c538J5jsDjd4bMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd7uL9AOPbX2neNIAAAAAElFTkSuQmCC';

  $rootScope._breadcrumb = [{
      "name": "Home",
      "hash": "/"
    }, {
      "name": "Constituency",
      "hash": "/"
    }
  ];

  $scope.GetConstituencyDetails = function(constituency_code) {
    if (!isNaN(constituency_code)) {
      $http({
        method: 'GET',
        url: 'data/GE2013/parliamentary/constituencies/' + constituency_code + '.json'
      }).success(function(data, status, headers, config) {
        $scope.constituency = data;
      }).error(function(data, status, headers, config) {
        console.warn('Error loading Parliamentary Constituencies');
      });
    }
  };

  (function() {
    if ($routeParams.constituency_code) {
      $scope.GetConstituencyDetails($routeParams.constituency_code);
      $rootScope.SetActiveMarker($routeParams.constituency_code);
    }
  })();

}
  