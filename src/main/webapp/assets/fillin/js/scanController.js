var scanApp=angular.module('scanApp',[]);
scanApp.controller('scanController',function($scope,$http,$location){
	var myUrl = $location.absUrl();
	$http.get("/assets/testjson/scan.json").success(function(response){
		/*var test={
			 "year":year,
		      "tons":tons,
		      "productCompanyName":productCompanyName,
		      "productLineName":productLineName,
		      "clinkerPart" :clinker,
		      "cementPart" : $scope.cement,
		      "fulepart": $scope.fuel,
		      "energyConsumptionPart":$scope.energy,
		      "majorEquipmentPart":$scope.majorEquipmentPart,
		      "exhaustEmissionPart":$scope.exhaustEmissionPart
		}*/
		var test = response.records;
		/*angular.forEach(test, function(item, key) {

		}*/
		/*$scope.test=test;
		console.log($scope.test);*/
		$scope.year=test.year;
		$scope.tons=test.tons;
		$scope.productLineName=test.productLineName;
		$scope.productCompanyName=test.productCompanyName;
		$scope.clinkerItemList=test.clinkerPart.clinkerItemList;
		//$scope.clinkerPart.clinkerItemList=test.clinkerPart.clinkerItemList;
		console.log(test.clinkerPart.clinkerItemList);
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
  
  /*var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引


  /*定义数据结构*/
   /*$scope.exhaustEmissionPart={
      ammoniaJetting:""
    };
  $scope.majorEquipmentPart={
    yaoTypeB:"",
    yaoTypeA:""
  }

    var year=$scope.year;
    var tons=$scope.tones;
    var productCompanyName=$scope.productCompanyName;
    var productLineName=$scope.productLineName;
    
    $scope.exhaustEmissionPart.exhaustEmissionItemList = $scope.pp;
    $scope.majorEquipmentPart.shuinimo=$scope.shuinimo;   
    $scope.majorEquipmentPart.shengliaomo=$scope.shengliaomo;*/

    /*初始化隐藏项*/
	/*$scope.submitform=function(){
    $(window).unbind('beforeunload');//解除绑定的提醒
    var clinker=$scope.clinker;
    var datastr={
      "year":year,
      "tons":tons,
      "productCompanyName":productCompanyName,
      "productLineName":productLineName,
      "clinkerPart" :clinker,
      "cementPart" : $scope.cement,
      "fulepart": $scope.fuel,
      "energyConsumptionPart":$scope.energy,
      "majorEquipmentPart":$scope.majorEquipmentPart,
      "exhaustEmissionPart":$scope.exhaustEmissionPart
      };
      
      datastr=JSON.stringify(datastr);
      //alert(datastr);
      var senddata={
        "id":007,
        "questionnaireTemplateId":22222,
        "cementFactoryId":'333',
        "productionLine":'东方一线',
        "jsonContent":datastr
      };
      senddata=angular.toJson(senddata);*/
    


  

 changedisplay($("#record_content"),"block");

  function changedisplay(elem,display){
    elem.css("display",display);
  }



});/*controller 结束*/

  $(function(){
   
});

            