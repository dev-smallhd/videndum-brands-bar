$(document).ready(function(){

	$(".videndum-menu h3").click(function()
	{

		if($(window).width()<=768)
		{
			if ($(this).hasClass('active')) {
					$(".videndum-menu h3").removeClass('active');
					$(".videndum-menu > li > ul").slideUp();
			}

			else {
					$(".videndum-menu h3").removeClass('active');
					$(".videndum-menu > li > ul").slideUp();
					$(this).parent().find('ul').slideDown();
					$(this).addClass('active');
			}
		}
	});

	$('.videndum-sites').click(function(){ menuactivity() });
	$('.close-videndum-menu').click(function(){ menuactivity() });
});

	$(window).resize(function(){
		if($(window).width()<=768)
		{
			$('ul.videndum-menu > li > ul').removeAttr('style');
		}
	});

	function menuactivity()
	{
		$('.videndum-list').slideToggle();
		$('.videndum-sites').toggleClass('active');
		$('.videndum-list').toggleClass('open');
	}
