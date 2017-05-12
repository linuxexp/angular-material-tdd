/**
 * Created by raja on 07/05/17.
 */

var app = angular.module('tag', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home/home.view.html',
            controller: 'HomeController'
        })
});

require("./index.html");
require("views/home/home.controller.js");