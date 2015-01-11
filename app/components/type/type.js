angular.module('pokedex.type',
[]
)

.controller('TypeCtrl', ['$rootScope', '$scope', '$routeParams', 'searchService', function($rootScope, $scope, $routeParams, searchService) {

  var typeRequest = searchService.getResource($routeParams.resource);
  typeRequest.success(function(type){
    console.log(type);
    $scope.type = type;
  });

}]);
