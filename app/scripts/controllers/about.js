'use strict';

/**
 * @ngdoc function
 * @name angularTriforceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTriforceApp
 */
angular.module('angularTriforceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
