ApplicationBuilder.Designer = {
	
	inited : false
	
	,configuration : null
	
	,settings : null
	
	,model : null
	
	,view : null
	
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
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		
		that.view.layout.cells("b").expand();
		
		that.Designer.view.render();
		
		self.inited = true;
	}
	
	,start : function( ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		
		
		if(!self.dependencies_loaded)
		{
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				
				self.render();
				
			});
		}
		else
		{
			self.render();
		}
	}
	
	
	,show : function( configuration ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		
		
		if(!dependencies_loaded)
		
		
		that.view.layout.cells("b").expand();
	}
	
};