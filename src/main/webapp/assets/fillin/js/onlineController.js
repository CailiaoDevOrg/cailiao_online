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
	$scope.addshengliaomo=function(){
		var shengliaomolen=$(".shengliaomo").length;
		var count=parseInt(shengliaomolen)-1;
		var shengliaomoIndex=parseInt(shengliaomolen)+1;
		var add_tr=['<tr class="shengliaomo need_recode_',
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
                                '<input type="button" value="删除" class="btn btn-warning" ng-click="deleteequipment()">',
                              '</td></tr>'].join('');
        $(".shengliaomo").eq(count).after(add_tr);
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

function deleteequipment(){
	var shengliaomolen=$(".shengliaomo").length;
	console.log(shengliaomolen);
	}

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