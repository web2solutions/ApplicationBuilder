ApplicationBuilder.Designer = {
	
	view : null
	
	,dependencies_loaded : false
	
	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		var dependencies = [
			that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.js"
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,start : function( ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		if(!self.dependencies_loaded)
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				that.Designer.view.render();
			});
		else
			that.Designer.view.render();
	}
};