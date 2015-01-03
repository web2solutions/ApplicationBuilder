ApplicationBuilder.Designer.view.PanelStructure = {
	
	toolbar : null
	
	,tree : null
	
	,_toolbar : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelStructure;
		
		parent.settings.Designer.PanelStructure.toolbar.icon_path = parent.settings.icons_path;
		
		self.toolbar = that.tabbar_tools.cells("structure").attachToolbar( parent.settings.Designer.PanelStructure.toolbar );
	}
	
	
	,_tree : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.PanelStructure;
		self.tree = that.tabbar_tools.cells("structure").attachTree();
		
		
		self.tree.setImagePath( parent.settings.dhtmlx_codebase_path + "imgs/csh_bluebooks/");
		self.tree.enableTreeImages(false);
		self.tree.enableTreeLines(true);
		self.tree.enableTextSigns(true);

		//self.tree.enableCheckBoxes(true, false);

		self.tree.loadJSONObject( parent.settings.Designer.PanelStructure.tree, function () {
			//console.log(self.model.conf_tree_form_library_field_category);
		});
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelStructure;
		var dependencies = [
			
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view.PanelStructure;
		
		self._toolbar();
		self._tree();
		
		
		
	}
};