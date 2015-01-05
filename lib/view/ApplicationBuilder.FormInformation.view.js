ApplicationBuilder.FormInformation.view = {
	
	form : null
	
	,dependencies_loaded : false
	
	,_form : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.FormInformation.view;
		self.form = that.Designer.view.tabbar.cells("ApplicationBuilder.FormInformation.view").attachForm(that.settings.FormInformation.form.template);
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.FormInformation.view;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.FormInformation.view;
			
		self._form();
		
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