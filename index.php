﻿<?php

$_SESSION["mapusername"] = "restoremleahy@adoptionassociates.net";
$_SESSION["mappassword"] = "2dnewszosNXN3t7k2OHiwt/g6MTN0OTZ3J3c1ePF6NOkn83JyZ0=";
$_SESSION['session_current_agency_id'] = 25;

$user = $_SESSION["mapusername"];
$password = $_SESSION["mappassword"];
$private_key  = $_SERVER['HTTP_USER_AGENT'];

$user_credential = base64_encode( base64_encode( $user ) . ":" . hash('SHA256',$private_key . "_" . $password ) );	

setcookie(
	"apitemp", 
	$user_credential, 
	time()+3600, 
	"/", 
	"." . $_SERVER['SERVER_NAME'], 0
);
?>

<html>
    <head>
		<meta http-equiv='cache-control' content='no-cache'>
        <meta http-equiv='expires' content='0'>
        <meta http-equiv='pragma' content='no-cache'>
        <meta charset="UTF-8">
        
        <title></title>
        
        <link href='http://fonts.googleapis.com/css?family=Lato|Raleway|Open+Sans&subset=latin,latin-ext,cyrillic-ext,cyrillic,vietnamese,greek-ext,greek' rel='stylesheet' type='text/css'>
        
        <!-- CAIRS Framework -->
		<script type="text/javascript" src="../CAIRS_Framework/CAIRS_fw.js"></script>
        
        <script type="text/javascript" >
            window.onload = function()
            {					
					var cdn_application_path = window.location.protocol + '//' + window.location.host + '/ApplicationBuilder/';
					CAIRS.environment = "production";
					
					/* load files and call FormBuilder */
					CAIRS.onDemand.load( [ cdn_application_path + "lib/controller/ApplicationBuilder.js" ], function ()
					{
						
						ApplicationBuilder.start( {  
                            agency_id : 25
							,base_path : window.location.protocol + '//' + window.location.host + '/'
						} );
						
					});
					
					
					
					var userSelection;
					if (window.getSelection) {
						userSelection = window.getSelection();
					}
					else if (document.selection) { // should come last; Opera!
						userSelection = document.selection.createRange();
					}
					
									
             }
			 window.onerror = function(msg, url, line, column, errorObj)
			 {
				dhtmlx.message( {type : "error", text : msg + ' ' + line + ' ' + column} );
				//dhtmlx.message( {type : "error", text : line} );
				console.log( errorObj );
			}
         </script>
     </head>
    <body>
    </body>
</html>