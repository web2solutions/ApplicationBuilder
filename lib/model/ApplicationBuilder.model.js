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
	
	
	,schemas : {
		
		page : function( c ){
			
			if( typeof c.form_id === 'undefined')
			{
				return;	
			}
			
			if( typeof c.pagename === 'undefined')
			{
				return;	
			}
			
			if( typeof c.index === 'undefined')
			{
				c.index = 0;	
			}
			
			if( typeof c.tab_width === 'undefined')
			{
				c.tab_width = 100;	
			}
		
			properties = {
				page_id : "",
				form_id : "",
				pagename : "",
				index : "",
				tab_width : "",
				rule_action : "",
				rule_match : "",
				rule_enable : "",	
			}	
			
		}
		
		,field : function(){
			
		}	
		
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