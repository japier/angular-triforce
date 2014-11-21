'use strict';

/**
 * @ngdoc function
 * @name angularTriforceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTriforceApp
 */
angular.module('angularTriforceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
