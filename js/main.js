if (isProduction())
{
	 h_runtime='js/libs/handlebars.runtime.js';
}
else
{
	h_runtime='js/libs/handlebars.js';
}

/*
	LETS LOAD THE CSS FILES HERE
*/

head.load("css/jquery.mobile-1.3.1.min.css");

/*
	LETS LOAD THE JS FILES OUR MOBILE APP NEEDS
*/



head.js(
	{handlebars :h_runtime },
    {jquery : 'js/libs/jquery-2.0.0.min.js'},
    {jqmr : 'js/libs/jquery.mobile.router.min.js'},
    {jqm : 'js/libs/jquery.mobile-1.3.1.min.js'},
    {common :'js/src/common.js'}
);

var controllers=['page2'];

var js_file='';
	for (var i=0;i<controllers.length;i++)
	{
	js_file='js/src/controllers/'+controllers[i]+'.js';
	//console.log(js_file);
	head.js(js_file);
	
	}


//init the app and router last
 head.js({app : 'js/src/app.js'});

