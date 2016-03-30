<%@ page contentType="text/html; charset=utf-8" language="java"%>
<%  
	String path = request.getContextPath();  
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";  
%>
<!DOCTYPE html>
<html lang="zh-CN" ng-app="offlineApp">
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
 		<link rel="stylesheet" type="text/css" href="/assets/global/global.css">	  
	
	</head>    
	<body ng-controller="offlineController">
		<div id="nav" >
	    <ul class="navstyle">
	       <li><a href="/jsp/home/index.jsp">首页</a></li>
	       <li><a href="/jsp/online.jsp">在线填写</a></li>
	       <li><a href="/jsp/offline.jsp">下载模板</a></li>
	       <li class="active"><a href="/jsp/upload.jsp">上传问卷</a></li>
	       <div class="pull-right logintest"><a href="/jsp/login.jsp">登录</a></div>
	       <div id="message"></div>
	    </ul>
</div>
	    <div id="content">
			<div id="upload" style=" margin-top:10px;" class="form-horizontal">	
				<form>
					<div class="form-group">
						    <input type="file" id="exampleInputFile">
					</div>
					<div class="form-group"><input type="submit" value="上传文件" class="btn btn-info"></div>
				</form>	
			</div>
		</div>
		<script type="text/javascript" src="/assets/jquery/jquery.min.js"></script>
	  	 <script type="text/javascript" src="/assets/angularjs/angular.min.js"></script>
	    <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
	      <script type="text/javascript" src="/assets/fillin/js/offlineController.js"></script>	
	</body>
</html>
