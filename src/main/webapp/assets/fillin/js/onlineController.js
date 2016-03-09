var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");

  var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引


  /*定义数据结构*/
   /*$scope.exhaustEmissionPart={
      ammoniaJetting:""
    };
  $scope.majorEquipmentPart={
    yaoTypeB:"",
    yaoTypeA:""
  };*/
  /*$scope.cementPart={
    cementProduction:"0"
  };*/

    /*初始化隐藏项*/
	$scope.submitform=function(){
    $(window).unbind('beforeunload');//解除绑定的提醒
    var year=$scope.year;
    var tons=$scope.tones;
    var productCompanyName=$scope.productCompanyName;
    var productLineName=$scope.productLineName;
    /*
    $scope.exhaustEmissionPart.exhaustEmissionItemList = $scope.pp;
    $scope.majorEquipmentPart.shengliaomoList=$scope.shengliaomoList;
    $scope.majorEquipmentPart.shuinimoList=$scope.shuinimoList;  */
 
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
  /*  $scope.majorEquipmentPart.shuinimoList=shuinimoList;
    $scope.majorEquipmentPart.shengliaomoList=shengliaomoList;*/

    var cementProduction='';
    var clinkerProduction='';
    var ammoniaJetting='';
    var fractionalCombustion='';
    var oneAndTwo='';
    var other='';
    var sNCR='';
    function valiUnfined(item,itemvar){
      if(angular.isUndefined(item))
      {
        var itemvar='';
      }else{
        itemvar=item;
      };
      return itemvar;
    };
    cementProduction=valiUnfined($scope.cementProduction,cementProduction);
    clinkerProduction=valiUnfined($scope.cementProduction,clinkerProduction);
    ammoniaJetting=valiUnfined($scope.ammoniaJetting,ammoniaJetting);
    fractionalCombustion=valiUnfined($scope.fractionalCombustion,fractionalCombustion);
    oneAndTwo=valiUnfined($scope.oneAndTwo,oneAndTwo);
    other=valiUnfined($scope.other,other);
    sNCR=valiUnfined($scope.sNCR,sNCR);


    function transList(objList,itermArray){
        angular.forEach(objList,function(item,index)
        {
          itermArray.push({"name":item.name,"wtonsPerYear":item.wtonsPerYear});
        });
      return itermArray;
    };

    function transMainEquip(objList,itermArray){
      angular.forEach(objList,function(item,index)
        {
          itermArray.push({"way":item.way,"model":item.model,"number":item.number});
        });
      return itermArray;
    }

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
    /*var exhaustEmissionPart={
      exhaustEmissionItemList:exhaustEmissionItemList
    }*/
    var data={
      "id":007,
      "questionnaireTemplateId":22222,
      "cementFactoryId":'333',
      "productionLine":'东方一线',
      "year":year,
      "tons":tons,
      "productCompanyName":productCompanyName,
      "productLineName":productLineName,
      "clinkerPart" :clinkerPart,
      "cementPart" : cementPart, 
      "fulePart":fulePart,   
      /*"energyConsumptionPart":energyConsumptionPart,
      "majorEquipmentPart":majorEquipmentPart,*/
      "exhaustEmissionPart":exhaustEmissionPart
      };
      console.log(data);
    datastr=angular.toJson(data);
    console.log(datastr);
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
      senddata=angular.toJson(senddata);
    $.ajax({
       url: '/q/saveQuestionnaireContentTemp.html',
       type: 'post',
       data: senddata,
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
    /*function get_result_view_template()
      {
      return{
              //dataType: "json",
              pagination: true, //分页
              pageList: [5, 10, 15],
              pageSize:5,
              height:450, 
              search: true, //显示搜索框
              columns: [
                            {
                               title: '编号',
                                field: 'code',
                                width:20,
                                formatter:codeFormatter
                            }, 
                            {
                               title: '生产线',
                                field: 'productline',
                                width:150
                            }, 
                            {
                                title: '提交时间',
                                field: 'submittime',
                                align: 'center',
                                width:80
                               
                            }, 
                            {
                                title: '审核状态',
                                field: 'option1',
                                align: 'center',
                                width:60
                            },
                            {
                                title: '操作状态',
                                field: 'option2',
                                align: 'center',
                                width:60,
                                formatter:operateFormatter,
                                events:editEvents
                            }
                ]
              }
    }*/
    /*var onlinelist_view = new MGeneralTableTool.MGeneralTable();
    onlinelist_view.CreateTable('online_table',get_result_view_template(),"./index.php?r=result/load-result-items",{},true);*/
    $("#online_table").bootstrapTable({
              url:"/assets/testjson/data.json",
              dataType: "json",
              pagination: true, //分页
              pageList: [5, 10, 15],
              pageSize:5,
              height:450, 
              search: true, //显示搜索框
              columns: [
                            {
                               title: '编号',
                                field: 'code',
                                width:20,
                                formatter:codeFormatter
                            }, 
                            {
                               title: '生产线',
                                field: 'productline',
                                width:150
                            }, 
                            {
                                title: '提交时间',
                                field: 'submittime',
                                align: 'center',
                                width:80
                               
                            }, 
                            {
                                title: '审核状态',
                                field: 'option1',
                                align: 'center',
                                width:60
                            },
                            {
                                title: '操作状态',
                                field: 'option2',
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