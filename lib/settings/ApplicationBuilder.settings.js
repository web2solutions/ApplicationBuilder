ApplicationBuilder.settings = {
	
	appName : "Application Builder"
	,version : 0.1
	
	,base_path : ""
	,application_path : ""	
	,icons_path : ""
	
	,layout : {
		pattern : "2U"
		,skin : "dhx_skyblue"	
	}
	
	,FormsListing : {
		grid : {
			headers: "ID,Form label,Form name,Form text,formindex,redirecturl,adminalert,autorespond,tiplocation,display,preview,nomultiple,captcha,key_id,Owner name,submissionmsg,displaycolumns,numofrecords,formtype,formdisplaytype,skin,Pregenerated Form",
			ids: "form_id,formlabel,formname,formtext,formindex,redirecturl,adminalert,autorespond,tiplocation,display,preview,nomultiple,captcha,key_id,form_agency_id,submissionmsg,displaycolumns,numofrecords,formtype,formdisplaytype,skin,has_json",
			widths: "90,*,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,120",
			colaligns: "right,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left",
			coltypes: "ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,coro,ro,ro,ro,ro,ro,ro,ro",
			colsorting: "int,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str"
		}
		
	}
	
	,Designer : {
		layout : {
			pattern : "3L"
			,skin : "dhx_skyblue"
		}	
		,tabbar : {
			skin:               "dhx_skyblue",  // string, tabbar skin, optional
			mode:               "top",          // string, top or bottom tabs mode, optional
			align:              "left",         // string, left or right tabs align, optional
			close_button:       true,           // boolean, render closing button on tabs, optional
			content_zone:       true,           // boolean, enable/disable content zone, optional
			arrows_mode:        "auto"          // mode of showing tabs arrows (auto, always)
		 
			,tabs: [ // tabs config
				{
					id:      "designer",      // tab id
					text:    "designer",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
				,{
					id:      "preview",      // tab id
					text:    "preview",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
			]
		 
		}
		,tabbar_tools : {
			skin:               "dhx_skyblue",  // string, tabbar skin, optional
			mode:               "top",          // string, top or bottom tabs mode, optional
			align:              "left",         // string, left or right tabs align, optional
			close_button:       true,           // boolean, render closing button on tabs, optional
			content_zone:       true,           // boolean, enable/disable content zone, optional
			arrows_mode:        "auto"          // mode of showing tabs arrows (auto, always)
		 
			,tabs: [ // tabs config
				{
					id:      "structure",      // tab id
					text:    "structure",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
				,{
					id:      "fields",      // tab id
					text:    "fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
				,{
					id:      "special_fields",      // tab id
					text:    "special fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
				,{
					id:      "library_fields",      // tab id
					text:    "library fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   true       // boolean, render close button on tab, optional
				}
			]
		 
		}
		,dataviewer_fields : {
			
		}
		,dhxFieldsxxxx : [
			{
				name: "input",
				templateControl: "<input type='text' style='width:100%'/>"
			},
			{
				name: "input",
				templateControl: ''
			},
			{
				name: "select",
				templateControl: "<select style='width:100%'></select>"
			},
			{
				name: "combo",
				templateControl: ''
			}
			, {
				name: "checkbox",
				templateControl: ''
			},
			{
				name: "btn2state",
				templateControl: ''
			},
			{
				name: "multiselect",
				templateControl: ''
			},
		
			{
				name: "button",
				templateControl: ''
			},
		
			{
				name: "textarea",
				templateControl: ''
			},
		
			{
				name: "calendar",
				templateControl: "<input type='text'  style='width:100%'/>"
			},
			{
				name: "colorpicker",
				templateControl: "<input type='text' style='width:100%'/>"
			},
			{
				name: "editor",
				templateControl: ''
			},
			{
				name: "file",
				templateControl: "<input type='file' style='width:100%' disabled/>"
			},
			{
				name: "label",
				templateControl: ""
			},
			{
				name: "password",
				templateControl: "<input type='text' style='width:100%'/>"
			},
			{
				name: "radio",
				templateControl: "<div style='text-align:left'><input style='margin-left:5px;' type='radio' /></div>"
			},
			{
				name: "upload",
				templateControl: ''
			}
		]
	}
	
};