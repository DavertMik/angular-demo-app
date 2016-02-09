var model = {};
angular.module('testAppJsonApp').factory('formResult', function(){
  return {
    resultSave: function(modelsDate){
      model = angular.copy(modelsDate);
    },
    load: function(){
      return model;
    }
  }
});
