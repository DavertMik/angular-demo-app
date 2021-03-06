'use strict';

/**
 * @ngdoc directive
 * @name testAppJsonApp.directive:form
 * @description
 * # form
 */
angular.module('testAppJsonApp')
  .directive('customForm', function ($rootScope) {
    return {
      templateUrl: 'views/form.html',
      restrict: 'E',
      controller: 'FormCtrl',
      controllerAs: 'vm'
    };
  });
