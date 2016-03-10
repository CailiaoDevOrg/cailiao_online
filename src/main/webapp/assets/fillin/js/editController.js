var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  var enablechangeyear='';
  changedisplay($("#record_content"),"block");
  var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引
  
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
       // enablechangeyear=test.year;
        $scope.tons=test.tons;
        $scope.productLineName=test.productLineName;
        $scope.productCompanyName=test.productCompanyName;
        $scope.clinkerItemList=test.clinkerPart.clinkerItemList;

        $scope.cementStoneList=test.cementStonePart.cementStoneList;
        $scope.fuelList=test.fuelPart.fuelList;
        $scope.clinkerProduction=test.clinkerPart.clinkerProduction;
        $scope.cementProduction=test.cementStonePart.cementProduction;
        $scope.energyConsumptionPart=test.energyConsumptionPart;

        $scope.exhaustEmissionPart=test.exhaustEmissionPart;
        $scope.ammoniaJetting=test.exhaustEmissionPart.ammoniaJetting;
        $scope.sNCR=test.exhaustEmissionPart.sNCR;
        $scope.fractionalCombustion=test.exhaustEmissionPart.fractionalCombustion;
        $scope.oneAndTwo=test.exhaustEmissionPart.oneAndTwo;
        $scope.other=test.exhaustEmissionPart.other;

        $scope.pp=test.exhaustEmissionPart.exhaustEmissionItemList;
        $scope.fractionalCombustion=test.exhaustEmissionPart.exhaustEmissionPart;
        $scope.majorEquipmentPart=test.majorEquipmentPart;
        $scope.shuinimoList=test.majorEquipmentPart.shuinimoList;
        $scope.shengliaomoList=test.majorEquipmentPart.shengliaomoList;
        $scope.yaoTypeA=test.majorEquipmentPart.yaoTypeA;
        $scope.yaoTypeB=test.majorEquipmentPart.yaoTypeB;
    } 
  });



      //验证数据是否defined
    function valiUnfined(item,itemvar){
      if(angular.isUndefined(item))
      {
        var itemvar='';
      }else{
        itemvar=item;
      };
      return itemvar;
    };

    //转换 name 及 wtonsperyear的list放到数组[]
    function transList(objList,itermArray){
        angular.forEach(objList,function(item,index)
        {
          itermArray.push({"name":item.name,"wtonsPerYear":item.wtonsPerYear});
        });
      return itermArray;
    };
    //主要设备部分list放到数组[]
    function transMainEquip(objList,itermArray){//主要设备部分的转换函数
      angular.forEach(objList,function(item,index)
        {
          itermArray.push({"way":item.way,"model":item.model,"number":item.number});
        });
      return itermArray;
    };

    function generateData(){
      var year=$scope.year;
      var tons=$scope.tones;
      var productCompanyName=$scope.productCompanyName;
      var productLineName=$scope.productLineName;
      var cementStoneList=[];
          cementStoneList=transList($scope.cementStoneList,cementStoneList);
      var clinkerItemList=[];
          clinkerItemList=transList($scope.clinkerItemList,clinkerItemList);
      var fuelList=[];
          fuelList=transList($scope.fuelList,fuelList);
      var exhaustEmissionItemList=[];
          angular.forEach($scope.pp,function(item,index)
          {
            exhaustEmissionItemList.push({"yearconsume":item.yearconsume,"emitdensity":item.emitdensity,"dedustway":item.dedustway});
          });
      
      var shengliaomoList=[];
          shengliaomoList=transMainEquip($scope.shengliaomoList,shengliaomoList);
      var shuinimoList=[];
          shuinimoList=transMainEquip($scope.shuinimoList,shuinimoList);
      var cementProduction='';
      var clinkerProduction='';
      var ammoniaJetting='';
      var fractionalCombustion='';
      var oneAndTwo='';
      var other='';
      var sNCR='';
      var yaoTypeB='';
      var yaoTypeA='';
     
      cementProduction=valiUnfined($scope.cementProduction,cementProduction);
      clinkerProduction=valiUnfined($scope.clinkerProduction,clinkerProduction);
      ammoniaJetting=valiUnfined($scope.ammoniaJetting,ammoniaJetting);
      fractionalCombustion=valiUnfined($scope.fractionalCombustion,fractionalCombustion);
      oneAndTwo=valiUnfined($scope.oneAndTwo,oneAndTwo);
      other=valiUnfined($scope.other,other);
      sNCR=valiUnfined($scope.sNCR,sNCR);
      yaoTypeB=valiUnfined($scope.yaoTypeB);
      yaoTypeA=valiUnfined($scope.yaoTypeA);

      var cementPart={
        cementStoneList:cementStoneList,
        cementProduction:cementProduction
      };
      var clinkerPart={
        clinkerItemList:clinkerItemList,
        clinkerProduction:clinkerProduction
      };
      var fulePart={
        fuelList:fuelList
      };
      var exhaustEmissionPart={
        ammoniaJetting:ammoniaJetting,
        exhaustEmissionItemList:exhaustEmissionItemList,
        fractionalCombustion:fractionalCombustion,
        oneAndTwo:oneAndTwo,
        other:other,
        sNCR:sNCR
      };
      var energyConsumptionPart={};
      if (angular.isDefined($scope.energyConsumptionPart)) 
        {
          energyConsumptionPart=$scope.energyConsumptionPart;
        };

      var majorEquipmentPart={
        yaoTypeA:yaoTypeA,
        yaoTypeB:yaoTypeB,
        shuinimoList:shuinimoList,
        shengliaomoList:shengliaomoList
      };

      var data={
        "clinkerPart" :clinkerPart,
        "cementPart" : cementPart, 
        "fulePart":fulePart,   
        "energyConsumptionPart":energyConsumptionPart,
        "majorEquipmentPart":majorEquipmentPart,
        "exhaustEmissionPart":exhaustEmissionPart
        };

        data=angular.toJson(data);
        var datastr={
          "id":"",
        "questionnaireTemplateId":1,
        "year":year,
        "tons":tons,
        "productCompanyName":productCompanyName,
        "productLineName":productLineName,
        "jsonContent":data
        };
      datastr=angular.toJson(datastr);
      console.log(datastr);
      return datastr;
    };



   /*初始化隐藏项*/
	$scope.submitform=function(){
    $(window).unbind('beforeunload');//解除绑定的提醒
      var datastr=generateData();
      $.ajax({
    	 url: '/q/commitQuestionnaireContent.html',
    	 type: 'post',
    	 data: datastr,
    	 contentType: 'application/json',
       success:function(){
        alert("提交成功！");
       },
       error:function(){
        alert("提交失败！");
       }
      });
	}
  $scope.saveform=function(){
    $(window).unbind('beforeunload');
    var datastr=generateData();
    $.ajax({
       url: '/q/saveQuestionnaireContentTemp.html',
       type: 'post',
       data: datastr,
       contentType: 'application/json',
       success:function(){
        alert("保存成功！");
       },
       error:function(){
        alert("保存失败！");
       }
      })
  }
	$scope.addshengliaomo=function(){
    shengliaomoIndex=shengliaomoIndex+1;
    $(".shengliaomo").eq(shengliaomoIndex).removeClass("_hidden");
	}

  $scope.addshuinimo=function(){
    shuinimoIndex=shuinimoIndex+1;
    $(".shuinimo").eq(shuinimoIndex).removeClass("_hidden");
  }
	
	$scope.deleteshengliaomo=function(){
		if(shengliaomoIndex>0){
      $(".shengliaomo").eq(shengliaomoIndex).addClass("_hidden");
      shengliaomoIndex=shengliaomoIndex-1;
    }else{
      console.log("can't cancel");
    }
	}

  $scope.deleteshuinimo=function(){
    if(shuinimoIndex>0){
      $(".shuinimo").eq(shuinimoIndex).addClass("_hidden");
      shuinimoIndex=shuinimoIndex-1;
    }else{
      console.log("can't cancel");
    }
  }

    function changedisplay(elem,display){
    elem.css("display",display);
  }

});/*controller 结束*/

  $(function(){
    
});
function codeFormatter(value,row,index){
      return index+1;
    };

    function operateFormatter(value, row, index) {
      if(value!='pass'){
        return ['<input type="button" value="查看" class="btn btn-info scan" data-method="post">']
      } else{
        return ['<input type="button" value="编辑" class="btn btn-primary edit" data-method="post">']
      }    
    };

            /*var url = window.location.href;
             var id = url.split("?")[1].split("=")[1];*/
             
    window.editEvents = {
      'click .scan': function (e,value,row,index) {
            var url = window.location.href;
             var id = url.split("?")[1].split("=")[1];
          window.open("./scan.html?="+id,"_blank");
         console.log("ok");
      },
      'click .edit': function (e,value,row,index) {
            var url = window.location.href;
             var id = url.split("?")[1].split("=")[1];
          window.open("./edit.html?="+id,"_blank");
         console.log("ok");
      }

    };