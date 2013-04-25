function getTemplate(template_dir,template_file)
{
//	console.log('template_file '+template_file);
	var template;
	var template_source;
	var url='js/src/templates/'+template_dir+template_file;
	
	if (isProduction())
	{
		template=Handlebars.templates[template_file];
	}
	else
	{
		$.ajax({
		  url: url,
		  async:false,
	    data: {},
		  success: 
		   function(tmpl){
			
			  template_source=tmpl;
			  template=Handlebars.compile(template_source);
		   },
		  dataType: 'html'
		});
		
		
	}
	return template;
	
}