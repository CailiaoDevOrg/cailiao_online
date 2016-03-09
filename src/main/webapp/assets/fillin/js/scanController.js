var scanApp=angular.module('scanApp',[]);
scanApp.controller('scanController',function($scope,$http,$location){
	var myUrl = $location.absUrl();
	$http.get("/assets/testjson/scan.json").success(function(response){
		var test = response.records;
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
	});
 
 changedisplay($("#record_content"),"block");

  function changedisplay(elem,display){
    elem.css("display",display);
  }

});/*controller 结束*/

  $(function(){
   
});

            