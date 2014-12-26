var ApplicationBuilder = {
	
	configuration : null
	
	,settings : null
	
	,model : null
	
	,view : null
	
	,Designer : null
	
	
	,_loadDependencies : function( c, callBack ){
	
		var dependencies = [
			c.base_path + "ApplicationBuilder/css/ApplicationBuilder.css"
			,c.base_path + "ApplicationBuilder/codebase4.0/dhtmlx.css"
			,c.base_path + "ApplicationBuilder/codebase4.0/dhtmlx.js"
			,"//code.jquery.com/jquery-1.11.1.min.js"
			,c.base_path + "ApplicationBuilder/lib/controller/ApplicationBuilder.Designer.js"
			,c.base_path + "ApplicationBuilder/lib/settings/ApplicationBuilder.settings.js"
			,c.base_path + "ApplicationBuilder/lib/model/ApplicationBuilder.model.js"
			,c.base_path + "ApplicationBuilder/lib/view/ApplicationBuilder.view.js"
		];
		
		if( typeof JSON === 'undefined' )
		{
			dependencies.push( c.base_path + "ApplicationBuilder/js/json2.js" );
		}
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,start : function( configuration ){
		self = this;
		
		
		self.configuration = configuration;
		
		self.configuration.container = self.configuration.container || document.body;
		
		self._loadDependencies( configuration, function()
		{
			//CAIRS.hideDirections();
			CAIRS.init();
			self.settings.base_path = configuration.base_path;
			self.settings.application_path = self.settings.base_path + "ApplicationBuilder/";
			self.settings.icons_path = self.settings.application_path + "icons/";
	
			CAIRS.MAP.API.authorize({
				agency_id: configuration.agency_id,
				onSuccess: function (request)
				{
					
					self.model.start( function(){
						self.view.render();
					}, function(){
						alert("could not start model");
					});
				},
				onFail: function (request) {
					alert("not authorized");
				}
			});
			
			console.log( self.settings.icons_path );
			
		} );
		
		
		
		
		
	}
	
};