angular.module('home',[]).config(function($routeProvider){
    $routeProvider.
        when('/home',{
            templateUrl:'pages/home/home.html',
            controller:'homeCtrl'
        })
})