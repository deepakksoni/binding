sap.ui.controller("sapui5sample.page", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5sample.page
*/
	onInit: function() {
		var jsonModel = new sap.ui.model.json.JSONModel();
		var jsonData = {
				companyName : "SAP",
				data1 : 1123,
				data2 : 2222,
				listData : [
				            {
				            "empId" : "001",
				            "empName" : "Deepak"
				            },
				            {
					            "empId" : "002",
					            "empName" : "Ravi"
					            }
				]
		};
		jsonModel.setData(jsonData);
		this.getView().setModel(jsonModel);
		jsonModel.refresh();
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5sample.page
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5sample.page
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5sample.page
*/
//	onExit: function() {
//
//	}

});