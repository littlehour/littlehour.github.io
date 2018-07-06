angular.module('deviceConfig').controller('deviceConfigCtrl',function($scope,globalFunc,httpService,$window){
    var body=$($window.document.body);
    if(!body.hasClass('bodyBackground')){
        body.addClass('bodyBackground');
    };

    $scope.page={
        name:'home',
        title:'Device',
        needSave:true
    };

    // 主页面配置
    $scope.ssid={
        configName:'AP SSID',
        data:'SSID',
        type:'text',
        isLast:false
    };

    $scope.ap={
        configName:'AP',
        inputId:'ap',
        isOn:false,
        type:'form',
        isLast:false
    };

    $scope.mac={
        configName:'Mac',
        data:'0C:EF:AF:CE:EE:B3',
        type:'text',
        isLast:false
    };

    $scope.led={
        configName:'LED',
        inputId:'led',
        isOn:true,
        type:'form',
        isLast:false
    };

    $scope.time={
        configName:'Time',
        href:'#/timeConfig',
        data:'',
        type:'jump',
        jumpPage:{
            name:'time',
            title:'Time',
            needSave:true
        },
        isLast:true
    };

    $scope.deviceConfig1=[$scope.ssid,$scope.ap,$scope.mac,$scope.led,$scope.time];

    $scope.safe={
        configName:'Safe',
        href:'#/safeConfig',
        data:'',
        type:'jump',
        jumpPage:{
            name:'changepw1',
            title:'Change Password',
            needSave:false
        },
        isLast:true
    };

    $scope.version={
        configName:'Current Version',
        href:'#/versionUpdate',
        data:'V1.2.0',
        type:'jump',
        jumpPage:{
            name:'versionUpdate',
            title:'Firmware Upgrade',
            needSave:false
        },
        isLast:false
    };

    $scope.model={
        configName:'Model',
        data:'G1-B',
        type:'text',
        isLast:true
    };

    $scope.deviceConfig2=[$scope.version,$scope.model];

    // changpw2页面配置
    $scope.newPassword={
        configName:'Password',
        inputId:'newPassword',
        type:'password',
        placeholder:'Please enter your password',
        data:''
    }

    $scope.newRePassword={
        configName:'Re-password',
        inputId:'newRePassword',
        type:'password',
        placeholder:'Re-enter password',
        data:''
    }

    $scope.passwordConfig=[$scope.newPassword,$scope.newRePassword];

    //Time页面配置
    $scope.serverList={
        list1:'',
        list2:'',
        list3:'',
        list4:''
    }

    //versionUpdate页面配置
    $scope.updateMethods=['空中升级','USB'];
    $scope.defaultMethod={
        defaultMethod:'空中升级'
    }


    $scope.select=globalFunc.select;
    $scope.switch=function(configObj){
        configObj.isOn=!configObj.isOn;
    };

    // $scope.switchPage=function(event,page){
    //     event.preventDefault();
    //     $scope.page=page;
    // };

    $scope.switchPage=function(event,page,oldPage){
        globalFunc.switchPage(event,page,oldPage);
        if(page.name!=='home'){
            if(body.hasClass('bodyBackground')){
                body.removeClass('bodyBackground');
            }
        };
    };

    $scope.del=globalFunc.del;

    $scope.back=function(href){
        // console.log($scope.page.name);
        switch($scope.page.name){
            case 'home':globalFunc.back(href);break;
            case 'changepw2':{
                $scope.page.name='changepw1';
                $scope.page.title='Change Password';
                $scope.page.needSave=false;
            };break;
            default :{
                $scope.page.name='home';
                $scope.page.title='Device';
                $scope.page.needSave=true;
            }
        };
        if($scope.page.name!=='home'){
            if(body.hasClass('bodyBackground')){
                body.removeClass('bodyBackground');
            }
        }else{
            if(!body.hasClass('bodyBackground')){
                body.addClass('bodyBackground');
            }
        };
    }
})