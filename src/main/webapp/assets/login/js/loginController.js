var loginApp = angular.module("loginApp", []);  
loginApp.controller('loginController', function ($scope, $http) {  
    $scope.user='';
    $scope.password='';
    $scope.Login=function() { 
    if(($scope.user!=='admin')&&($scope.password!=='admin')){
        alert("用户名或密码错误")
    }else{
        window.location.href='/jsp/home/index.jsp';
        console.log('登录成功');
    }
        /*$http.post('/account/login', $scope.User).success(function (data,status) {  
            console.log('登录成功');  
        }).error(function (data,status) {  
            console.log('登录失败');  
        });        */
        
    }  
});  