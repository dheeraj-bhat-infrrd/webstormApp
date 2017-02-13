'use strict';

// Declare app level module which depends on views, and components
angular.module('webstormApp', [
    'ui.router',
    'webstormApp.home'
]).
config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home',{
        url:'/home',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    });
}]);
