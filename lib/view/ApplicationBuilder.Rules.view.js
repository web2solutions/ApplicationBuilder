ApplicationBuilder.Rules.view = {
	
	tabbar : null
	
	,dependencies_loaded : false
	
	,_tabbar : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Rules.view;
		self.tabbar = that.Designer.view.tabbar.cells("ApplicationBuilder.Rules.view").attachTabbar(that.settings.Rules.tabbar);
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Rules.view;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Rules.view;
			
		self._tabbar();
		
		if(!self.dependencies_loaded)
		{
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				
			});
		}
		else
		{
			
	
		}
		
		
	}
};