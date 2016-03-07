var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");

  var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引


  /*定义数据结构*/
   $scope.exhaustEmissionPart={
      //ammoniaJetting:""
    };
  $scope.majorEquipmentPart={
    //yaoTypeB:"",
    //yaoTypeA:""
  }

    var year=$scope.year;
    var tons=$scope.tones;
    var productCompanyName=$scope.productCompanyName;
    var productLineName=$scope.productLineName;
    
    $scope.exhaustEmissionPart.exhaustEmissionItemList = $scope.pp;
    $scope.majorEquipmentPart.shuinimo=$scope.shuinimo;   
    $scope.majorEquipmentPart.shengliaomo=$scope.shengliaomo;

    /*初始化隐藏项*/
	$scope.submitform=function(){
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
      senddata=angular.toJson(senddata);
      $.ajax({
    	 url: '/q/commitQuestionnaireContent.html',
    	 type: 'post',
    	 data: senddata,
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
    function get_result_view_template()
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
                                //events:editEvents
                            }
                            
                        ]
      }
    }

    var onlinelist_view = new MGeneralTableTool.MGeneralTable();
    onlinelist_view.CreateTable('online_table',get_result_view_template(),"./index.php?r=result/load-result-items",{},true);
  
  function codeFormatter(value,row,index){
    return index+1;
  }

  function operateFormatter(value, row, index) {
    if(value!='pass'){
      return ['<input type="button" value="查看" class="btn btn-info scan" data-method="post">']
    } else{
      return ['<input type="button" value="编辑" class="btn btn-primary edit" data-method="post">']
    }    
  }

 /* window.editEvents=function(){
    'click .edit': function (e,value,row,index) {
        window.open("./index.php?r=analyses/result-read&result_id=" + row.id,"_blank");
    }
  };*/
  $(window).bind('beforeunload',function(){
    return '您输入的内容尚未提交，确定离开此页面吗？';
  });
})