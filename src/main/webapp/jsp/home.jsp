<%@ page contentType="text/html; charset=utf-8" language="java"%>
<%  
	String path = request.getContextPath();  
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";  
%>
<!DOCTYPE html>
<html lang="zh-CN" ng-app="scotchApp">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
<meta name="description" content="">
<meta name="author" content="">
<!-- 开启高速模式渲染页面 -->
<meta name="renderer" content="webkit">
<!-- 项目logo -->
<!-- <link rel="icon" href="../../favicon.ico"> -->
<title>我国水泥工业环境状况调查信息共享平台</title>
	
<!--   	 <script type="text/javascript" src="/assets/angularjs/route.js"></script> -->	
 	 
 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap.min.css">
 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap-table.min.css">
 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap-table.css">
 	 <link rel="stylesheet" type="text/css" href="/assets/fillin/css/record.css">
 	 <style type="text/css">
 	 	#content{ width: 80%; margin: 0 auto;}
 	 </style>
</head>
<body ng-controller="mainController">
	<div id="nav">
		<a href="#home" class="home">Home</a>
		<a href="#online">在线填写</a>
		<a href="#offline">下载填写</a>
		<a href="#upload">上传文档</a>
		<a href="#inquiredata">查询</a>
	</div>
	<div class="logintest"><a href="/jsp/login.jsp">登录</a></div>
	<div id="content">
		<div ng-view>

		</div>
	</div>
	<script type="text/javascript" src="/assets/jquery/jquery.min.js"></script>
  	 <script type="text/javascript" src="/assets/angularjs/angular.min.js"></script>
  	 <script type="text/javascript" src="/assets/angularjs/angular-route.min.js"></script>
  	 <script  type="text/javascript" src="/assets/global/homeroute.js"></script>
    <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/assets/fillin/js/formController.js"></script>
</body>
</html>
