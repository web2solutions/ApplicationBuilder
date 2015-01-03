ApplicationBuilder.Designer.view = {
	
	layout : null
	,tabbar : null
	,tabbar_tools : null
	
	,PanelProperties : null
	,PanelFields : null
	,DesignerGrid : null
	,PanelStructure : null
	
	,dependencies_loaded : false
	
	,_tabbar : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view;
		self.tabbar = that.view.layout.cells("b").attachTabbar(that.settings.Designer.tabbar);
		
	}
	
	,_layout : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view;
		self.layout = self.tabbar.cells("designer").attachLayout(that.settings.Designer.layout);
		self.layout.setAutoSize("a", "a;c");
		self.layout.cells("a").hideHeader();
		self.layout.cells("c").hideHeader();
		self.layout.cells("b").setText("Designer tools");
		self.layout.cells("b").setWidth(400);	
		self.layout.attachEvent("onExpand", function(id){
			/*if(id == "b")
				self.layout.cells("a").collapse();
			else if(id == "a")
				self.layout.cells("b").collapse();
			*/
		});
	}
	

	,_tabbar_tools : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view;
		self.tabbar_tools = self.layout.cells("b").attachTabbar(that.settings.Designer.tabbar_tools);
	}


	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view;
		var dependencies = [
			that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelProperties.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.DesignerGrid.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelStructure.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelFields.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelSpecialFields.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelComponents.js"
			,that.settings.application_path + "lib/view/ApplicationBuilder.Designer.view.PanelLibraryFields.js"
			
			,that.settings.application_path + "lib/view/ApplicationBuilder.Rules.view.js"
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,render : function(){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer.view;
		if(!self.dependencies_loaded)
		{
			
			
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				self._tabbar();
				self._layout();
				self._tabbar_tools();
				self.PanelProperties.render();
				self.DesignerGrid.render();
				self.PanelStructure.render();
				self.PanelFields.render();
				self.PanelSpecialFields.render();
				self.PanelComponents.render();
				self.PanelLibraryFields.render();
				
				that.Rules.view.render();
			});
		}
		else
		{
			self._tabbar();
			self._layout();
			self._tabbar_tools();
			self.PanelProperties.render();
			self.DesignerGrid.render();
			self.PanelStructure.render();
			self.PanelFields.render();
			
			that.Rules.view.render();
		}
		
		that.view.layout.cells("b").expand();
	}
};