angular.module('pokedex.move',
[]
)

.controller('MoveCtrl', ['$rootScope', '$scope', '$routeParams', 'searchService', function($rootScope, $scope, $routeParams, searchService) {

  var moveRequest = searchService.getResource($routeParams.resource);
  moveRequest.success(function(move){
    $scope.move = move;
  });

}]);
