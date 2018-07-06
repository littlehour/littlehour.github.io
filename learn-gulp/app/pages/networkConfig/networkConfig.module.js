angular.module('networkConfig',[]).config(function($routeProvider){
    $routeProvider.
        when('/networkConfig',{
            templateUrl:'pages/networkConfig/networkConfig.html',
            controller:'networkConfigCtrl'
        })
})