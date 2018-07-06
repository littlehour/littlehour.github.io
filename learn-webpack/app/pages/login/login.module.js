angular.module('login',[]).config(function($routeProvider){
    $routeProvider.
        when('/login',{
            templateUrl:'pages/login/login.html',
            controller:'loginCtrl'
        })
})