
$(function()

{

		$('#GOT').hide();
		$('#Sherly').hide();

	$('#Submit').on('click',function()
		{
			var searchBox = $('#searchBox').val();

	   if(searchBox=="1")
	   {
	   	
	   	$('#GOT').show();
	   	$('#Sherly').hide();
	   }
	   else if(searchBox=="2")
	   {
	   	
	   		$('#GOT').hide();
	   		$('#Sherly').show();

	   }
			
		}); 

}
);

