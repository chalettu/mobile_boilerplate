function loadPage2()
{
	var sample_template=getTemplate('','test_template.html');
	var val={ menu_items:["menu1","menu2","menu"]};
	var test_html=sample_template(val);
	console.log(test_html);
	$("#page_2_content").html(test_html);
	$("#sample_list").listview({ inset: true });

}