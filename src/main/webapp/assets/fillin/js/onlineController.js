var onlineApp=angular.module('onlineApp',[]);
onlineApp.controller('onlineController',function($scope,$http){
  $("#record_content").css("display","none");
  changedisplay($("#scanlist"),"none");
  changedisplay($("#scanlistdiv"),"block");
	$scope.submitform=function(){
		$scope.obj = {questionnaire:"test"};
		//$scope.obj.questionnaire=$scope.p;
		console.log($scope.obj);
		//console.log($scope.p);
		//console.log($scope.obj.questionnaire);
		$http.post('/', $scope.obj).success(function (data,status) {  
            console.log('提交成功');  
        }).error(function (data,status) {  
            console.log('提交失败');  
        });        
	};
  var shengliaomoIndex=0;//生料磨长度初始为1
  var shuinimoIndex=0;//水泥磨长度初始为1
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
    console.log("kkk");
  }

  $scope.showlist=function(){
    changedisplay($("#scanlistdiv"),"block");
    changedisplay($("#record_content"),"none");
    changedisplay($("#scanlist"),"none");
  }

  function changedisplay(elem,display){
    elem.css("display",display);
  }
});

    
  function deleteshengliaomo(n){//主要设备的删除
    var m=parseInt(n);
    $(".shengliaomo_"+n).remove();
  };
  function deleteshuinimo(n){//主要设备的删除
    var m=parseInt(n);
    $(".shuinimo_"+n).remove();
  };

$(function(){
  $("#online_table").bootstrapTable({
    url: "/assets/testjson/data.json", 
            dataType: "json",
            pagination: true, //分页
            pageList: [5, 10, 15],
            height:400, 
            search: true, //显示搜索框
            //sidePagination: "server", //服务端处理分页
                  columns: [
                          {
                             title: '姓名',
                              field: 'Name',
                              width:100
                             
                                                         

                          }, 
                          {
                              title: '城市',
                              field: 'City',
                              align: 'center',
                              width:100
                             
                          }, 
                          {
                              title: '国家',
                              field: 'Country',
                              align: 'center',
                              width:100
                          }
                          
                          
                      ]
  });
})