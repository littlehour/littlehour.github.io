angular.module('apConfiguration').controller('apConfigurationCtrl',function($scope,globalFunc,httpService,$window){
    var body=$($window.document.body);
    if(body.hasClass('bodyBackground')){
        body.removeClass('bodyBackground');
    };

    $scope.ssid='';
    $scope.password='';
    $scope.ipConfig=['','','',''];

    $scope.del=globalFunc.del;
    // $scope.del=function(event){
    //     var $parent=$(event.target).parent();
    //     if($parent.hasClass('ip-set')){
    //         $parent.find('input').each(function(){
    //             $(this).val('');
    //         })
    //     }else{
    //         $(event.target).prev('input').val('');
    //     }
    // }
    $scope.back=globalFunc.back;
    $scope.save=httpService.save;
})