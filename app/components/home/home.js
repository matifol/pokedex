angular.module('pokedex.home',
[]
)

.controller('HomeCtrl', ['$rootScope', '$scope', 'searchService', function($rootScope, $scope, searchService) {


  var pokedex = searchService.getAllPokemon();
  pokedex.success(function(data){
    $scope.pokemon = data.pokemon
  });


}]);
