
$(document).ready(function() {

	$('.carousel').carousel({
  		interval: false
	});

	$('.decisionButton').click(function() {
		var decisionPicked = $(this).data("decision");

		if (decisionPicked === "yes") {
			var currentListing = $(".housePicture:visible").data("listing-id");

			$.get("/api/check-for-match", currentListing, function() {
    		
			});
    		// }).then(function() {
    		// 	console.log("checking for match");
		    //     $('.carousel').carousel('next');
    		// });

		} else {
			$('.carousel').carousel('next');
		}
	});

	
	$('.carousel').on('slide.bs.carousel', function () {
  		$('.carousel').carousel({
  			interval: false
		});
	});

	$('.listingModule').first().addClass('active');

});
