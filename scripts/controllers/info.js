angular.module('testAppJsonApp')
  .controller('MainCtrl', function($scope) {
    $scope.description = "Welcome to event app";

    window.setTimeout(function () {
      document.getElementById('hello').textContent = 'Boom!';
    }, 1000);
});
