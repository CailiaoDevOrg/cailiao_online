<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8"%>
<%  
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";  
%>
<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>" />
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-table.min.css">
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap-table.css">
	<link rel="stylesheet" type="text/css" href="assets/fillin/css/record.css">
	<link href="assets/home/main.css" rel="stylesheet" media="screen, print">
	<link rel="stylesheet" type="text/css" href="assets/inquire/css/tab.css">
	<link rel="stylesheet" type="text/css" href="assets/global/global.css">
</head>
<body>
<div id="inquiredata">
	<div id="tab">
		<ul class="nav nav-tabs">
		   <li class="active"><a href="" class="tabclass">资源消耗</a></li>
			  <li><a href="" class="tabclass">能源消耗</a></li>
		    <li><a href="" class="tabclass">废气排放</a></li>
		    <li><a href="" class="tabclass">主要设备</a></li>
		</ul>
		<div id="TabContent">
		   <div class="tabcontent" id="resource_consume">
              <div class="container-fluid clinker">
                    <div class="accordion" id="accordion2">
                        <div class="accordion-group">
                          <div class="accordion-heading">
                            <a class="accordion-toggle ablock" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne" style="border-bottom:2px solid #C2D9A1;">
                              熟料烧成用原材料（含替代原料）
                            </a>
                          </div>
                          <div id="collapseOne" class="accordion-body collapse" style="height: 0px; ">
                            <div class="accordion-inner">
                              <div class="box">
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
                                            <td><input ng-model="p.clinker1name"></td>
                                            <td><input ng-model="p.clinker2name"></td>
                                            <td><input ng-model="p.clinker3name"></td>
                                            <td><input ng-model="p.clinker4name"></td>
                                          <td><input ng-model="p.clinker5name"></td>  
                                          </tr>
                                        <tr>
                                            <td class="col-md-2">消耗情况，万吨/年</td>
                                            <td><input ng-model="p.clinker1consume"></td>
                                            <td><input ng-model="p.clinker2consume"></td>
                                            <td><input ng-model="p.clinker3consume"></td>
                                            <td><input ng-model="p.clinker4consume"></td>
                                            <td><input ng-model="p.clinker5consume"></td>  
                                        </tr> 
                                        </tbody>
                                    </table>
                                   </div><!-- /.box-body -->
                              </div><!--box end-->
                            </div>
                          </div>
                        </div>
                        <div class="accordion-group fule">
                          <div class="accordion-heading">
                            <a class="accordion-toggle ablock" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo" style="border-bottom:2px solid #E4ADCD;">
                             燃料(含替代燃料)
                            </a>
                          </div>
                          <div id="collapseTwo" class="accordion-body collapse">
                            <div class="accordion-inner">
                              <div class="box">
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
                                              <td><input ng-model="p.fuel1name"></td>
                                              <td><input ng-model="p.fuel2name"></td>
                                              <td><input ng-model="p.fuel3name"></td>
                                              </tr>
                                              <tr>
                                                <td class="col-md-2">消耗情况，万吨/年</td>
                                                <td><input ng-model="p.fuel1consume"></td>
                                                <td><input ng-model="p.fuel2consume"></td>
                                                <td><input ng-model="p.fuel3consume"></td>
                                              </tr> 
                                          </tbody>
                                        </table>
                                      </div><!-- /.box-body -->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-group cement">
                          <div class="accordion-heading">
                            <a class="accordion-toggle ablock" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree" style="border-bottom:2px solid #F8CF91;">
                              水泥制成用原材料(含替代原料)
                            </a>
                          </div>
                          <div id="collapseThree" class="accordion-body collapse">
                            <div class="accordion-inner">
                                <div class="box">
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
                                                <td><input ng-model="p.cement1name"></td>
                                                <td><input ng-model="p.cement2name"></td>
                                                <td><input ng-model="p.cement3name"></td>
                                                <td><input ng-model="p.cement4name"></td>
                                                <td><input ng-model="p.cement5name"></td>
                                              </tr>
                                              <tr>
                                                <td class="col-md-2">消耗情况，万吨/年</td>
                                                <td><input ng-model="p.cement1consume"></td>
                                                <td><input ng-model="p.cement2consume"></td>
                                                <td><input ng-model="p.cement3consume"></td>
                                                <td><input ng-model="p.cement4consume"></td>
                                                <td><input ng-model="p.cement5consume"></td>
                                              </tr> 
                                          </tbody>
                                        </table>
                                      </div><!-- /.box-body -->
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
              </div>
              <div class="production clinker">
                <div class="input-group">
                  <span>熟料产量(万吨/年)</span><input type="text" ng-model="p.productionclinker">
                  <span>水泥产量(万吨/年)</span><input type="text" ng-model="p.productioncement">
                </div>
              </div>
		   </div>   
		   <div class="tabcontent" id="energy_comsume">
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
                              <td><input ng-model="p.shengfenfenmogongduandianhao"></td>
                              <td><input ng-model="p.kebishuliaozonghemeihao"></td>
                              <td><input ng-model="p.kebishuliaozonghedianhao"></td>
                              <td><input ng-model="p.kebishuliaozonghenenghao"></td>
                               <td><input ng-model="p.kebishuinizonghedianhao"></td>
                                <td><input ng-model="p.kebishuinizonghenenghao"></td>
                                 <td><input ng-model="p.danweishuliaoyurefadian"></td>
                            </tr> 
                          </tbody></table>
                        </div><!-- /.box-body -->
                </div>    
		   </div>
		   <div class="tabcontent" id="gas_emit">
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
                            喷氨(kg/t熟料):&nbsp;&nbsp;<input type="text" ng-model="p.ammonia_jetting">
                          </div>
                          <!--脱硝工艺-->
                          <div id="denitrification" class="form-inline">
                            脱硝工艺:
                            <div class="form-group checkbox">
                              <label><input type="checkbox" value="SNCR"  ng-model="p.denitrification_SNCR"/>SNCR </label>
                            </div>
                            <div class="form-group checkbox">
                              <label><input type="checkbox" value="fenjiranshao" ng-model="p.denitrification_fenjiranshao" />分级燃烧 </label>
                            </div>
                            <div class="form-group checkbox">
                              <label><input type="checkbox" value="yijiaer" ng-model="p.denitrification_yijiaer" /><label>1+2 </label>
                            </div>
                            <div class="form-group checkbox"><label><input type="checkbox" value="other" ng-model="p.denitrification_other" /><label>其他 </label>
                            </div>   
                          </div><!--脱销工艺-->
                        </div><!--otherdata end-->
                  </div><!--box end-->
		   </div>
		   <div class="tabcontent" id="main_equipment">
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
                              <td><input ng-model="p.shengliaomo_way"></td>
                              <td>φ<input ng-model="p.shengliaomo_model_0"></td>
                              <td><input ng-model="p.shengliaomo_number"></td>
                              <td>
                                <input type="button" value="增加" id="addshengliaomo" class="btn btn-info" ng-click="addshengliaomo()">
                              </td>
                              </tr>
                              <tr class="shuinimo">
                                <td>水泥磨</td>
                                <td><input ng-model="p.shuinimo_way"></td>
                                <td>φ<input ng-model="p.shuinimo_model_1" class="shuinimo_model"></td>
                                <td><input ng-model="p.shuinimo_number"></td>
                                <td>
                                  <input type="button" value="增加" id="addshuinimo" ng-click="addshuinimo()">
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
		</div>
	</div>
	<div class="submitForm">
		<form>
			<input type="submit" value="查询" class="btn btn-success">
		</form>
	</div>
  <div id="inquire_result">
      <table id="inquire_result_table">
      </table>
  </div>
</div>
</body>
</html>