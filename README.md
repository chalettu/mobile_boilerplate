mobile_boilerplate
==================


Javascript Libraries Used

Jquery V 2.0.0 http://jquery.com/
Jquery Mobile V 1.3.1 http://jquerymobile.com
Handlebars V 1.0.0.3 rc3 http://handlebarsjs.com/
HeadJs V .99 http://headjs.com/
Jquery Mobile Router https://github.com/azicchetti/jquerymobile-router




Folder Structure 
==================
css (This is where all CSS goes)
js
	/libs (App Libraries go here)
	/src (Templates and JS Page control logic goes here)
	   /templates (This is where your handlebar templates go)
	  
	  
Important files
===============

js/main.js - This file is used to load all js and CSS files used by the application . This file would be considered the app bootstrap

js/src/app.js - This file is the router for the mobile application.  

js/constants.js - This file contains a variable called environment that controls a lot of how the app functions for dev vs production.

