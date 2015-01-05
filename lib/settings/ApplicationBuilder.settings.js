ApplicationBuilder.settings = {
	
	appName : "Application Builder"
	,version : 0.1
	
	,base_path : ""
	,application_path : ""	
	,icons_path : ""
	,dhtmlx_codebase_path : ""
	
	,layout : {
		pattern : "2U"
		,skin : "dhx_skyblue"	
	}
	
	,toolbar : {
		icon_path: "",
		items: [
			{
                "type": "button",
                "id": "new_form",
                "text": "create new form",
                "img": "add_form.png",
                "img_disabled": "add_form_dis.png"
				//,disabled : false
            },{
                id: "new_s1",
                type: "separator"
            },
			{
                "type": "button",
                "id": "form_builder",
                "text": "build form",
                "img": "builder.png",
                "img_disabled": "builder_dis.png"
				//,disabled : true
            },{
                "type": "button",
                "id": "view_entries",
                "text": "view entries",
                "img": "entries.png",
                "img_disabled": "entries_dis.png"
				,disabled : true
            },
			{
                "type": "button",
                "id": "delete_form",
                "text": "delete selected form",
                "img": "delete.png",
                "img_disabled": "delete_dis.png"
				,disabled : true
            },{
                id: "new_s2",
                type: "separator"
            },
			{
                "type": "button",
                "id": "print_form_list",
                "text": "print list of form",
                "img": "print.png",
                "img_disabled": "print_dis.png"
				,disabled : true
            },{
                id: "new_s3",
                type: "separator"
            },
			{
                "type": "button",
                "id": "library_field_maker",
                "text": "library field maker",
                "img": "library_field_maker.png",
                "img_disabled": "library_field_maker.png"
				//,disabled : true
            }
		]	
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
			close_button:       false,           // boolean, render closing button on tabs, optional
			content_zone:       true,           // boolean, enable/disable content zone, optional
			arrows_mode:        "auto"          // mode of showing tabs arrows (auto, always)
		 
			,tabs: [ // tabs config
				{
					id:      "ApplicationBuilder.FormInformation.view",      // tab id
					text:    "Form's Information",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "ApplicationBuilder.Designer.view",      // tab id
					text:    "Form's Visual Designer",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "ApplicationBuilder.Rules.view",      // tab id
					text:    "Form's Rules",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "preview",      // tab id
					text:    "Form's Previewer",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
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
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "fields",      // tab id
					text:    "fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "special_fields",      // tab id
					text:    "special fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				},{
					id:      "components",      // tab id
					text:    "components",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "library_fields",      // tab id
					text:    "library fields",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					//active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
			]
		 
		}
		
		,toolbar : {
			"icon_path": "",
			"items": [
				{
					"type": "button",
					"id": "save_form",
					"text": "save and sync form",
					"img": "save_and_sync.png",
					"img_disabled": "save_and_sync_dis.png",
					disabled : false
				}
			]
		}
		
		,PanelProperties : {
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "properties",
						"text": "Properties",
						//"img": "add.gif",
						//"img_disabled": "add.gif"
						//,disabled : false
					}
					,{
						"type": "button",
						"id": "global",
						"text": "Global",
						//"img": "add.gif",
						"//img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}	
		}
		
		
		,PanelStructure : {
		
			tree : {id:'0', item:[ 
				{id:'manage',  text:"Form's main UI", open : 1, select : 1, item:[ 
					{id:'page1',  text:"page one", item:[
					
						{id:'field1',  text:"field one", item:[] }
						,{id:'field2',  text:"field two", item:[] }
						,{id:'field2',  text:"field three", item:[] }
					
					] }
					,{id:'page2',  text:"page two", item:[] }
					,{id:'page3',  text:"page three", item:[] }
				]}
			]},
			
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "add",
						"text": "add page",
						"img": "add.gif",
						"img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}
			
		}
		
		,PanelFields : {
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "add",
						"text": "add field",
						"img": "add.gif",
						"img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}
			,dataView : { 
				settings : {
					type: {
						template: "#img# #label#",
						padding: 5,
						height: 25,
						width: 170
					},
					drag: true,
					select: true
				}, 
				data : [
					{
						name: "input",
						label : "<span class='dhx_field_selector'>input</span>",
						templateControl: "<input type='text' style='width:100%'/>"
						,img : ""
						,source : "fields"
					},
					{
						name: "select",
						label : "<span class='dhx_field_selector'>select</span>",
						templateControl: "<select style='width:100%'></select>"
						,img : ""
						,source : "fields"
					},
					{
						name: "combo",
						label : "<span class='dhx_field_selector'>combo</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					}
					, {
						name: "checkbox",
						label : "<span class='dhx_field_selector'>checkbox</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					}, {
						name: "radio",
						label : "<span class='dhx_field_selector'>radio</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
					{
						name: "btn2state",
						label : "<span class='dhx_field_selector'>btn2state</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
					{
						name: "multiselect",
						label : "<span class='dhx_field_selector'>multiselect</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
				
					{
						name: "button",
						label : "<span class='dhx_field_selector'>button</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
				
					{
						name: "textarea",
						label : "<span class='dhx_field_selector'>textarea</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
				
					{
						name: "calendar",
						label : "<span class='dhx_field_selector'>calendar</span>",
						templateControl: "<input type='text'  style='width:100%'/>"
						,img : ""
						,source : "fields"
					},
					{
						name: "colorpicker",
						label : "<span class='dhx_field_selector'>colorpicker</span>",
						templateControl: "<input type='text' style='width:100%'/>"
						,img : ""
						,source : "fields"
					},
					{
						name: "editor",
						label : "<span class='dhx_field_selector'>editor</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					},
					{
						name: "file",
						label : "<span class='dhx_field_selector'>file</span>",
						templateControl: "<input type='file' style='width:100%' disabled/>"
						,img : ""
						,source : "fields"
					},
					{
						name: "label",
						label : "<span class='dhx_field_selector'>label</span>",
						templateControl: ""
						,img : ""
						,source : "fields"
					},
					{
						name: "password",
						label : "<span class='dhx_field_selector'>password</span>",
						templateControl: "<input type='text' style='width:100%'/>"
						,img : ""
						,source : "fields"
					},
					
					{
						name: "upload",
						label : "<span class='dhx_field_selector'>upload</span>",
						templateControl: ''
						,img : ""
						,source : "fields"
					}
				]
			}
		}
		
		,PanelSpecialFields : {
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "add",
						"text": "add field",
						"img": "add.gif",
						"img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}
			,dataView : { 
				settings : {
					type: {
						template: "#img# #label#",
						padding: 5,
						height: 25,
						width: 170
					},
					drag: true,
					select: true
				}, 
				data : [
					{
						name: "fieldset",
						label : "<span class='dhx_field_selector'>fieldset</span>",
						templateControl: "<input type='text' style='width:100%'/>"
						,img : ""
						,source : "special_fields"
					},
					{
						name: "block",
						label : "<span class='dhx_field_selector'>block</span>",
						templateControl: "<select style='width:100%'></select>"
						,img : ""
						,source : "special_fields"
					},
					{
						name: "container",
						label : "<span class='dhx_field_selector'>container</span>",
						templateControl: ''
						,img : ""
						,source : "special_fields"
					},
					{
						name: "label",
						label : "<span class='dhx_field_selector'>label</span>",
						templateControl: ''
						,img : ""
						,source : "special_fields"
					}
				]
			}
		}
		
		
		,PanelComponents : {
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "add",
						"text": "add component",
						"img": "add.gif",
						"img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}
			,dataView : { 
				settings : {
					type: {
						template: "#img# #label#",
						padding: 5,
						height: 25,
						width: 170
					},
					drag: true,
					select: true
				}, 
				data : [ ]
				,schema : {
					icon : function( c ){
						var holder = ApplicationBuilder.settings.Designer.PanelComponents.dataView,
							source = "components";
						
						if( typeof c.name === 'undefined')
						{
							dhtmlx.message({
								type: "error",
								text: "You can't create a icon for "+source+" without a name"
							});
							return;	
						}
						
						if( typeof c.label === 'undefined')
						{
							dhtmlx.message({
								type: "error",
								text: "You can't create a icon for "+source+" without a label"
							});
							return;	
						}
						
						c.label = "<span class='dhx_field_selector'>"+c.label+"</span>";
						
						c.img = c.img || "";
						c.source = source;
						
						ApplicationBuilder.settings.Designer.PanelComponents.dataView.data.push( c );
					}
				}
			}
		}
		
		,PanelLibraryFields : {
			toolbar : {
				icon_path: "",
				items: [
					{
						"type": "button",
						"id": "add",
						"text": "add field",
						"img": "add.gif",
						"img_disabled": "add.gif"
						//,disabled : false
					}
				]	
			}
			,dataView : { 
				settings : {
					type: {
						template: "#img# #label#",
						padding: 5,
						height: 25,
						width: 170
					},
					drag: true,
					select: true
				}, 
				data : [ ]
			}
		}
	}
	
	
	,Rules : {
		layout : {
			pattern : "3L"
			,skin : "dhx_skyblue"
		}	
		,tabbar : {
			skin:               "dhx_skyblue",  // string, tabbar skin, optional
			mode:               "top",          // string, top or bottom tabs mode, optional
			align:              "left",         // string, left or right tabs align, optional
			close_button:       false,           // boolean, render closing button on tabs, optional
			content_zone:       true,           // boolean, enable/disable content zone, optional
			arrows_mode:        "auto"          // mode of showing tabs arrows (auto, always)
		 
			,tabs: [ // tabs config
				{
					id:      "fields",      // tab id
					text:    "Fields's rules",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  true,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "pages",      // tab id
					text:    "Pages's rules",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
				,{
					id:      "notifications",      // tab id
					text:    "Notifications's rules",    // tab text
					width:   null,      // numeric for tab width or null for auto, optional
					index:   null,      // numeric for tab index or null for last position, optional
					active:  false,      // boolean, make tab active after adding, optional
					enabled: true,     // boolean, false to disable tab on init
					close:   false       // boolean, render close button on tab, optional
				}
			]
		 
		}
		
	}
	
	,FormInformation : {
		form : {
			"template": [
				{
					type: "settings",
					position: "label-left",
					labelWidth: 160,
					inputWidth: 230
				}
				,{name: "form_id", type: 'hidden', label: 'form_id:', value : -1, tooltip : ""}
				,{type: "hidden", name: 'formname', label: 'Form name:', value : "", tooltip : "This field is automatically filled. Start on next field.", readonly : true, info : 1, required : 1}
				,{type: "input", name: 'formlabel', label: 'Form Label:', value : "", tooltip : "Provide the name/label of the form for displaying on screen", required: true, validate: 'NotEmpty', info : 1, required : 1}
						,{type: "input", name: 'formtext', label: 'Form text:', value : "", tooltip : "", rows:5}
						
						/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
						,{name: "captcha", type: 'hidden', label: 'captcha:', value : "", tooltip : ""}
						,{name: "key_id", type: 'hidden', label: 'key_id:', value : "", tooltip : ""}
						,{name: "form_agency_id", type: 'hidden', label: 'form_agency_id:', value : "", tooltip : ""}
						,{name: "numofrecords", type: 'hidden', label: 'numofrecords:', value : "", tooltip : ""}
						//,{name: "formtype", type: 'hidden', label: 'formtype:', value : "", tooltip : ""}
						//,{name: "formdisplaytype", type: 'hidden', label: 'formdisplaytype:', value : "", tooltip : ""}
						
						,{type: "input", name: 'submissionmsg', label: 'Submission Message:', value : "", tooltip : ""}
						
						,{type: "combo", name: 'formtype', label: 'Form Type:',  options:[
								{text: "Normal form", value: "1"}
							  ,{text: "Payment Form", value: "2"}
							  ,{text: "Parent Reporting Form", value: "3"}
							], tooltip : ""
						}
						
						,{type: "hidden", name: 'formdisplaytype', value : "1", label: 'Form Display Type(deprecated*):'}
						
						,{type: "label", label: "Type of Email Messages:", labelWidth: 400, list:[
								{
									type: "settings",
									position: "label-right",
									labelWidth: 290,
									inputWidth: 20
								},
								{type: "hidden", name: "adminalert", value: "", label: "Notify Admin"},
								{type: "checkbox", name: "adminalert_checkbox", value: "Y", label: "Notify Admin", trigger : "adminalert"},
								{type: "hidden", name: "autorespond", value: "", label: "Send Autoresponder"},
								{type: "checkbox", name: "autorespond_checkbox", value: "Y", label: "Send Autoresponder", trigger : "autorespond"},
						]}
						,{type: "hidden", value : "A", label: "Location of Tips (deprecated*):", labelWidth: 400}
						,{type: "combo", name: 'skin', label: 'Form skin:',  options:[
								{text: "skyblue", value: "dhx_skyblue"}
							  ,{text: "web", value: "dhx_web"}
							  ,{text: "terrace", value: "dhx_terrace"}
							], tooltip : ""
						}
						,{type:"newcolumn", offset:60}
						,{type: "label", label: "Form Columns:", labelWidth: 400, list:[
								{
									type: "settings",
									position: "label-right",
									labelWidth: 290,
									inputWidth: 20
								},
								{type: "radio", name: "displaycolumns", value: "S", label: "Single", checked : true},
								{type: "radio", name: "displaycolumns", value: "D", label: "Double"}
								
						]}
						,{type: "hidden", label: "Form Display:", value: "S", labelWidth: 400}
						
						,{type: "hidden", name: "preview", value: "", label: "Show Preview Button:"}
						,{type: "checkbox", name: "preview_checkbox", value: "Y", label: "Show Preview Button:", trigger: "preview"}
						
						,{type: "hidden", name: "nomultiple", value: "", label: "Submission Restriction:"}
						,{type: "checkbox", name: "nomultiple_checkbox", value: "Y", label: "Submission Restriction:", trigger : "nomultiple"}
						
						,{type: "label", label: "Upon Submission:", labelWidth: 400, list:[
								{
									type: "settings",
									position: "label-right",
									labelWidth: 290,
									inputWidth: 20
								},
								{type: "radio", name: "formindex", value: "D", label: "Direct user to Web Reply page (see Autoresponders)", checked : true},
								{type: "radio", name: "formindex", value: "R", label: "Redirect user to", list:[
									{
										type: "settings",
										position: "label-right",
										labelWidth: 0,
										inputWidth: 280
									},
									{type: "input", name: 'redirecturl', label : "Redirect user to URL", value : "", tooltip : ""}
								]},
						]}
						
						
			]
		}
	}
	
};