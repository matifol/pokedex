angular.module('pokedex.homeService', []).service('searchService', ['$http', '$rootScope', function($http, $rootScope){

  this.getAllPokemon = function(){
    return $http.get($rootScope.api + 'pokedex/1');
  };

  this.getResource = function(resource){
    return $http.get($rootScope.apiUri + resource);
  };
}]);
