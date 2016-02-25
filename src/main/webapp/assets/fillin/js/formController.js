scotchApp.controller('formController',function($scope){
	/*$scope.p={year:2016}
	$scope.message=$scope.p;*/
	$scope.submitform=function(){
		$scope.obj = {questionnaire:"test"};
		$scope.obj.questionnaire=$scope.p;
		//console.log($scope.p);
		console.log($scope.obj.questionnaire);
	}
});