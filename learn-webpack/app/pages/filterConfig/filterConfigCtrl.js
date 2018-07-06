angular.module('filterConfig').controller('filterConfigCtrl',function($scope,globalFunc,httpService,$window){
    var body=$($window.document.body);
    if(body.hasClass('bodyBackground')){
        body.removeClass('bodyBackground');
    };

    $scope.uploadInterval={
        configName:'Upload Interval',
        defaultOption:{
            defaultOption:'1s'
        },
        options:['1s']
    };

    $scope.bleDataFormat={
        configName:'BLE Data Format',
        defaultOption:{
            defaultOption:'Json'
        },
        options:['Json','Binary']
    };

    $scope.cacheTime={
        configName:'Cache Time',
        defaultOption:{
            defaultOption:'5s'
        },
        options:['1s','5s']
    };

    $scope.filterConfig1=[$scope.uploadInterval,$scope.bleDataFormat,$scope.cacheTime];

    $scope.rssiFilter={
        configName:'RSSI Filter',
        inputId:'rssiFilter',
        data:'',
        type:'text',
        placeholder:'RSSI.eg.-59'
    };
    $scope.bleNameFilter={
        configName:'BLE Name Filter',
        inputId:'bleNameFilter',
        data:'',
        type:'text',
        placeholder:'请输入设备名称过滤的正则表达式'
    };
    $scope.filterConfig2=[$scope.rssiFilter,$scope.bleNameFilter];

    $scope.filterDuplicateData={
        configName:'filter duplicate data',
        inputId:'filterDuplicateData',
        isOn:false
    };

    $scope.uploadIbeacon={
        configName:'upload iBeacon',
        inputId:'uploadIbeacon',
        isOn:false
    };

    $scope.uploadSensor={
        configName:'upload Sensor',
        inputId:'uploadSensor',
        isOn:false
    };

    $scope.uploadGateway={
        configName:'upload Gateway',
        inputId:'uploadGateway',
        isOn:false
    };

    $scope.uploadUnknown={
        configName:'upload Unknown',
        inputId:'uploadUnknown',
        isOn:false
    };

    $scope.receiveTheOnlySpecificMac={
        configName:'receive the only specific mac',
        inputId:'receiveTheOnlySpecificMac',
        isOn:false
    };
    $scope.filterConfig3=[$scope.filterDuplicateData,$scope.uploadIbeacon,$scope.uploadSensor,$scope.uploadGateway,$scope.uploadUnknown,$scope.receiveTheOnlySpecificMac];

    $scope.select=globalFunc.select;
    $scope.switch=function(configObj){
        configObj.isOn=!configObj.isOn;
    };
    $scope.back=globalFunc.back;
    $scope.del=globalFunc.del;
    $scope.save=httpService.save;
})