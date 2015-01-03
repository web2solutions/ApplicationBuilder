ApplicationBuilder.Designer.view.PanelFields = {
	
	toolbar : null
	,dataView : null
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelFields;
		
		parent.settings.Designer.PanelFields.toolbar.icon_path = parent.settings.icons_path;
		
		self.toolbar = that.tabbar_tools.cells("fields").attachToolbar( parent.settings.Designer.PanelFields.toolbar );
	}
	
	,_dataView : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelFields;
		self.dataView = that.tabbar_tools.cells("fields").attachDataView( parent.settings.Designer.PanelFields.dataView.settings );
		self.dataView.parse( parent.settings.Designer.PanelFields.dataView.data, "json");
		
		//console.log( document.getElementById("DesignerGrid") );
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelFields;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelFields;
		
		self._toolbar();
		
		window.setTimeout(function(){
			self._dataView();
		}, 1000);
		
	}
};