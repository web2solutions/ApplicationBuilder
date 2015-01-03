ApplicationBuilder.Rules = {
	
	view : null
	
	,dependencies_loaded : false
	
	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Rules;
		var dependencies = [
			that.settings.application_path + "lib/view/ApplicationBuilder.Rules.view.js"
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,start : function( ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Rules;
		if(!self.dependencies_loaded)
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				that.Rules.view.render();
			});
		else
			that.Rules.view.render();
	}
};