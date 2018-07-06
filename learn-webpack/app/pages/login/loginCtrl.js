angular.module('login').controller('loginCtrl',function($scope,httpService,$window){
    var body=$($window.document.body);
    if(body.hasClass('bodyBackground')){
        body.removeClass('bodyBackground');
    };

    $scope.username='Admin';
    $scope.password='';

    $scope.isClose='true';
    $scope.closeEye=function(){
        $scope.isClose=!$scope.isClose;
    }

    $scope.del=function(){
        $scope.password='';
    }

    $scope.login=httpService.login;
    // $scope.login=function(){
        // $http({
        // 		method: 'GET',
        // 		url: "/cgi-bin/signin?webPW=" + $scope.password,
        // 		headers: {
        // 			'Content-Type': 'application/json'
        // 		}
        // 	}).then(function successCallback(response) {
        // 		if (response.data.result == 200) {
        // 			$scope.message = "Login successfully!";
        //             $scope.openSuccessModal();
        // 		} else if (response.data.result == 300) {
        // 			$scope.message = response.data.message;
        // 			$scope.openMsgModal();
        // 		} else if (response.data.result == 500) {
        // 			$scope.message = "Wrong password";
        // 			$scope.openMsgModal();
        // 		} else if (response.data.result == 800) {
        // 			$scope.message = "Not set password. For security, please set your password!";
        //             $scope.openSuccessModal();
        // 		}
        // 	}, function errorCallback(error) {
        // 		console.log(error);
        // 		$scope.message = "Cannot access!";
        // 		$scope.openMsgModal();
        // 	});
        // window.location.href='#/home';
    // }
})