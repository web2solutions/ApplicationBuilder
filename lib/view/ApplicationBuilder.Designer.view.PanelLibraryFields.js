ApplicationBuilder.Designer.view.PanelLibraryFields = {
	
	toolbar : null
	,dataView : null
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelLibraryFields;
		
		parent.settings.Designer.PanelLibraryFields.toolbar.icon_path = parent.settings.icons_path;
		
		self.toolbar = that.tabbar_tools.cells("library_fields").attachToolbar( parent.settings.Designer.PanelLibraryFields.toolbar );
	}
	
	,_dataView : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelLibraryFields;
		self.dataView = that.tabbar_tools.cells("library_fields")
			.attachDataView( 
				parent.settings.Designer.PanelLibraryFields.dataView.settings 
			);
		//self.dataView.parse( parent.settings.Designer.PanelLibraryFields.dataView.data, "json");
		
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelLibraryFields;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelLibraryFields;
		self._toolbar();
		self._dataView();
	}
};