var scotchApp=angular.module('scotchApp',[]);
	scotchApp.controller('mainController',function($scope){
		var retCode='';
		$scope.questionnaireTemplateList='';
	    $.get("/assets/testjson/index.json",function(data){
	    	retCode=data.retCode;
	    	//$scope.questionnaireTemplateList=data.body.questionnaireTemplateList;  
	    	$scope.TemplateList=data.body.questionnaireTemplateList;
	    	console.log($scope.TemplateList[0].name);
	    });
	    $("#online_write").bind('click', function(){
	    	    window.location.href='/jsp/online.jsp?id='+retCode;
	    });
	});