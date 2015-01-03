ApplicationBuilder.Designer.view.DesignerGrid = {

	dependencies_loaded : false
	
	
	,_loadDependencies : function( callBack ){
		var that = ApplicationBuilder, self = ApplicationBuilder.Designer;
		var dependencies = [
			that.settings.application_path + "js/draggabilly.pkgd.min.js"
		];
	
		CAIRS.onDemand.load( dependencies, function ()
		{
			if(callBack) callBack();
		});
	}
	
	,_create_grid : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.DesignerGrid, div_wrapper;
		
		div_wrapper = document.createElement("DIV");
        div_wrapper.setAttribute("class", 'designer_table');
        div_wrapper.setAttribute("id", 'DesignerGrid');
        
        div_wrapper.style.position = "absolute";
        //div_wrapper.style.top = "0";
        //div_wrapper.style.left = "0";
        //div_wrapper.style.zIndex = "999888";
        //div_wrapper.style.backgroundColor = "#000000";
        //div_wrapper.style.opacity = "0.5";
		
		document.body.appendChild(div_wrapper);
		
		that.layout.cells("a").attachObject("DesignerGrid");
		
		div_wrapper.style.width = "100%";
        div_wrapper.style.height = "100%";
		var children = document.getElementById("DesignerGrid").childNodes;
		for (var i = 0; i < children.length; i++) {
			var p = children[ i ]
			if(p.className == "draggie")
				p.addEventListener('click', function init() {
					p.removeEventListener('click', init, false);
					//p.removeEventListener('mousedown', init, false);
					p.className = p.className + ' resizable';
					var resizer = document.createElement('div');
					resizer.className = 'resizer';
					p.appendChild(resizer);
					console.log( p );
					ApplicationBuilder.Designer.view.DesignerGrid._resizer.element = p;
					resizer.addEventListener('mousedown', ApplicationBuilder.Designer.view.DesignerGrid._resizer.initDrag, true);
				}, false);
		}
		
		window.setTimeout(function(){
			//console.log( document.getElementById("DesignerGrid") );
			dhtmlx.DragControl.addDrop("DesignerGrid",{
				onDrop:function(source, target, d, e){
					
					console.log( source, target, d, e );
					
					var context = dhtmlx.DragControl.getContext();
					var item = context.from.get(context.source[0]);
					
					//console.log( context );
					//console.log( item );
					
					//layerX
			 
					var d = document.createElement("DIV");
					d.setAttribute("class", "draggie");
					d.setAttribute("id", dhx.uid);
					d.innerHTML = '<div class="total-centered">'+item.name+' field</div>';
					d.style.width = "200px";
					d.style.height = "25px";
					d.style.position = "absolute";
					d.style.clear = "both";
					target.appendChild(d);
					
					d.style.top = e.layerY + "px";
					d.style.left = e.layerX + "px";
					
					
					
					var p = d;
					
					new Draggabilly( d, {
						grid: [ 5, 5 ]
						,containment: '#DesignerGrid'
					});
					
					p.addEventListener('click', function init( event ) {
							p.removeEventListener('click', init, false);
							//p.removeEventListener('mousedown', Draggabilly.dragStart, false);
							//qevent.preventDefault();
							p.className = p.className + ' resizable';
							var resizer = document.createElement('div');
							resizer.className = 'resizer';
							p.appendChild(resizer);
							console.log( p );
							ApplicationBuilder.Designer.view.DesignerGrid._resizer.element = p;
							resizer.addEventListener('mousedown', ApplicationBuilder.Designer.view.DesignerGrid._resizer.initDrag, true);
					}, false);
				}
			});
		}, 500);
	}
	
	
	,_resizer : {
	
		startX : 0, startY : 0, startWidth : 0, startHeight : 0, element : null

		,initDrag : function(e) {
		   var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.DesignerGrid._resizer;
		   self.startX = e.clientX;
		   self.startY = e.clientY;
		   
		   
		   
		   //console.log( self.element );
		   
		   self.startWidth = parseInt(document.defaultView.getComputedStyle( self.element ).width, 10);
		   self.startHeight = parseInt(document.defaultView.getComputedStyle( self.element ).height, 10);
		   document.documentElement.addEventListener('mousemove', self.doDrag, false);
		   document.documentElement.addEventListener('mouseup', self.stopDrag, false);
		   
		}
		
		,doDrag : function (e) {
			var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.DesignerGrid._resizer;
		   self.element.style.width = (self.startWidth + e.clientX - self.startX) + 'px';
		   self.element.style.height = (self.startHeight + e.clientY - self.startY) + 'px';
		}
		
		,stopDrag : function (e) {
			var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.DesignerGrid._resizer;
			document.documentElement.removeEventListener('mousemove', self.doDrag, false);
			document.documentElement.removeEventListener('mouseup', self.stopDrag, false);
		}
		
	}
	
	,render : function(){
		var parent = ApplicationBuilder, that = ApplicationBuilder.Designer.view, self = ApplicationBuilder.Designer.view.DesignerGrid;
		
		
		
		if(!self.dependencies_loaded)
		{
			self._loadDependencies( function()
			{
				self.dependencies_loaded = true;
				
				self._create_grid();
				
			});
		}
		else
		{
			self._create_grid();
		}
		
		
		
		
	}
};