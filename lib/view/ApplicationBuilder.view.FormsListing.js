ApplicationBuilder.view.FormsListing = {
	
	grid : null
	
	,_grid : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.view, self = ApplicationBuilder.view.FormsListing;
		
		self.grid = that.layout.cells("a").attachGrid( );
		self.grid.setHeader( parent.settings.FormsListing.grid.headers );
		self.grid.setColumnIds( parent.settings.FormsListing.grid.ids );
		self.grid.setInitWidths( parent.settings.FormsListing.grid.widths );
		self.grid.setColAlign( parent.settings.FormsListing.grid.colaligns );
		self.grid.setColTypes( parent.settings.FormsListing.grid.coltypes );
		self.grid.setColSorting( parent.settings.FormsListing.grid.colsorting );
		self.grid.selMultiRows = true;
		self.grid.setDateFormat("%m-%d-%Y");
	
		//self._form_context_menu(uid);

		self.grid.init();
		
		self.grid.enableHeaderMenu();
		
		var agencies_combo = self.grid.getCombo(self.grid.getColIndexById("form_agency_id"));
		/*self.data_store[uid]["agencies"].forEach(function (agency, index, array_) {
			agencies_combo.put(agency.agency_id, agency.agency_name);
		});*/

		self.grid.attachHeader("#rspan,<input id='input_search_formlabel' type='text' style='width: 99%; border:1px solid gray;' onClick='(arguments[0]||window.event).cancelBubble=true;' onKeyUp='FormBuilder._feedGrid(  )'>,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan,#rspan");
		
		self.grid.attachEvent("onRowDblClicked", function (id, ind) {
			parent.Designer.start();
		});

		self.grid.attachEvent("onKeyPress", function (code, cFlag, sFlag) {
			if (code == 46) {
				//self.data._deleteForm(uid);
			}
			return true;
		});

		self.grid.attachEvent("onEnter", function (id, ind) {
			parent.Designer.start();
			return true;
		});
	}
	
	,render : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.view, self = ApplicationBuilder.view.FormsListing;
		
		
		self._grid();
		
		
		parent.model.datastore_forms.sync({
			component: ApplicationBuilder.view.FormsListing.grid // mandatory
			,component_id: "ApplicationBuilder.view.FormsListing.grid" // mandatory
			,onSuccess: function() {
				// if grid was successful synced, then
				// select the first record on the grid
				ApplicationBuilder.view.FormsListing.grid.selectRow(0, true, false, false);
	
	
			},
			onFail: function(reason) {
				console.log(reason);
					//CAIRS.hideDirections();
			}
		});
		
	}
};