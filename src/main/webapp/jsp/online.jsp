<%@ page contentType="text/html; charset=utf-8" language="java"%>
<%  
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";  
%>
<!DOCTYPE html>
<html lang="zh-CN" ng-app="onlineApp">
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
          
         <style type="text/css">
            #content{ width: 80%; margin: 0 auto;}
            #nav{ height:70px; background-color:#3C6DB3; width: 100%; margin-top: -10px; padding: 0;}
            ul li{ list-style: none; line-height: 70px; float: left;}
            .navstyle a{color: #fff; display: inline-block;  font-size: 16px; padding:0 10px; text-decoration: none;width: 100px; text-align: center;}
            .navstyle a:hover{color: #fff; background: #CCCCFF; text-decoration: none; border-radius: 8px;}
            .logintest{ margin-top: 20px; margin-right: 30px;}
            .logintest a:hover{ border-radius: 0; background: none;}
            .small_input{ width: 80px;}
         </style>
    </head>
    <body ng-controller="onlineController">
        <div id="nav" >
          <ul class="navstyle">
             <li class="active"><a href="/jsp/home.jsp">首页</a></li>
             <li><a href="/jsp/online.jsp">在线填写</a></li>
             <li><a href="/jsp/offline.jsp">下载填写</a></li>
             <li><a href="/jsp/upload.jsp">上传文档</a></li>
             <li><a href="/jsp/inquiredata.jsp">查询</a></li>
             <div class="pull-right logintest"><a href="/jsp/login.jsp">登录</a></div>
          </ul>
        </div>
        <div id="content">
            <div id="scanlist" class="pull-left" style="width:100%;">
                <input type="button" value="已填列表" class="btn btn-info" ng-click="showlist()">
            </div>
            <div id="scanlistdiv">
                <div id="newinput" class="pull-left" style="width:100%;">
                    <input type="button" value="添加生产线" class="btn btn-info" ng-click="showrecord()">
                </div>
                <div id="tablelist">
                  <table id="online_table" class="table-bordered">
                    
                  </table>
                </div>
            </div>
            <div id="record_content" style="display:none;">   
                <div class="content-wrapper">
                        <!-- Main content -->
                        <section class="content">                             
                          <!-- Main row -->
                          <div class="row mainrow">
                            <h1 class="online_h1">水泥调查信息简表</h1>
                            <!--form表单开始-->
                            <form id="cement_info">
                              <div class="pre_set form-inline">
                                <div class="form-group">
                                  <label for="pre_set_year">年份<span style="color:red">*</span></label>
                                  <select ng-model="publicdata.year" id="pre_set_year" class="form-control">
                                  <!--填表年份-->
                                  <option value ="2016">2016</option>
                                  <option value ="2015">2015</option>
                                  <option value ="2014">2014</option>
                                  <option value="2013">2013</option>
                                  <option value="2012">2012</option>
                                  <option value="2011">2011</option>
                                </select>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="form-group">
                                  <label for="pre_set_tons">吨位<span style="color:red">*</span></label>
                                  <input type="text" id="pre_set_tons" ng-model="publicdata.tons" class="small_input" >
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="form-group">
                                  <label for="product_company_name">水泥厂名称<span style="color:red">*</span></label>
                                  <input type="text" id="product_company_name" ng-model="publicdata.product_company_name" >
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="form-group">
                                  <label for="product_line_name">生产线名称<span style="color:red">*</span></label>
                                  <input type="text" id="product_line_name" ng-model="publicdata.product_line_name" >
                                </div>
                              </div>
                              <!--年份和吨位预设置结束-->
                              <div class="resource">
                                 <!--clinker为熟料生成原材料-->
                                    <div class="clinker form-group">
                                        <div class="box">
                                          <div class="box-header with-border">
                                            <h3 class="box-title"><span style="border-bottom:2px solid #C2D9A1; padding-bottom:5px;">熟料烧成用原材料（含替代原料）</span></h3>
                                          </div><!-- /.box-header -->
                                          <div class="box-body">
                                            <table class="table table-bordered">
                                              <tbody>
                                                <tr>
                                                  <th> </th>
                                                  <th>原料1#</th>
                                                  <th>原料2#</th>
                                                  <th>原料3#</th>
                                                  <th>原料4#</th>
                                                  <th>原料5#</th>
                                                </tr>
                                                <tr>
                                                  <td class="col-xs-2">熟料名称</td>
                                                  <td><input ng-model="clinkername.clinker1name"></td>
                                                  <td><input ng-model="clinkername.clinker2name"></td>
                                                  <td><input ng-model="clinkername.clinker3name"></td>
                                                  <td><input ng-model="clinkername.clinker4name"></td>
                                                  <td><input ng-model="clinkername.clinker5name"></td>  
                                                </tr>
                                                <tr>
                                                  <td class="col-md-2">消耗情况，万吨/年</td>
                                                  <td><input ng-model="clinkerconsume.clinker1consume"></td>
                                                  <td><input ng-model="clinkerconsume.clinker2consume"></td>
                                                  <td><input ng-model="clinkerconsume.clinker3consume"></td>
                                                  <td><input ng-model="clinkerconsume.clinker4consume"></td>
                                                  <td><input ng-model="clinkerconsume.clinker5consume"></td>  
                                                </tr> 
                                              </tbody>
                                            </table>
                                          </div><!-- /.box-body -->
                                        </div>
                                        <!--熟料原材料结束-->
                                        <div class="fuel">
                                          <div class="box">
                                            <div class="box-header with-border">
                                              <h3 class="box-title"><span style="border-bottom:2px solid #E4ADCD; padding-bottom:5px;">燃料(含替代燃料)</span></h3>
                                            </div><!-- /.box-header -->
                                            <div class="box-body">
                                              <table class="table table-bordered">
                                                <tbody>
                                                  <tr>
                                                    <th> </th>
                                                    <th>原料1#</th>
                                                    <th>原料2#</th>
                                                    <th>原料3#</th>
                                                  </tr>
                                                  <tr>
                                                  <td class="col-md-2">原材料名称</td>
                                                  <td><input ng-model="fuel.fuel1name"></td>
                                                  <td><input ng-model="fuel.fuel2name"></td>
                                                  <td><input ng-model="fuel.fuel3name"></td>
                                                  </tr>
                                                <tr>
                                                  <td class="col-md-2">消耗情况，万吨/年</td>
                                                  <td><input ng-model="fuel.fuel1consume"></td>
                                                  <td><input ng-model="fuel.fuel2consume"></td>
                                                  <td><input ng-model="fuel.fuel3consume"></td>
                                                </tr> 
                                              </tbody></table>
                                            </div><!-- /.box-body -->
                                          </div>
                                        </div>
                                        <div class="cement">
                                          <div class="box">
                                              <div class="box-header with-border">
                                                  <h3 class="box-title"><span style="border-bottom:2px solid #F8CF91; padding-bottom:5px;">水泥制成用原材料(含替代原料)</span>
                                                  </h3>
                                              </div><!-- /.box-header -->
                                              <div class="box-body">
                                                <table class="table table-bordered">
                                                  <tbody>
                                                    <tr>
                                                      <th> </th>
                                                      <th>原料1#</th>
                                                      <th>原料2#</th>
                                                      <th>原料3#</th>
                                                      <th>原料4#</th>
                                                      <th>原料5#</th>
                                                    </tr>
                                                    <tr>
                                                    <td class="col-md-2">原材料名称</td>
                                                    <td><input ng-model="cement.cement1name"></td>
                                                    <td><input ng-model="cement.cement2name"></td>
                                                    <td><input ng-model="cement.cement3name"></td>
                                                    <td><input ng-model="cement.cement4name"></td>
                                                    <td><input ng-model="cement.cement5name"></td>
                                                    </tr>
                                                    <tr>
                                                      <td class="col-md-2">消耗情况，万吨/年</td>
                                                      <td><input ng-model="cement.cement1consume"></td>
                                                      <td><input ng-model="cement.cement2consume"></td>
                                                      <td><input ng-model="cement.cement3consume"></td>
                                                      <td><input ng-model="cement.cement4consume"></td>
                                                      <td><input ng-model="cement.cement5consume"></td>
                                                    </tr> 
                                                  </tbody>
                                               </table>
                                              </div><!-- /.box-body -->
                                              <div class="production">
                                                <div class="input-group">
                                                  <span>熟料产量(万吨/年)</span><span style="color:red">*</span><input type="text" ng-model="p.clinkerproduction">
                                                  <span>水泥产量(万吨/年)</span><span style="color:red">*</span><input type="text" ng-model="p.cementProduction">
                                                </div>
                                              </div>
                                           </div>
                                        </div>
                                    </div>
                              </div>
                              <!--资源消耗结束-->
                              <div class="energy">
                                    <div class="box">
                                            <div class="box-header with-border">
                                              <h3 class="box-title"><span style="border-bottom:2px solid #C7A4CC; padding-bottom:5px;">能源消耗</span></h3>
                                            </div><!-- /.box-header -->
                                            <div class="box-body">
                                              <table class="table table-bordered">
                                                <tbody>
                                                  <tr>
                                                    <th>项目</th>
                                                    <th>生料粉末工段电耗(kWh/t)</th>
                                                    <th>可比熟料综合煤耗(kgce/t)</th>
                                                    <th>可比熟料综合电耗(kWh/t) </th>
                                                    <th>可比熟料综合能耗(kgce/t)</th>
                                                    <th>可比水泥综合电耗(kWh/t)</th>
                                                    <th>可比水泥综合能耗(kgce/t)</th>
                                                    <th>单位熟料余热发电量(kWh/t)</th>
                                                  </tr>
                                                <tr>
                                                  <td >数值</td>
                                                  <td><input ng-model="p.powerConsumptionBySlfm"></td>
                                                  <td><input ng-model="p.coalConsumptionByKbsl"></td>
                                                  <td><input ng-model="p.powerConsumptionByKbsl"></td>
                                                  <td><input ng-model="p.energyConsumptionByKbsl"></td>
                                                   <td><input ng-model="p.powerConsumptionByKbsn"></td>
                                                    <td><input ng-model="p.energyConsumptionByKbsn"></td>
                                                     <td><input ng-model="p.powerGenerationUnit"></td>
                                                </tr> 
                                              </tbody></table>
                                            </div><!-- /.box-body -->
                                    </div>
                              </div>
                              <!--能源消耗结束-->
                              <div class="waste_gas">
                                  <div class="box">
                                        <div class="box-header with-border">
                                          <h3 class="box-title"><span style="border-bottom:2px solid #A6AFDA; padding-bottom:5px;">废气排放</span></h3>
                                        </div><!-- /.box-header -->
                                        <div class="box-body">  
                                          <table class="table table-bordered">
                                              <tr>
                                                <th rowspan="2" colspan="1">项目</th>
                                                <th colspan="5">颗粒物</th>
                                                <th>SO<span style="vertical-align:sub;">2</span></th>
                                                <th>NO<span style="vertical-align:sub;">x</span></th>  
                                              </tr>
                                              <tr> 
                                                <td>窑头</td>
                                                <td>窑尾</td>
                                                <td>水泥磨</td>
                                                <td>煤磨</td>
                                                <td>包装机*</td>
                                                <td>窑尾</td>
                                                <td>窑尾</td>
                                              </tr>
                                              <tr>
                                                <td>年排放量(吨/年)</td>
                                                <td><input ng-model="p.yearconsume_keli_yaotou"></td>
                                                <td><input ng-model="p.yearconsume_keli_yaowei"></td>
                                                <td><input ng-model="p.yearconsume_keli_shuinimo"></td>
                                                <td><input ng-model="p.yearconsume_keli_meimo"></td>
                                                 <td><input ng-model="p.yearconsume_keli_baozhuangji"></td>
                                                 <td><input ng-model="p.yearconsume_SO_yaowei"></td>
                                                 <td><input ng-model="p.yearconsume_NO_yaowei"></td>
                                              </tr> 
                                              <tr>
                                                <td >排放浓度(mg/m<span style="vertical-align:super">3</span>)</td>
                                                <td><input ng-model="p.emitdensity_keli_yaotou"></td>
                                                <td><input ng-model="p.emitdensity_keli_yaowei"></td>
                                                <td><input ng-model="p.emitdensity_keli_shuinimo"></td>
                                                <td><input ng-model="p.emitdensity_keli_meimo"></td>
                                                <td><input ng-model="p.emitdensity_keli_baozhuangji"></td>
                                                <td><input ng-model="p.emitdensity_SO_yaowei"></td>
                                                <td><input ng-model="p.emitdensity_NO_yaowei"></td>
                                              </tr>
                                              <tr>
                                                <td >除尘方式(电/袋)</td>
                                                <td><input ng-model="p.dedust_keli_yaotou"></td>
                                                <td><input ng-model="p.dedust_keli_yaowei"></td>
                                                <td><input ng-model="p.dedust_keli_shuinimo"></td>
                                                <td><input ng-model="p.dedust_keli_meimo"></td>
                                                <td><input ng-model="p.dedust_keli_baozhuangji"></td>
                                                <td>--</td>
                                                <td>--</td>
                                              </tr>   
                                          </table>
                                        </div><!-- /.box-body -->
                                        <!--喷氨-->
                                        <div class="otherdata">  
                                          <div id="ammonia_jetting">
                                            喷氨(kg/t熟料):&nbsp;&nbsp;<input type="text" ng-model="p.ammoniaJetting">
                                          </div>
                                          <!--脱硝工艺-->
                                          <div id="denitrification" class="form-inline">
                                            脱硝工艺:
                                            <div class="form-group checkbox">
                                              <label><input type="checkbox" value="SNCR"  ng-model="p.sNCR"/>SNCR </label>
                                            </div>
                                            <div class="form-group checkbox">
                                              <label><input type="checkbox" value="fenjiranshao" ng-model="p.fractionalCombustion" />分级燃烧 </label>
                                            </div>
                                            <div class="form-group checkbox">
                                              <label><input type="checkbox" value="yijiaer" ng-model="p.oneAndTwo" /><label>1+2 </label>
                                            </div>
                                            <div class="form-group checkbox"><label><input type="checkbox" value="other" ng-model="p.other" /><label>其他 </label>
                                            </div>   
                                          </div><!--脱销工艺-->
                                        </div><!--otherdata end-->
                                  </div><!--box end-->
                              </div>
                              <!--废气排放结束-->
                              <div class="equipment" id="equipment">
                                    <div class="box">
                                            <div class="box-header with-border">
                                              <h3 class="box-title"><span style="border-bottom:2px solid #FFE7B6; padding-bottom:5px;">主要设备</span></h3>
                                            </div><!-- /.box-header -->
                                            <div class="box-body">
                                              <table class="table table-bordered" id="equipment">
                                                <tbody>
                                                  <tr>
                                                    <th> 设备名称</th>
                                                    <th>粉磨方式</th>
                                                    <th>规格型号</th>
                                                    <th>数量</th>
                                                    <th>操作</th>
                                                  </tr>
                                                  <tr class="shengliaomo">
                                                  <td>生料磨</td>
                                                  <td><input ng-model="publicdata.majorEquipmentPart.shengliaomo_way"></td>
                                                  <td>φ<input ng-model="publicdata.majorEquipmentPart.shengliaomo_model_0"></td>
                                                  <td><input ng-model="majorEquipmentPart.shengliaomo_number"></td>
                                                  <td>
                                                    <input type="button" value="增加" id="addshengliaomo" class="btn btn-info" ng-click="addshengliaomo()">
                                                  </td>
                                                  </tr>
                                                  <tr class="shuinimo">
                                                    <td>水泥磨</td>
                                                    <td><input ng-model="majorEquipmentPart.shuinimo_way"></td>
                                                    <td>φ<input ng-model="majorEquipmentPart.shuinimo_model_1" class="shuinimo_model"></td>
                                                    <td><input ng-model="majorEquipmentPart.shuinimo_number"></td>
                                                    <td>
                                                      <input type="button" value="增加" id="addshuinimo" class="btn btn-info" ng-click="addshuinimo()">
                                                    </td>
                                                  </tr> 
                                                  <tr class="yao_type">
                                                    <td>窑规格</td>
                                                    <td>Ф<input type="text" ng-model="p.yao_type1_1">*<input ng-model="p.yao_type2_1">(m)</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div><!-- /.box-body -->
                                    </div>
                               </div>
                              <!--主要设备结束-->
                              <input type="submit" value="提 交" class="btn btn-success btn-lg" id="submit" ng-click="submitform()">
                            </form>
                          </div>
                        </section><!-- /.content -->
                </div><!-- /.content-wrapper -->
            </div>
        </div>
        <script type="text/javascript" src="/assets/jquery/jquery.min.js"></script>
         <script type="text/javascript" src="/assets/angularjs/angular.min.js"></script>
        <script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/assets/fillin/js/onlineController.js"></script>
        <script src="/assets/bootstrap/js/bootstrap-table.js"></script> 
         <script src="/assets/bootstrap/js/bootstrap-table-zh-CN.js"></script>
    </body>
</html>
