/**
 * Created by coder on 2015/10/19.
 */
var MTableBaseTool = (function($){

    var general_table_template = {
        showRefresh : true,
        showToggle : true,
        search : true,
        showColumns : true,
        pagination : true,
        //uniqueId : 'id',
        sidePagination : 'server',
        ajax : ajaxRequest,
        toolbar : '#toolbar1',
        classes : 'table table-striped table-hover table-no-bordered'
    };

    function MTableBase()
    {

    }

    MTableBase.prototype.merge_default_template = function(template)
    {
        for(var key in general_table_template)
        {
            if(!template.hasOwnProperty(key))
            {
                template[key] = general_table_template[key];
            }
        }
    };


    function get_ajax_data()
    {
        var csrf = getCsrf();
        return {_csrf:csrf};
    }

    MTableBase.prototype.initTable =  function initTable($table)
    {
        //var json = parseHashString(window.location.hash);
        //if(!('offset' in json)){
        //    json['offset'] = 0;
        //}
        //
        //if(!('limit' in json) || (json['limit'] != 10 && json['limit'] != 25)){
        //    json['limit'] = 10;
        //}
        //
        //$table[0].setAttribute('data-page-size',json['limit']);
        //$table[0].setAttribute('data-page-number',String(json['offset']/json['limit']+1));
        //
        //var hashString = jsonToHashString(json);
        //window.location = hashString;
    };


    function ajaxRequest(params) {
        var ajax_data = get_ajax_data();
        ajax_data.data = params.data;

        if(params.hasOwnProperty('before_func'))
        {
            params.before_func(params.before_param);
        }

        if(params.hasOwnProperty('custom'))
        {
            for(var key in params.custom)
            {
                ajax_data[key] = params.custom[key];
            }
        }

        $.post(params.url,ajax_data,function(data,status){
            var obj = JSON.parse(data);
            params.success(obj);
            params.complete();

            if(params.hasOwnProperty('after_func'))
            {
                params.after_func(params.after_param);
            }

        }).fail(function(){
            alert("load data failed!");
        });
    }

    function extend(Child,Parent)
    {
        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    }

    return {
        MTableBase : MTableBase,
        ajaxRequest : ajaxRequest,
        extend : extend
    };

})(jQuery);


//////////////////////////////////////////////////////////////////////////////////////////////////////////
var MCrossPageRecordTool = (function($){

    function operateFormatter(value, row, index) {
        return ['<a class="remove" data-pjax="0" aria-label="Remove" title="Remove" href="javascript:void(0)">',
            '<span class="glyphicon fa fa-remove icon-large"></span>',
            '</a>'].join('');
    }


    var select_view_table = '<table id="seltable"' +
        'data-classes="table table-striped table-hover table-no-bordered"' +
        'data-height="500"' +
        'data-unique-id="id"' +
        'style="margin:0;padding:0">' +
        '</table>';


    var MCrossPageRecord = function(table_id,remove_callback){
        var $this = this;

        window.operateEvents = {
            'click .remove': function (e,value,row,index) {
                if(!remove_callback.uncheck_table_item(row.id))
                    $this.table.bootstrapTable('removeByUniqueId',row.id);
            }
        };

        var select_view_table_template = {
            classes : 'table table-striped table-hover table-no-bordered',
            height : '500',
            uniqueId : 'id',
            columns:[
                [
                    {
                        field: 'id',
                        visible: false
                    },
                    {
                        title: '#',
                        field: 'operate',
                        events: operateEvents,
                        formatter: operateFormatter,
                        width: '35px'
                    },
                    {
                        title: 'Sample Name',
                        field: 'name'
                    }
                ]
            ]
        };

        this.table = $('#' + table_id);

        this.table.bootstrapTable(select_view_table_template);
    };

    MCrossPageRecord.prototype.addRecord = function(id,name){
        this.table.bootstrapTable('insertRow', {
            index: 0,
            row: {
                id: id,
                name: name,
            }
        });
    };

    MCrossPageRecord.prototype.removeRecord = function(id){
        this.table.bootstrapTable('removeByUniqueId',id);
    };

    MCrossPageRecord.prototype.getRecords = function(){
        var sel_data = this.table.bootstrapTable('getData');

        var data_arry = new Array();
        for(var i=0;i<sel_data.length;i++)
            data_arry[i] = sel_data[i].id;

        return data_arry;
    };

    MCrossPageRecord.prototype.getRecordItemData = function(id){
        return  this.table.bootstrapTable('getRowByUniqueId',id);
    };

    return {MCrossPageRecord:MCrossPageRecord};

})(jQuery);


////////////////////////////////////////////////////////////////////////////////////////////////
var MSampleViewTool = (function($){

    window.analyseEvents = {
        'click .analyse': function (e,value,row,index) {
            window.location = "./index.php?r=analyses/wizard&type=1&id=" + row.id;
        }
    };

    var rec = null;
    var $table = null;

    var MSampleView = function(){

    };

    MTableBaseTool.extend(MSampleView,MTableBaseTool.MTableBase);

    MSampleView.prototype.CreateTable = function(table_id,template,url,$rec_table,is_desc_editable){
        this.table = $('#' + table_id);
        this.initTable(this.table);


        this.merge_default_template(template);
        template.ajaxOptions = {url:url};
        this.table.bootstrapTable(template);

        $table = $('#' + table_id);
        this.table = $table;

        rec = $rec_table;

        var $table = this.table;
        if($rec_table != null)
        {
            $table.on('check.bs.table', function (e, row) {
                $rec_table.addRecord(row.id,row.name);
                row.select = true;
            });

            $table.on('uncheck.bs.table', function (e, row) {
                $rec_table.removeRecord(row.id);
                row.select = false;
            });

            $table.on('check-all.bs.table', function (e, rows) {
                var len = rows.length;
                for(var i=0;i<len;i++){
                    if(!rows[i].select){
                        $rec_table.addRecord(rows[i].id,rows[i].name);
                        rows[i].select = true;
                    }
                }
            });

            $table.on('uncheck-all.bs.table', function (e, rows) {
                var len = rows.length;
                for(var i=0;i<len;i++) {
                    $rec_table.removeRecord(rows[i].id);
                    rows[i].select = false;
                }
            });
        }


        if(is_desc_editable)
        {
            $table.on('editable-save.bs.table', function (e,field, row, oldValue, $el) {
                var post_data = new Object();
                var csrf = getCsrf();
                post_data._csrf = csrf;
                post_data.id = row.id;
                post_data.data = row[field];

                $.post("./index.php?r=samples/update-description",post_data,function(data,status){
                    var obj = JSON.parse(data);
                    if(!obj.update)
                    {
                        var rows_data = $table.bootstrapTable('getData');
                        var index = rows_data.indexOf(row);
                        $table.bootstrapTable('updateCell',{
                            rowIndex:index,
                            fieldName:field,
                            fieldValue:oldValue
                        });
                    }
                }).fail(function(){
                    var rows_data = $table.bootstrapTable('getData');
                    var index = rows_data.indexOf(row);
                    $table.bootstrapTable('updateCell',{
                        rowIndex:index,
                        fieldName:field,
                        fieldValue:oldValue
                    });
                });
            });
        }

    };

    MSampleView.prototype.uncheck_table_item = function(id)
    {
        var data_row = this.table.bootstrapTable('getRowByUniqueId',id);
        if(data_row == null || !data_row.hasOwnProperty('select'))
        {
            return false;
        }
        else
        {
            data_row.select = false;
            var tlb_data = this.table.bootstrapTable('getData');
            var index = tlb_data.indexOf(data_row);
            this.table.bootstrapTable('uncheck',index);
        }
    };

    MSampleView.prototype.getTable = function()
    {
        return this.table;
    };


    function selectFormatter(value,row,index){
        if(rec != null)
        {
            var data_row = rec.getRecordItemData(row.id);
            if(data_row != null && data_row.hasOwnProperty('name')){
                row.select = true;
                row.state = true;
                return true;
            }
        }
        return false;
    }

    return {
        MSampleView : MSampleView,
        selectFormatter : selectFormatter
    };

})(jQuery);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var MGeneralTableTool = (function(){
    var MGeneralTable = function(){

    };

    MTableBaseTool.extend(MGeneralTable,MTableBaseTool.MTableBase);

    MGeneralTable.prototype.CreateTable = function(table_id,template,url,custom,is_init){
        this.table = $('#' + table_id);

        if(is_init)
            this.initTable(this.table);

        this.merge_default_template(template);

        template.ajaxOptions = {url:url,custom:custom};

        if(this.hasOwnProperty('a_func'))
        {
            template.ajaxOptions.after_func = this.a_func;
            template.ajaxOptions.after_param = this.a_param;
        }

        if(this.hasOwnProperty('b_func'))
        {
            template.ajaxOptions.before_func = this.b_func;
            template.ajaxOptions.before_param = this.b_param;
        }

        this.table.bootstrapTable(template);
    };

    MGeneralTable.prototype.getTable = function(){
      return this.table;
    };

    MGeneralTable.prototype.setAfterLoadCallback = function(func,param){
        this.a_func = func;
        this.a_param = param;
    };

    MGeneralTable.prototype.setBeforeLoadCallback = function(func,param){
        this.b_func = func;
        this.b_param = param;
    };



    return {
        MGeneralTable : MGeneralTable
    };

})(jQuery);