sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sampletestOData.controller.Main", {
		onInit: function() {
			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "/odataService",
				useBatch:false
			});
			this.getView().setModel(oModel);
		},
		binaryIMG: function(data) {
			var sTrimmedData = data.substr(104);
			return "data:image/png;base64," + sTrimmedData;
		}
	});
});