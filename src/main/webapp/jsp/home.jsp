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
	 	 <link rel="stylesheet" type="text/css" href="/assets/inquire/css/tab.css">
		<!--  <link href="/static/css/patternfly.min.css" rel="stylesheet" media="screen, print"> -->
		<link rel="stylesheet" type="text/css" href="/assets/global/global.css">
		<link rel="stylesheet" type="text/css" href="/assets/Cikonss/cikonss.css">
	</head>
	<body ng-controller="mainController">
		<div id="nav">
		    <ul class="navstyle">
		       <li class="active"><a href="/jsp/home/index.jsp">首页</a></li>
		       <li><a href="javascript:void(0)" id="online_write">在线填写</a></li>
		       <li><a href="/jsp/offline.jsp">下载模板</a></li>
	       		<li><a href="/jsp/upload.jsp">上传问卷</a></li>
		       <div class="pull-right logintest"><a href="/jsp/login.jsp">登录</a><a><span class="glyphicon glyphicon-comment"></span></a></div>
		    </ul>
	    </div>
	    <div id="content">
			<div class="row">
				<ul>
					<li ng-repeat="item in TemplateList" class="col-sm-4">
						<div class="questionnarieName"><h3><a href="">{{item.name}}</a></h3></div>
						<div class="questionnarieId">已有<a style="color:red">{{item.id}}</a>份问卷提交</div>
						<div class="ques_description">{{item.description}}</div>
					</li>
				</ul>
			</div>
		</div>
		<div id="footer"></div>
		<script type="text/javascript" src="/assets/jquery/jquery.min.js"></script>
	  	 <script type="text/javascript" src="/assets/angularjs/angular.min.js"></script>
	  	 <script type="text/javascript" src="/assets/angularjs/angular-route.min.js"></script>
	    <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>	
	    <script type="text/javascript" src="/assets/home/mainController.js"></script>
	</body>
</html>
