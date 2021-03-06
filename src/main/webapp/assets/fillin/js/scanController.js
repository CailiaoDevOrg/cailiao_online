var scanApp=angular.module('scanApp',[]);
scanApp.controller('scanController',function($scope,$http,$location){
	var myUrl = $location.absUrl();
	var id=1;
	//$http.get("/getQuestionnaireContentList/"+id+".html").success(function(response){
	$http.get("/assets/testjson/scan.json").success(function(response){
	 	//alert(angular.toJson(response));
		if (response != null && response.retCode == 200
			&& response.body != null) 
		{
				var responsedata=response.body;
				var questionnaireTemplateList=responsedata.questionnaireTemplateList;
				var records=questionnaireTemplateList[0].records;
				var test=records;
				$scope.year=test.year;
				$scope.tons=test.tons;
				$scope.productLineName=test.productLineName;
				$scope.productCompanyName=test.productCompanyName;
				$scope.clinkerItemList=test.clinkerPart.clinkerItemList;
				$scope.cement=test.cementStonePart.cementStoneList;
				$scope.fuel=test.fuelPart.fuelList;
				$scope.clinkerProduction=test.clinkerPart.clinkerProduction;
				$scope.cementProduction=test.cementStonePart.cementProduction;
				$scope.energyConsumptionPart=test.energyConsumptionPart;
				$scope.exhaustEmissionPart=test.exhaustEmissionPart;
				$scope.pp=test.exhaustEmissionPart.exhaustEmissionItemList;
				$scope.fractionalCombustion=test.exhaustEmissionPart.exhaustEmissionPart;
				$scope.majorEquipmentPart=test.majorEquipmentPart;
				$scope.shuinimo=test.majorEquipmentPart.shuinimoList;
				$scope.shengliaomo=test.majorEquipmentPart.shengliaomoList;
		}	
	});
 	changedisplay($("#record_content"),"block");
 	

  function changedisplay(elem,display){
    elem.css("display",display);
  }

  $("#preprint").click(function(){
   		if(window.location.pathname=="/jsp/scan.html"){
   			window.location.href="./print.html";
   		}else{
   			$("#content").printArea();
   		}
 		//
 		//window.location.href="./print.html";
 	})

});/*controller 结束*/



            