angular.module('uploadCertificate',[]).config(function($routeProvider){
    $routeProvider.
        when('/uploadCertificate',{
            templateUrl:'pages/uploadCertificate/uploadCertificate.html',
            controller:'uploadCertificateCtrl'
        })
})