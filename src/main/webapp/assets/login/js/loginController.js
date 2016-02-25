var loginApp = angular.module("loginApp", []);  
loginApp.controller('loginController', function ($scope, $http) {  
    $scope.User={   
    }  
    $scope.Login=function() {  
        /*$http.post('/account/login', $scope.User).success(function (data,status) {  
            console.log('登录成功');  
        }).error(function (data,status) {  
            console.log('登录失败');  
        });  */
        console.log($scope.User);         
    }  
});  