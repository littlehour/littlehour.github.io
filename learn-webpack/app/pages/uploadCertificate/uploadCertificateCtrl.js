angular.module('uploadCertificate').controller('uploadCertificateCtrl',function($scope,globalFunc,httpService){
    // $window.isUpload=false;
    // $scope.back=function(href){
    //     $window.location.href='#/'+href;
    //     $window.isUpload=false;
    // }

    $scope.uploadWays=['USB','HFS'];
    $scope.defaultWay={
        defaultWay:'USB'
    }

    $scope.urlPath='';

    $scope.caFileName={
        configName:'Certificate trusted by client',
        inputId:'caFileName',
        data:'',
        isUpload:true,
        type:'text'
    };
    $scope.crtFileName={
        configName:'Certificate for client to present to server',
        inputId:'crtFileName',
        data:'',
        isUpload:true,
        type:'text'
    };
    $scope.privateKeyName={
        configName:"The client's Private Key",
        inputId:'privateKeyName',
        data:'',
        isUpload:true,
        type:'text'
    }
    $scope.privateKeyPassword={
        configName:"The Password of client's Private Key",
        inputId:'privateKeyPassword',
        data:'',
        isUpload:false,
        type:'password'
    }
    $scope.certificateConfig=[$scope.caFileName,$scope.crtFileName,$scope.privateKeyName,$scope.privateKeyPassword];

    $scope.select=globalFunc.select;
    $scope.del=globalFunc.del;
    $scope.back=globalFunc.back;
    $scope.save=httpService.save;
})