/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "grnupload/model/models"
],
function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("grnupload.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

              // enable routing
            this.getRouter().initialize();
             
            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            var Jquerypath=sap.ui.require.toUrl("grnupload/model/jquery.min.js")
            var Jszippath=sap.ui.require.toUrl("grnupload/model/jszip.js")
            var xlsxpath=sap.ui.require.toUrl("grnupload/model/xlsx.js")
           
            jQuery.sap.includeScript(Jquerypath);
             jQuery.sap.includeScript(Jszippath);
             jQuery.sap.includeScript(xlsxpath);
        }
    });
}
);