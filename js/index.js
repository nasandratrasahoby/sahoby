$(document).ready(function(){
	var project = $('#project').html();
	var about = $('#about').html();
	var contact = $('#contact').html();

	$('.project').on('click',function(){
		$('.col-md-9').html(project);
	});

	$('.about').on('click', function(){
		$('.col-md-9').html(about);
	});

	$('.contact').on('click', function(){
		$('.col-md-9').html(contact);
	});

})