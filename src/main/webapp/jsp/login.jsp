<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<!-- saved from url=(0041)http://www.js-css.cn/divcss/login/login5/ -->
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录</title>
<meta name="keywords" content="">
<meta name="description" content="">
<meta charset="utf-8">
<link href="/assets/login/css/login.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/assets/login/js/jquery.min.js"></script>
</head>
<body ng-app="loginApp">
<div class="wrap">
  <div class="banner-show" id="js_ban_content">
    <div class="cell bns-01" style="display: block;">
      <div class="con"> </div>
    </div>
    <div class="cell bns-02" style="display: none;">
        <div class="con"> </div>
    </div>
    <div class="cell bns-03" style="display: none;">
      <div class="con">  </div>
    </div>
  </div>
  <div class="banner-control" id="js_ban_button_box"> <a href="javascript:;" class="left">左</a> <a href="javascript:;" class="right">右</a> </div>
  <script type="text/javascript">
                ;(function(){
                    
                    var defaultInd = 0;
                    var list = $('#js_ban_content').children();
                    var count = 0;
                    var change = function(newInd, callback){
                        if(count) return;
                        count = 2;
                        $(list[defaultInd]).fadeOut(400, function(){
                            count--;
                            if(count <= 0){
                                if(start.timer) window.clearTimeout(start.timer);
                                callback && callback();
                            }
                        });
                        $(list[newInd]).fadeIn(400, function(){
                            defaultInd = newInd;
                            count--;
                            if(count <= 0){
                                if(start.timer) window.clearTimeout(start.timer);
                                callback && callback();
                            }
                        });
                    }
                    
                    var next = function(callback){
                        var newInd = defaultInd + 1;
                        if(newInd >= list.length){
                            newInd = 0;
                        }
                        change(newInd, callback);
                    }
                    
                    var start = function(){
                        if(start.timer) window.clearTimeout(start.timer);
                        start.timer = window.setTimeout(function(){
                            next(function(){
                                start();
                            });
                        }, 8000);
                    }
                    
                    start();
                    
                    $('#js_ban_button_box').on('click', 'a', function(){
                        var btn = $(this);
                        if(btn.hasClass('right')){
                            //next
                            next(function(){
                                start();
                            });
                        }
                        else{
                            //prev
                            var newInd = defaultInd - 1;
                            if(newInd < 0){
                                newInd = list.length - 1;
                            }
                            change(newInd, function(){
                                start();
                            });
                        }
                        return false;
                    });
                    
                })();
   
   </script>
    <div class="container" id="login" ng-controller="loginController">
    <div class="register-box">
      <div class="reg-slogan">登录</div>
      <div class="reg-form" id="js-form-mobile"> <br>
        <br>
        <div class="cell">
          <input type="text" name="mobile" id="js-mobile_ipt" class="text" ng-model="User.username" placeholder="填写注册邮箱账户">
        </div>
        <div class="cell">
          <input type="password" name="passwd" class="text" ng-model="User.password" placeholder="输入密码">
      </div>
      <div>
          <input type="submit" name="mobile" id="js-mobile_ipt" class="button btn-green"value="登 录" style="width:326px;" ng-click="Login()">
        </div>
    </div>
  </div>
</div>
<script type="text/javascript" src="/assets/jquery/jquery.min.js"></script>
     <script type="text/javascript" src="/assets/angularjs/angular.min.js"></script>
     <script type="text/javascript" src="/assets/angularjs/angular-route.min.js"></script>
    <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/assets/login/js/loginController.js"></script>
</body>
</html>