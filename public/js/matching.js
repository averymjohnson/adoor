$(document).ready(function() {
	$('.carousel').carousel({
  		interval: false
	});

	$('.decisionButton').click(function() {
		$('.carousel').carousel('next');
	});

	
	$('.carousel').on('slide.bs.carousel', function () {
  		$('.carousel').carousel({
  			interval: false
		});
	});

	$('.listingModule').first().addClass('active');

});
