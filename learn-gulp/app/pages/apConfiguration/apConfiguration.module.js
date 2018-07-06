angular.module('apConfiguration',[]).config(function($routeProvider){
    $routeProvider.
        when('/apConfiguration',{
            templateUrl:'pages/apConfiguration/apConfiguration.html',
            controller:'apConfigurationCtrl'
        })
})