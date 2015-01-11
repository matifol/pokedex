// Declare app level module which depends on views, and components
angular.module('pokedex', [
  'ngRoute',
  'pokedex.home',
  'pokedex.homeService',
  'pokedex.pokemon',
  'pokedex.type',
  'pokedex.move'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'app/components/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/pokemon', {
    templateUrl: 'app/components/pokemon/pokemon.html',
    controller: 'PokemonCtrl'
  })
  .when('/type', {
    templateUrl: 'app/components/type/type.html',
    controller: 'TypeCtrl'
  })
  .when('/move', {
    templateUrl: 'app/components/move/move.html',
    controller: 'MoveCtrl'
  })
  .otherwise({redirectTo: '/home'});
}])


.run(function($rootScope) {
  $rootScope.api = "http://pokeapi.co/api/v1/";
  $rootScope.apiUri = "http://pokeapi.co/";
});
