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
	 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap.min.css">
	 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap-table.min.css">
	 	 <link rel="stylesheet" type="text/css" href="/assets/bootstrap/css/bootstrap-table.css">
	 	 <link rel="stylesheet" type="text/css" href="/assets/fillin/css/record.css">
	 	 <link href="/assets/home/main.css" rel="stylesheet" media="screen, print">
		<!--  <link href="/static/css/patternfly.min.css" rel="stylesheet" media="screen, print"> -->
		  
	 	 <style type="text/css">
	 	 	#content{ width: 80%; margin: 0 auto;}
	 	 	#nav{ height:70px; background-color:#3C6DB3; width: 100%; margin-top: -10px; padding: 0;}
	 	 	ul li{ list-style: none; line-height: 70px; float: left;}
	 	 	.navstyle a{color: #fff; display: inline-block;  font-size: 16px; padding:0 10px; text-decoration: none;width: 100px; text-align: center;}
	 	 	.navstyle a:hover{color: #fff; background: #CCCCFF; text-decoration: none; border-radius: 8px;}
	 	 	.logintest{ margin-top: 20px; margin-right: 30px;}
	 	 	.logintest a:hover{ border-radius: 0; background: none;}
	 	 </style>
	</head>
	<body ng-controller="mainController">
		<div id="nav" >
			<ul class="navstyle">
			   <li class="active"><a href="#home">首页</a></li>
			   <li><a href="#online">在线填写</a></li>
			   <li><a href="#offline">下载填写</a></li>
			   <li><a href="#upload">上传文档</a></li>
			   <li><a href="#inquiredata">查询</a></li>
			   <div class="pull-right logintest"><a href="/jsp/login.jsp">登录</a></div>
			</ul>
		</div>
		
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
	    <script src="/assets/home/jquery.dataTables.js"></script>
		  <script src="/assets/home/patternfly.min.js"></script>
	</body>
</html>
