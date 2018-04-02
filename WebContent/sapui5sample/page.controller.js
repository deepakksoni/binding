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
				address : {
					street : "#3B-Marathalli",
					pincode : "560017",
					state : "Karnataka",
					country : "India"
				},
				listData : [
				            {
				            "empId" : "001",
				            "empName" : "Deepak",
				            "mob": "8976900987",
				            "email" : "deepak@gmail.com"
				            },
				            {
					            "empId" : "002",
					            "empName" : "Ravi",
					            "mob": "9876789567",
					            "email" : "ravi@gmail.com"
					            }
				]
		};
		jsonModel.setData(jsonData);
		this.getView().setModel(jsonModel);
//		this.inputValidate();
		jsonModel.refresh();
	},
	
	
	
	//Element Binding 
	onItemSelected: function(oEvent) {
		var oSelectedItem = oEvent.getSource();
		var oContext = oSelectedItem.getBindingContext("products");
		var sPath = oContext.getPath();
		var oProductDetailPanel = this.getView().byId("productDetailsPanel");
		oProductDetailPanel.bindElement({ path: sPath, model: "" });
//		oProductDetailPanel.bindElement({ path: sPath, model: "modelName" });
	},
	
	getSelectedData : function(oEvent){
		debugger;
	},
	
//	<StandardListItem
//	title="{Name}"
//	description="{ProductId}"
//	icon="{ProductPicUrl}"
//	iconDensityAware="false"
//	iconInset="false"
//	press="handlePress"
//	detailPress="handleDetailPress" />
	
	listdataDisplay : function(sId, oContext) {
		var empId = oContext.getProperty("empId");
		var uControl ="";
		if( empId == "001" ){
			if (!this.stdList) {
				this.stdList = new sap.m.StandardListItem({
					title : "{empId}",
					description : "{empName}"
				});
				uControl = this.stdList;
			}
		}else{
			this.stdList = new sap.m.ObjectListItem({
				title : "{empId}",
				number : "{empName}"
			});
			uControl = this.stdList;
		}
		return this.stdList;
	}
	

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