var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");
    /*初始化隐藏项*/
	$scope.submitform=function(){
    $(window).unbind('beforeunload');//解除绑定的提醒
    /*定义数据结构*/
    var clinkerProduction=$scope.p.clinkerproduction;//熟料产量
    var clinkerItemList = [];//熟料制成原材料，包含名称和消耗情况
        clinkerItemList.push({"name":$scope.clinkername.clinker1name,
                              "wtonsPerYear":$scope.clinkerconsume.clinker1consume});
        clinkerItemList.push({"name":$scope.clinkername.clinker2name,
                              "wtonsPerYear":$scope.clinkerconsume.clinker2consume});
        clinkerItemList.push({"name":$scope.clinkername.clinker3name,
                              "wtonsPerYear":$scope.clinkerconsume.clinker3consume});
        clinkerItemList.push({"name":$scope.clinkername.clinker4name,
                              "wtonsPerYear":$scope.clinkerconsume.clinker4consume});
        clinkerItemList.push({"name":$scope.clinkername.clinker5name,
                              "wtonsPerYear":$scope.clinkerconsume.clinker5consume});
        /*clinkerItemlist数据*/
    var clinkerPart={
      clinkerProduction:clinkerProduction,
      clinkerItemList:clinkerItemList
    };
    /*clinkerpart end   fulepart start*/
    var fuelItemList=[];
        fuelItemList.push({"name":$scope.fuel.fuel1name,
                            "wtonsPerYear":$scope.fuel.fuel1consume});
        fuelItemList.push({"name":$scope.fuel.fuel2name,
                            "wtonsPerYear":$scope.fuel.fuel2consume});
        fuelItemList.push({"name":$scope.fuel.fuel3name,
                            "wtonsPerYear":$scope.fuel.fuel3consume});
    var fuelPart={
      fuelItemList:fuelItemList
    };
    /*fuelPart end cementPart start*/
    var cementProduction=$scope.p.cementProduction;//水泥产量
    var cementStoneList=[];//水泥制成用原材料
        cementStoneList.push({"name":$scope.cement.cement1name,
                              "wtonsPerYear":$scope.cement.cement1consume});
        cementStoneList.push({"name":$scope.cement.cement2name,
                              "wtonsPerYear":$scope.cement.cement2consume});
        cementStoneList.push({"name":$scope.cement.cement3name,
                              "wtonsPerYear":$scope.cement.cement3consume});
        cementStoneList.push({"name":$scope.cement.cement4name,
                              "wtonsPerYear":$scope.cement.cement4consume});
        cementStoneList.push({"name":$scope.cement.cement5name,
                              "wtonsPerYear":$scope.cement.cement5consume});
    var cementStonePart={
      cementProduction:cementProduction,
      cementStoneList:cementStoneList
    };
    /*cementPart end  energyConsumptionPart start*/
    var energyConsumptionPart={
      powerConsumptionBySlfm:$scope.p.powerConsumptionBySlfm,
      coalConsumptionByKbsl:$scope.p.coalConsumptionByKbsl,
      powerConsumptionByKbsl:$scope.p.powerConsumptionByKbsl,
      energyConsumptionByKbsl:$scope.p.energyConsumptionByKbsl,
      powerConsumptionByKbsn:$scope.p.powerConsumptionByKbsn,
      energyConsumptionByKbsn:$scope.p.energyConsumptionByKbsn,
      powerGenerationUnit:$scope.p.powerGenerationUnit
    };
    /*exhaustEmissionPart start*/
    var ammoniaJetting=$scope.p.ammoniaJetting;
    var fractionalCombustion=$scope.p.fractionalCombustion;
    var oneAndTwo=$scope.p.oneAndTwo;
    var sNCR=$scope.p.sNCR;
    var exhaustEmissionItemList=[];
        exhaustEmissionItemList.push({"ammoniaJetting":$scope.})
    var exhaustEmissionPart=[];
    /*majorEquipmentPart start*/
    
    var data={
      "clinkerPart" : clinkerPart,
      "cementStonePart":cementStonePart,
      "fuelPart":fuelPart,
      "energyConsumptionPart":energyConsumptionPart,
      "exhaustEmissionPart":exhaustEmissionPart
      };
      var datastr=JSON.stringify(data); 
      console.log(datastr);
	};
  var shengliaomoIndex=0;//生料磨索引初始为1
  var shuinimoIndex=0;//水泥磨索引初始为1
	$scope.addshengliaomo=function(){
		var shengliaomolen=$(".shengliaomo").length;
		var count=parseInt(shengliaomolen)-1;
	  shengliaomoIndex=shengliaomoIndex+1;
		var add_tr=['<tr class="shengliaomo_',
                              shengliaomoIndex,
                              '">',
                              '<td>生料磨</td>',
                              '<td><input ng-model="p.shengliaomo_way_',
                              shengliaomoIndex,
                              '"></td>',
                              '<td>φ<input ng-model="p.shengliaomo_model_',
                              shengliaomoIndex,
                              '"></td>',
                              '<td><input ng-model="p.shengliaomo_number_',
                              shengliaomoIndex,
                              '"></td>',
                              '<td>',
                                '<input type="button" value="删除" class="btn btn-warning" onclick="deleteshengliaomo(',
                                  shengliaomoIndex,
                                  ')">',
                              '</td></tr>'].join('');
        $(".shengliaomo").eq(count).after(add_tr);
	}

  $scope.addshuinimo=function(){
    var shuinimolen=$(".shuinimo").length;
    var count=parseInt(shuinimolen)-1;
    shuinimoIndex=shuinimoIndex+1;
    var add_tr=['<tr class="shuinimo_',
                              shuinimoIndex,
                              '">',
                              '<td>水泥磨</td>',
                              '<td><input></td>',
                              '<td>φ<input ng-model="p.shuinimo_model_',
                              shuinimoIndex,
                              '"></td>',
                              '<td><input ng-model="p.shuinimo_number_',
                              shuinimoIndex,
                              '"></td>',
                              '<td>',
                                '<input type="button" value="删除" class="btn btn-warning" onclick="deleteshuinimo(',
                                  shuinimoIndex,
                                  ')">',
                              '</td></tr>'].join('');
        $(".shuinimo").eq(count).after(add_tr);
  }
	
	$scope.deleteequipment=function(){
		console.log("xinhaolei");
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

  /*数据定义如下*/
  $scope.publicdata={
    tons:'',
    year:'2016',
    /*majorEquipmentPart:[
      shengliaomo_way:'',
      shengliaomo_model_0:''
    ]*/
  };
  $scope.exhaustEmissionPart={
      ammoniaJetting:''
    }

  function changedisplay(elem,display){
    elem.css("display",display);
  }




});/*controller 结束*/

    
  function deleteshengliaomo(n){//主要设备的删除
    var m=parseInt(n);
    $(".shengliaomo_"+n).remove();
  };
  function deleteshuinimo(n){//主要设备的删除
    var m=parseInt(n);
    $(".shuinimo_"+n).remove();
  };
  var codecount=0;
  $(function(){
    $("#online_table").bootstrapTable({
      url: "/assets/testjson/data.json", 
              dataType: "json",
              pagination: true, //分页
              pageList: [5, 10, 15],
              pageSize:5,
              height:450, 
              search: true, //显示搜索框

              //sidePagination: "server", //服务端处理分页
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
                                field: 'option2',
                                align: 'center',
                                width:60
                            },
                            {
                                title: '操作状态',
                                field: 'option1',
                                align: 'center',
                                width:60,
                                formatter:operateFormatter
                            }
                            
                        ]
    });
  function codeFormatter(value,row,index){
    return index+1;

  }

  function operateFormatter(value, row, index) {
          return ['<input type="button" value="编辑" class="btn">']
  }

  $(window).bind('beforeunload',function(){
    return '您输入的内容尚未提交，确定离开此页面吗？';
  });
})