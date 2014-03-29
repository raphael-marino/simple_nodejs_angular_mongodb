var quickApp = angular.module('quickApp', ['ngRoute', 'ngResource']);

quickApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'HellowCTRL',
            templateUrl: '/views/index.html'
        })
        .when('/hellow',
        {
            controller: 'HellowCTRL',
            templateUrl: '/views/index.html'
        })
        .otherwise(
        {
            redirectTo: '/'
        });

        if (typeof history.pushState !== 'undefined') {
            $locationProvider.html5Mode(true);
        }
});
