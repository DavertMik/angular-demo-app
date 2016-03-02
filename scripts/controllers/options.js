angular.module('testAppJsonApp')
  .controller('OptionsCtrl', function($scope, $location) {
    $scope.ssh = "PUBLIC-SSH-KEY"
    $scope.subscribe = true;
});
