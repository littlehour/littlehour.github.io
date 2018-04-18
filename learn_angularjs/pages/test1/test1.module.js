angular.module('test1Module',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/test1',{
        templateUrl:'test1/test1.html',
        controller:'test1Ctr'
    })
})