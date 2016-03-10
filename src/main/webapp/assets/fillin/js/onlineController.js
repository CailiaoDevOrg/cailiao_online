var onlineApp=angular.module('onlineApp',[]);
var id='';
onlineApp.controller('onlineController',function($scope,$http,$location){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");
  var myUrl = $location.absUrl();
  id=myUrl.split("?")[1].split("=")[1];
  var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引
   url=$location.absUrl();  //获得url
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
  };
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
      $(".shengliaomo").eq(shengliaomoIndex).children("td").children("input").val("");
    /*  var sindex=parseInt(shengliaomoIndex);
      $scope.shengliaomoList[sindex].way='';*/

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

  $scope.showrecord=function(){
    //var record_content=$("#record_content");
    changedisplay($("#record_content"),"block");
    changedisplay($("#scanlist"),"block");
    changedisplay($("#scanlistdiv"),"none");
  }

  $scope.showlist=function(){
    changedisplay($("#scanlistdiv"),"block");
    changedisplay($("#record_content"),"none");
    changedisplay($("#scanlist"),"none");
  }
  function changedisplay(elem,display){
    elem.css("display",display);
  }

});/*controller 结束*/

  $(function(){
    var data={
    "retCode": 200,
    "retDesc": "SUCCESS",
    "body": {
        "questionnaireContentList": [
            {
                "id": 1,
                "questionnaireTemplateId": 2,
                "cementFactoryId": "xxxs水泥厂",
                "productionLine": "xxx生产线",
                "modifyTime": "",
                //时间戳
                "lastModifyTime": "",
                //时间戳
                "jsonContent": "",
                //这就是之前你保存的数据里面的那个jsonContent
                "status": 2,
                "rejectReason": "通过"
            },
            {
                "id": 2,
                "questionnaireTemplateId": 2,
                "cementFactoryId": "xxxs水泥厂",
                "productionLine": "xxx生产线",
                "modifyTime": "",
                //时间戳
                "lastModifyTime": "",
                //时间戳
                "jsonContent": "",
                //这就是之前你保存的数据里面的那个jsonContent
                "status": 1,
                "rejectReason": "通过"
            },
            {
                "id": 4,
                "questionnaireTemplateId": 4,
                "cementFactoryId": "xxxs水泥厂",
                "productionLine": "xxx生产线",
                "modifyTime": "",
                //时间戳
                "lastModifyTime": "",
                //时间戳
                "jsonContent": "",
                //这就是之前你保存的数据里面的那个jsonContent
                "status": 3,
                "rejectReason": "通过"
            }
            
        ]
    }
};


    $("#online_table").bootstrapTable({
              //url:"/assets/testjson/data.json",
              dataType: "json",
              pagination: true, //分页
              pageList: [5, 10, 15],
              pageSize:5,
              height:450, 
              search: true, //显示搜索框,
              data:data.body.questionnaireContentList,
              columns: [
                            {
                               title: '编号',
                                field: 'code',
                                width:20,
                                formatter:codeFormatter
                            }, 
                            {
                               title: '生产线',
                                field: 'productionLine',
                                width:150
                            }, 
                            {
                               title: '水泥厂',
                                field: 'cementFactoryId',
                                width:150
                            }, 
                            {
                                title: '提交时间',
                                field: 'modifyTime',
                                align: 'center',
                                width:80
                               
                            }, 
                            {
                                title: '最近修改',
                                field: 'lastModifyTime',
                                align: 'center',
                                width:80
                               
                            }, 
                            {
                                title: '操作状态',
                                field: 'status',
                                align: 'center',
                                width:60,
                                formatter:operateFormatter,
                                events:editEvents
                            }
                ]

    });
    
    /*$(window).bind('beforeunload',function(){
      return '您输入的内容尚未提交，确定离开此页面吗？';
    });*/
  });
function codeFormatter(value,row,index){
      return index+1;
    };

    function operateFormatter(value, row, index) {
      if(value==2||value==3){
        return ['<input type="button" value="查看" class="btn btn-info scan" data-method="post">']
      } else{
        return ['<input type="button" value="编辑" class="btn btn-primary edit" data-method="post">']
      }    
    };
             
    window.editEvents = {
      'click .scan': function (e,value,row,index) {      
          window.open("./scan.html?="+id,"_blank");
         console.log("ok");
      },
      'click .edit': function (e,value,row,index) {   
          window.open("./edit.html?="+id,"_blank");
         console.log("ok");
      }

    };