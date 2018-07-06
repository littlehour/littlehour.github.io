angular.module('filterConfig',[]).config(function($routeProvider){
    $routeProvider.
        when('/filterConfig',{
            templateUrl:'pages/filterConfig/filterConfig.html',
            controller:'filterConfigCtrl'
        })
})