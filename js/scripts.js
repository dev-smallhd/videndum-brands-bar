$(document).ready(function(){

	$(".vitec-menu h3").click(function()
	{

		if($(window).width()<=768)
		{
			if ($(this).hasClass('active')) {
					$(".vitec-menu h3").removeClass('active');
					$(".vitec-menu > li > ul").slideUp();
			}

			else {
					$(".vitec-menu h3").removeClass('active');
					$(".vitec-menu > li > ul").slideUp();
					$(this).parent().find('ul').slideDown();
					$(this).addClass('active');
			}
		}
	});

	$('.vitec-sites').click(function(){ menuactivity() });
	$('.close-vitec-menu').click(function(){ menuactivity() });
});

	$(window).resize(function(){
		if($(window).width()<=768)
		{
			$('ul.vitec-menu > li > ul').removeAttr('style');
		}
	});

	function menuactivity()
	{
		$('.vitec-list').slideToggle();
		$('.vitec-sites').toggleClass('active');
		$('.vitec-list').toggleClass('open');
	}
