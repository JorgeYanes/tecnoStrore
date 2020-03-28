angular
    .module('tecnoStore')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('inicio', {
                url: '/',
                controller: 'homeController as homeCtrl',
                templateUrl: 'inicio.html'
            })
            .state('download', {
                url: '/download',
                controller: 'downloadController as downCtrl',
                templateUrl: 'download.html'
            })
            .state('contact', {
                url: '/contact',
                controller: 'contactController as contactCtrl',
                templateUrl: 'contact.html'
            });
        $urlRouterProvider.otherwise('/');
    });