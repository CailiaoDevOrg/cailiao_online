var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");

  var shengliaomoIndex=0;//生料磨索引
  var shuinimoIndex=0;//水泥磨索引


  /*定义数据结构*/
   $scope.exhaustEmissionPart={
      ammoniaJetting:''
    };
  $scope.majorEquipmentPart={
    yaoTypeB:'',
    yaoTypeA:''
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
    /*var clinkerPart=[];
    if(clinker!=undefined){
      clinkerPart.push(clinker);
      }else{
        clinkerPart=[""];
      }*/

   // console.log(clinkerPart);
    //alert(angular.toJson($))
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
      
      //var data=JSON.stringify(datastr);
      var senddata={
        "id":007,
        "questionnaireTemplateId":22222,
        "cementFactoryId":'333',
        "productionLine":'东方一线',
        "jsonContent":datastr

      };
      senddata=JSON.stringify(senddata);
      //console.log(data);*/
      //console.log(datastr);
      $.post('/q/commitQuestionnaireContent.html',senddata,function(reponse,status){
        console.log("提交成功");
      }).fail(function(){
        console.log("提交失败");
      });
      
  };
  $scope.saveform=function(){
    $.post('/q/saveQuestionnaireContentTemp.html',{data:senddatastr},function(reponse,status){
        console.log("保存成功");
      }).fail(function(){
        console.log("保存失败");
      });
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
    });
  function codeFormatter(value,row,index){
    return index+1;

  }

  function operateFormatter(value, row, index) {
    if(value!='pass'){
      return ['<input type="button" value="编辑" class="btn btn-primary edit" disabled="disabled">']
    }else{
      return ['<input type="button" value="编辑" class="btn btn-primary" data-method="post">']
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