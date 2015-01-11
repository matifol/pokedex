angular.module('pokedex.pokemon',
[]
)

.controller('PokemonCtrl', ['$rootScope', '$scope', '$routeParams', 'searchService', function($rootScope, $scope, $routeParams, searchService) {

  var pokemonRequest = searchService.getResource($routeParams.resource);
  pokemonRequest.success(function(pokemon){
    console.log(pokemon);
    $scope.pokemon = pokemon;
    $scope.sprites = [];
    $scope.types = [];

    for(i in pokemon.sprites){
      var spriteRequest = searchService.getResource(pokemon.sprites[i].resource_uri);
      spriteRequest.success(function(sprite){
        $scope.sprites.push(sprite.image);
      });
    }

    var descriptionRequest = searchService.getResource(pokemon.descriptions[0].resource_uri);
    descriptionRequest.success(function(description){
      $scope.description = description;
    });


  });

}]);
