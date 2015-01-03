ApplicationBuilder.Designer.view.PanelProperties = {
	
	toolbar : null
	
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelProperties;
		parent.settings.Designer.PanelProperties.toolbar.icon_path = parent.settings.icons_path;
		self.toolbar = that.layout.cells("c").attachToolbar( parent.settings.Designer.PanelProperties.toolbar );
		self.toolbar.setIconSize(32);
		self.toolbar.setAlign('right');
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelProperties;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelProperties;
		self._toolbar();
		
	}
};