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
    }