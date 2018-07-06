angular.module('home').controller('homeCtrl',function($scope,$http,$window){
    var body=$($window.document.body);
    if(!body.hasClass('bodyBackground')){
        body.addClass('bodyBackground');
    };

    $scope.networkStatus={
        ssid:'GW-XXXXXXXXXXXX',
        gatewayMac:'0C:EF:AF:CE:EE:B3',
        gatewayMode:'Router',
        lanIP:'192.168.X.XX'
    };
})