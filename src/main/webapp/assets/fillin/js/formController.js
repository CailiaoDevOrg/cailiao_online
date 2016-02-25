scotchApp.controller('formController',function($scope,$http){
	/*$scope.p={year:2016}
	$scope.message=$scope.p;*/
	$scope.submitform=function(){
		$scope.obj = {questionnaire:"test"};
		$scope.obj.questionnaire=$scope.p;
		console.log($scope.obj);
		//console.log($scope.p);
		//console.log($scope.obj.questionnaire);
		$http.post('', $scope.obj).success(function (data,status) {  
            console.log('登录成功');  
        }).error(function (data,status) {  
            console.log('登录失败');  
        });        
	}
});