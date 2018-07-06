angular.module('versionUpdate').controller('versionUpdateCtrl',function($scope,globalFunc,httpService){
    $scope.updateMethods=['空中升级','USB'];
    $scope.defaultMethod={
        defaultMethod:'空中升级'
    }

    $scope.select=globalFunc.select;
    $scope.back=globalFunc.back;

})