angular.module('serverConfig',[]).config(function($routeProvider){
    $routeProvider.
        when('/serverConfig',{
            templateUrl:'pages/serverConfig/serverConfig.html',
            controller:'serverConfigCtrl'
        })
})