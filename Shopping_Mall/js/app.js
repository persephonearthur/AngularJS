var routerApp = angular.module('routerApp', ['ui.router', 'pageModule']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        })
        .state('page', {
            url: '/page',
            views: {
                '': {
                    templateUrl: 'tpls/page.html'
                },
                'type@page': {
                    templateUrl: 'tpls/type.html'
                },
                'item@page': {
                    templateUrl: 'tpls/item.html'
                }  
            }
        })
        .state('add', {
            url: '/add',
            templateUrl: 'tpls/add.html'
        })
});
