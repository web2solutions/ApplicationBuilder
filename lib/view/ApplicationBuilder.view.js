ApplicationBuilder.view = {
	
	layout : null
	,status_bar : null
	
	,FormsListing : null
	
	
	
	,_layout : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.view;
		
		self.layout = new dhtmlXLayoutObject(that.configuration.container, that.settings.layout.pattern);
		self.layout.cells("a").hideHeader();
		
		self.layout.cells("b").setText("Visual Designer");
		
		self.layout.attachEvent("onExpand", function(id){
			if(id == "b")
				self.layout.cells("a").collapse();
			else if(id == "a")
				self.layout.cells("b").collapse();
			
		});
		
		
		
		
		self.status_bar = self.layout.attachStatusBar();
		self.status_bar.setText("<div id='status_info'>Initializing Application Builder</div><div id='expiration_info' title='time remaining for token expiration' class='expiration_info'></div><div id='user_info'><img id='user_info_status' src='" + that.settings.icons_path + "offline.png' /> <span>Not authorized yet</span></div><div id='data_transfer_info'> no data transferred</div><div id='socket_info' class='data_transfer_info'>socket: disconnected</div><div id='errors_info'>no errors</div>");
	
	
		
		
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.view;
		var dependencies = [
			that.settings.application_path + "lib/view/ApplicationBuilder.view.FormsListing.js"
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.view;
		CAIRS.showDirections("starting view ... ");
		self._loadDependencies( function()
		{
			self._layout();
			
			ApplicationBuilder.view.FormsListing.render();
			
			self.layout.cells("b").collapse();
			CAIRS.hideDirections();
		} );
	}
};