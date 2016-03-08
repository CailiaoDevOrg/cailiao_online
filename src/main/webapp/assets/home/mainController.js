var scotchApp=angular.module('scotchApp',[]);
	scotchApp.controller('mainController',function($scope){
		var retCode='';
		$scope.questionnaireTemplateList='';
	    $.get("/assets/testjson/index.json",function(data){
	    	retCode=data.retCode;
	    	$scope.questionnaireTemplateList=data.body.questionnaireTemplateList;
	    	
	    	 
	    
	    });
	    $("#online_write").bind('click', function(){
	    	    window.location.href='/jsp/online.jsp?id='+retCode;
	    });
	});