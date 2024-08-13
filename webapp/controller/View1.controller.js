sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat",
],
function (Controller,DateFormat) {
    "use strict";

    return Controller.extend("grnupload.controller.View1", {
        onInit: function () {
            this.oModel = this.getOwnerComponent().getModel();
            this.excelModel = new sap.ui.model.json.JSONModel();
            this.getView().setModel(this.excelModel, "excelModel");
          //  this.readData();
        },
        onRefresh:function(){
            this.readData();
        },
        readData:function(){
            var that=this;
            that.oModel.read("/ZC_GRN_UPLD", {
                success: function(response) {
                    that.localModel = new sap.ui.model.json.JSONModel(response);
                    that.getView().setModel(that.localModel, "GrnModel");
                    
                    //that.getView().getModel("localModel").refresh(true);
                    
                },
                error: function(error) {
                    
                }
            });
        },
        formatDate(obj){
            if(obj !== null){
                var oDateFormat = DateFormat.getDateInstance({
                    pattern: "dd-MMM-yyyy" ///ddmmyyyy
                });
                return oDateFormat.format(obj);
            }else{
                return "";
            }
            
        },
        onUpload: function (e) {
            this._import(e.getParameter("files") && e.getParameter("files")[0]);
        },
    
        _import: function (file) {
            var that = this;
            var excelData = {};
            if (file && window.FileReader) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {
                        type: 'binary'
                    });
                    workbook.SheetNames.forEach(function (sheetName) {
                        // Here is your object for every sheet in workbook
                        that.excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    
                    });
                    // Setting the data to the local model 
                    that.excelModel.setSizeLimit(10000);
                    that.excelModel.setData({
                        items: that.excelData
                    });
                    that.excelModel.refresh(true);
                    
                };
                reader.onerror = function (ex) {
                    console.log(ex);
                };
                reader.readAsBinaryString(file);
            }
        },
        onPostExcelData:function(){
            var that=this;
            var UploadedData = this.getView().getModel("excelModel");
            var items = UploadedData.getData().items;
            var BusyDialog= new sap.m.BusyDialog();
            function convertToDateObject(dateString) {
                let [day, month, year] = dateString.split('.').map(Number);
                return new Date(year, month - 1, day);
            }
            var oYearFormat = DateFormat.getDateInstance({
                pattern: "yyyy" ///ddmmyyyy
            });
             
            
           this.DisplayModel= new sap.ui.model.json.JSONModel();
          
           this.PayloadData=[];
            for(var i=0;i<items.length;i++){
                var obj=items[i];
                var oPayload={};
                var dateObject='';
                var year='';
                if(obj['GR Date']!==''){
                    var dateObject = convertToDateObject(obj['GR Date']);
                    var year = oYearFormat.format(dateObject);
                }
               
                oPayload.Vbeln = obj['Vendor Inv No'];
                oPayload.Grnno = obj['GR No'];
                oPayload.Grndt = dateObject;
                oPayload.Mjahr = year;
                oPayload.Grqty = obj['Delivered Qty']!==""? parseInt(obj['Delivered Qty']) : 0;
                oPayload.Acqty = obj['Accepted qty']!==""? parseInt(obj['Accepted qty']) : 0;
                oPayload.Rjqty = obj['Rejected Qty']!==""? parseInt(obj['Rejected Qty']) : 0;
            
            this.PayloadData.push(oPayload);
            BusyDialog.open();
            this.oModel.create("/ZC_GRN_UPLD",oPayload,{
                success:function(oData,OResponse){
                    that.DisplayModel.setData({"results":that.PayloadData});
                    that.getView().setModel(that.DisplayModel,"GrnModel");
                    that.getView().getModel('GrnModel').refresh(true);
                    BusyDialog.close();
                    sap.m.MessageToast.show('Excel Data Uploaded Successfully');
                   
                },error:function(oErr){
                    BusyDialog.close();
                    sap.m.MessageToast.show(JSON.parse(oErr.responseText).error.message.value);
                 }
            });
        }
        },
    });
});
