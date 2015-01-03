ApplicationBuilder.Designer.view.PanelComponents = {
	
	toolbar : null
	,dataView : null
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelComponents;
		
		parent.settings.Designer.PanelComponents.toolbar.icon_path = parent.settings.icons_path;
		
		self.toolbar = that.tabbar_tools.cells("components").attachToolbar( parent.settings.Designer.PanelComponents.toolbar );
	}
	
	,_dataView : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelComponents;
		self.dataView = that.tabbar_tools.cells("components")
			.attachDataView( 
				parent.settings.Designer.PanelComponents.dataView.settings 
			);
		self.dataView.parse( parent.settings.Designer.PanelComponents.dataView.data, "json");
		
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelComponents;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelComponents;
					
		new that.settings.Designer.PanelComponents.dataView.schema.icon({
			name: "phone"
			,label : "phone"
			//,img : ""
		});
		
		new that.settings.Designer.PanelComponents.dataView.schema.icon({
			name: "e-mail"
			,label : "e-mail"
			//,img : ""
		});
		
		self._toolbar();
		self._dataView();
	}
};