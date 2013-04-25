     var MyApp = window.MyApp || {};
 
            MyApp = {
                M : {
                //    data : new Data()
                },
                V : {

                },
                C : {

                }
            };

/*
This section is meant for you to write handler functions for what happens when a route is met	
	
*/

MyApp.C.renderIndexPage =function (type, match, ui) {
//var params=MyApp.C.router.getParams(match[1]);
console.log('loaded index page');

//console.log(params.querystring_variable_name);


};

MyApp.C.renderPage2 =function (type, match, ui) {
//var params=MyApp.C.router.getParams(match[1]);
console.log('loaded page 2');

loadPage2();
};
/********************
	
	This is where you define all the routes your app will have
	Router documentation can be found at https://github.com/azicchetti/jquerymobile-router
	
********************/

      MyApp.C.router = new $.mobile.Router({
                "index.html" : {
                 handler : MyApp.C.renderIndexPage, events : "s,h"  
                },
                "#index":{
	                handler : MyApp.C.renderIndexPage, events : "s,h" 
                },
                "page2.html" :  {
                    handler : MyApp.C.renderPage2, events : "s,h"
                },
                "search_filters.html(?:[?](.*))?" :  {
                    handler : MyApp.C.renderSearchOptionsPage, events : "s"
                }      
           	//	".": {
		   // handler : MyApp.C.pageInit, events: "bs"
		//}
            },'',{ajaxApp:true});            