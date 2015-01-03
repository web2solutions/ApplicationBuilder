ApplicationBuilder.view = {
	
	layout : null
	,toolbar : null
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
	
	
	,_toolbar : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.view;
		
		that.settings.toolbar.icon_path = that.settings.icons_path + "32px/";
		
		self.toolbar = self.layout.cells("a").attachToolbar( that.settings.toolbar );
		self.toolbar.setIconSize(32);
		
		self.toolbar.attachEvent("onClick", function (id) {
			if (id == "new_form") {
				that.Designer.start();
			}
			else if (id == "delete_form") {
				//self.data._deleteForm(uid);
			}
			else if (id == "form_builder") {
				that.Designer.start();
			}
			else if (id == "print_form_list") {
				//self.data._getFormsList( uid );
				self.grid[uid].toPDF('processors/dhx_pdf/generate.php');
			}
			else if (id == "library_field_maker") {
				self.library_fieldmaker_wrapper.start(	uid, 
					self.configuration[ uid ].username, 
					self.configuration[ uid ].agency_id, 
					self.configuration[ uid ].ConnID, 
					self.configuration[ uid ].ConnectionId, 
					self.configuration[ uid ].database	
				);
				
			}
			else if (id == "view_entries") {
				if (self.grid[uid].cells(self.grid[uid].getSelectedRowId(),21).getValue() == 'Yes') {
					self.entries._window_entries(uid, self.row_id[uid]);
				}else{
					dhtmlx.alert({
                            title:"Sync before!",
                            type:"alert-error",
                            text:"Before viewing the entries for this form, you need to sync it before on form builder."
                    });
				}
				
			}
		});
		
		//myToolbar.setIconsPath("[full path to icons image files directory]");
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
			self._toolbar();
			
			ApplicationBuilder.view.FormsListing.render();
			
			self.layout.cells("b").collapse();
			CAIRS.hideDirections();
		} );
	}
};