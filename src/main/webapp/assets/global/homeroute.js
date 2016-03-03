// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
/*scotchApp.config(function($routeProvider){
$routeProvider
//route for the home page
.when('/',{
	templateUrl:'/jsp/pages/index.html',
	controller:'mainController'
})
.when('/home',{
	templateUrl:'/jsp/pages/index.html',
	controller:'mainController'
})
//route to the about page
.when('/online',{
	templateUrl:'/jsp/pages/online.html',
	controller:'onlineController'
})
//route for the contact page
.when('/offline',{
	templateUrl:'/jsp/pages/offline.html',
	controller:'offlineController'
})
.when('/upload',{
	templateUrl:'/jsp/pages/upload.html',
	controller:'uploadController'
})
.when('/inquiredata',{
	templateUrl:'/jsp/pages/inquire.html',
	controller:'inquiredataController'
})
});*/

// create the controller and inject Angular's $scope
