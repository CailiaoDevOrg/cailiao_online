scotchApp.controller('formController',function($scope,$http){
	/*$scope.p={year:2016}
	$scope.message=$scope.p;*/
	$scope.submitform=function(){
		$scope.obj = {questionnaire:"test"};
		$scope.obj.questionnaire=$scope.p;
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
        //var pre_code=angular.element(".need_recode_"+shengliaomoIndex).html();
        /*var pre_code=add_tr;
        console.log(pre_code);
        angular.element("#equipment").injector().invoke(function($compile){
        	var scope=angular.element("#equipment").scope();
        	$compile(pre_code)(scope);
        	console.log("test ok");
        	$(".shengliaomo").eq(count).after(pre_code);
        	console.log($scope.obj);

        });*/
        
       
	}

	
	$scope.deleteequipment=function(){
		console.log("xinhaolei");
	}


});

function deleteequipment(){
	var shengliaomolen=$(".shengliaomo").length;
	console.log(shengliaomolen);
	}
