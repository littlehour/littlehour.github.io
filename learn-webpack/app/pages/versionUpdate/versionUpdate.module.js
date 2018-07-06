angular.module('versionUpdate',[]).config(function($routeProvider){
    $routeProvider.
        when('/versionUpdate',{
            templateUrl:'pages/versionUpdate/versionUpdate.html',
            controller:'versionUpdateCtrl'
        })
})