$(document).ready(function() {
	$('.carousel').carousel({
  		interval: false
	});

	$('.decisionButton').click(function() {
		$('.carousel').carousel('next');
	});

});
