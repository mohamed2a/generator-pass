(function(angular) {
'use strict';

  angular.module('app.home', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: '/app/modules/home/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });
  });
})(angular);