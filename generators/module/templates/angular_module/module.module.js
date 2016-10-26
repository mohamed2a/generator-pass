(function(angular) {
'use strict';

  angular.module('app.<%= moduleName %>s', [])
  .config(function($stateProvider) {
    $stateProvider
    .state({
      name: 'app.<%= moduleName %>s',
      url: '/<%= moduleName %>s',
      abstract: true
    })
    .state({
      name: 'app.<%= moduleName %>s.list',
      url: '/',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.list.html',
      controller: '<%= moduleNameCap %>ListController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>s.create',
      url: '/create',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: new<%= moduleNameCap %>
      },
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>s.view',
      url: '/view/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.view.html',
      controller: '<%= moduleNameCap %>ViewController',
      controllerAs: 'vm'
    })
    .state({
      name: 'app.<%= moduleName %>s.update',
      url: '/update/{id}',
      templateUrl: '/app/modules/<%= moduleName %>/templates/<%= moduleName %>.update.html',
      controller: '<%= moduleNameCap %>UpdateController',
      resolve: {
        <%= moduleName %>Resolve: get<%= moduleNameCap %>
      },
      controllerAs: 'vm'
    });
  });

  new<%= moduleNameCap %>.$inject = ['<%= moduleNameCap %>sService'];

  function new<%= moduleNameCap %>(<%= moduleNameCap %>sService) {
    return new <%= moduleNameCap %>sService();
  }

  get<%= moduleNameCap %>.$inject = ['$stateParams', '<%= moduleNameCap %>sService'];

  function get<%= moduleNameCap %>($stateParams, <%= moduleNameCap %>sService) {
    return <%= moduleNameCap %>sService.get({
      id: $stateParams.id
    }).$promise;
  }
})(angular);