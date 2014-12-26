ApplicationBuilder.model = {
	
	datastore_forms : null
	
	,_datastore_forms : function( onSuccess, onFail ){
		var that = ApplicationBuilder, self = ApplicationBuilder.model;
		
		
		self.datastore_forms = new CAIRS.dataStore({
			data_set_name: "formmaker_properties"
			,primary_key: "form_id"
			,overwrite: true
			,api_service: {
				end_point: "/forms" // default API end point, use it when all end points are equal
				,collection_name: "forms" // API data collection name -> MANDATORY
				,api_payload: "columns=" + that.settings.FormsListing.grid.ids + "&order=" + JSON.stringify({ direction : 'DESC', orderby : 'form_id'}) // not mandatory
			} // not mandatory default false
	
			,onSuccess: function(dataset) {
				if(onSuccess) onSuccess();
			}
	
			,onFail: function(response) {
				if(onFail) onFail();
			}
		});	
		
	}
	
	,start : function( onSuccess, onFail ){
		var that = ApplicationBuilder, self = ApplicationBuilder.model;
		CAIRS.showDirections("starting model ... ");
		self._datastore_forms( function(){
				//CAIRS.hideDirections();
				
				if(onSuccess) onSuccess();
			}, function(){
				//CAIRS.hideDirections();
				if(onFail) onFail();
		} );
	}
};