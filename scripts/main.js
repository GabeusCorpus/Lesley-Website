/* Awesome javascripts for an awesome lady */

$(document).ready(function(){

//First, UI tasks go up here. Let's activate some tabs.

  $('#tabnav a').click(function (e) {
  e.preventDefault();
  console.log("Set it up!");
  $(this).tab('show');
	});
// And now set the default tab

$('#tabnav #shop').tab('show');	
	

console.log("Let's get this party started");
 $("#amount").load("https://openapi.etsy.com/v2/listings/active?api_key=u6f1pm6ixmrjlifnxm5xca51");
 
 
 
});