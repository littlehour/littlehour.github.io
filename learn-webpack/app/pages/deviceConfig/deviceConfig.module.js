angular.module('deviceConfig',[]).config(function($routeProvider){
    $routeProvider.
        when('/deviceConfig',{
            templateUrl:'pages/deviceConfig/deviceConfig.html',
            controller:'deviceConfigCtrl'
        })
})