angular.module('networkConfig').controller('networkConfigCtrl',function($scope,globalFunc,httpService,$window){
    var body=$($window.document.body);
    if(!body.hasClass('bodyBackground')){
        body.addClass('bodyBackground');
    };
    $scope.isRouter=false;
    $scope.isRepeater=false;
    $scope.is3g=false;
    $scope.modes=['DHCP','Static'];
    $scope.defaultMode={
        routerDefaultMode:'DHCP',
        repeaterDefaultMode:'DHCP'
    };

    $scope.password={
        passwordRepeater:'',
        password3g:''
    }

    $scope.ipConfig={
        configName:'IP Address',
        routerData:['','','',''],
        repeaterData:['','','','']
    }
    $scope.maskConfig={
        configName:'NetMask',
        routerData:['','','',''],
        repeaterData:['','','','']
    }
    $scope.gatewayConfig={
        configName:'Gateway Address',
        routerData:['','','',''],
        repeaterData:['','','','']
    }
    $scope.dns1Config={
        configName:'Primary DNS',
        routerData:['','','',''],
        repeaterData:['','','','']
    }
    $scope.dns2Config={
        configName:'Secondary DNS',
        routerData:['','','',''],
        repeaterData:['','','','']
    }
    $scope.staticConfig=[$scope.ipConfig,$scope.maskConfig,$scope.gatewayConfig,$scope.dns1Config,$scope.dns2Config];

    $scope.apn="";
    $scope.username="";

    // 切换网络的配置方式
    $scope.switch=function(event){
        var checkedInput=$(event.target).next('input')[0];
        var checkedStatus=checkedInput.checked;
        var checkedInputId=checkedInput.id;
        // var checked=!checkedInput.checked;
        $('.switch').each(function(index){
            $scope[this.id]=false;
        });
        $scope[checkedInputId]=!checkedStatus;
    }

    $scope.isClose='true';
    $scope.closeEye=function(){
        $scope.isClose=!$scope.isClose;
    }

    // 选择网络模式
    $scope.select=globalFunc.select;

    $scope.back=globalFunc.back;

    $scope.save=httpService.save;

    $scope.del=globalFunc.del;
})