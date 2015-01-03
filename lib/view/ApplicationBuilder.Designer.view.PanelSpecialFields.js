ApplicationBuilder.Designer.view.PanelSpecialFields = {
	
	toolbar : null
	,dataView : null
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelSpecialFields;
		
		parent.settings.Designer.PanelSpecialFields.toolbar.icon_path = parent.settings.icons_path;
		
		self.toolbar = that.tabbar_tools.cells("special_fields").attachToolbar( parent.settings.Designer.PanelSpecialFields.toolbar );
	}
	
	,_dataView : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelSpecialFields;
		self.dataView = that.tabbar_tools.cells("special_fields")
			.attachDataView( 
				parent.settings.Designer.PanelSpecialFields.dataView.settings 
			);
		self.dataView.parse( parent.settings.Designer.PanelSpecialFields.dataView.data, "json");
		
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelSpecialFields;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelSpecialFields;
		self._toolbar();
		self._dataView();
	}
};