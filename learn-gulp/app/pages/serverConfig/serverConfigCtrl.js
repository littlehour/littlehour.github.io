angular.module('serverConfig').controller('serverConfigCtrl',function($scope,globalFunc,httpService,$window){
    var body=$($window.document.body);
    if(body.hasClass('bodyBackground')){
        body.removeClass('bodyBackground');
    };

    $scope.page={
        name:'home',
        title:'Server',
        needSave:true
    };

    // 主页面配置
    $scope.services=['HTTP/HTTPS','MQTT'];
    $scope.defaultService={
        defaultService:"HTTP/HTTPS"
    };

    $scope.url={
        httpUrl:'',
        mqttUrl:''
    };

    $scope.protocols=['tcp://','ssl://'];
    $scope.defaultProtocol={
        defaultProtocol:'tcp://',
        isTcp:true
    }

    $scope.certificate="";

    $scope.clientId={
        configName:'Client ID',
        inputId:'clientId',
        inputType:'text',
        data:''
    }
    $scope.qos={
        configName:'Qos',
        inputId:'qos',
        inputType:'text',
        data:''
    }
    $scope.username={
        configName:'Username',
        inputId:'username',
        inputType:'text',
        data:''
    }
    $scope.password={
        configName:'Password',
        inputId:'password',
        inputType:'password',
        data:''
    }
    $scope.statusPublishTopic={
        configName:'Stauts Publish Topic',
        inputId:'statusPublishTopic',
        inputType:'text',
        data:''
    }
    $scope.actionControlTopic={
        configName:'Action Control Topic',
        inputId:'actionControlTopic',
        inputType:'text',
        data:''
    }
    $scope.actionControlResponseTopic={
        configName:'Action Control Response Topic',
        inputId:'actionControlResponseTopic',
        inputType:'text',
        data:''
    }
    $scope.mqttConfig=[$scope.clientId,$scope.qos,$scope.username,$scope.password,$scope.statusPublishTopic,$scope.actionControlTopic,$scope.actionControlResponseTopic];

    // uploadCertificate页面配置
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
    $scope.select1=function (option,optionObjString,selectObj){
        globalFunc.select(option,optionObjString,selectObj);
        // var ssl1=$(event.target).parents('.list-group-item');
        // var ssl2=$(event.target).parents('.list-group-item').nextAll('.list-group-item');
        // console.log(ssl1);
        // console.log(ssl2);
        if(option==='tcp://'){
            // ssl1.addClass('ssl');
            // ssl2.addClass('ssl');
            $scope.defaultProtocol.isTcp=true;
        }else{
            // ssl1.removeClass('ssl');
            // ssl2.removeClass('ssl');
            $scope.defaultProtocol.isTcp=false;
        }
    };
    $scope.switchPage=globalFunc.switchPage;
    $scope.del=globalFunc.del;
    $scope.back=function(href){
        switch($scope.page.name){
            case 'home':globalFunc.back(href);break;
            default :$scope.page={
                name:'home',
                title:'Server',
                needSave:true
            };
        }
    };
    $scope.save=httpService.save;


    // $scope.isUpload=$window.frames[0].isUpload;
    // $window.console.log($window.frames[0].document);
    // $scope.upload=function(event){
    //     event.preventDefault();
    //     $scope.isUpload=true;
    //     return false;
    // }
})
