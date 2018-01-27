$(document).ready(function() {
	var match = null;
	$('#matchingCarousel').carousel({
  		interval: false
	});

	$('.decisionButton').click(function() {
		var decisionPicked = $(this).data("decision");

			if (decisionPicked === "yes") {
				var currentListing = $(".housePicture:visible").data("listing-id");

				$.post("/api/match/check", {
					listingId: currentListing
				}, function(data, status) {
					match = data;
	    		}).then(function(data) {
	    			if (match !== null) {
	    			var listingPrice = numberWithCommas(parseInt(match.price)); 
	    				var listingInfo = $("<p>");
	    				var price = $("<p>");
	    				var matchAddress = $('<h5>');
	    				var matchImg = $('<img>');
	    			  matchAddress.html(`${match.address} ${match.city}, MO ${match.zipcode}`);
	    			  price.html(`Price: $${listingPrice}`);
	    			  matchImg.attr('src', match.picturePath);
	    			  matchImg.attr('id', 'matchImg');
	    			  listingInfo.html(`Bedrooms: ${match.bedrooms} Bathrooms: ${match.bathrooms}`);
	    			  $(".modal-body").append(matchAddress, listingInfo, price, matchImg);
	    	

	    			  $('#matchModal').modal('show');
	    			}

	    			console.log("checking for match for " + currentListing);
	    		});
			} 
			
		$('.carousel').carousel('next');

	});



	
	$('.carousel').on('slide.bs.carousel', function () {
  		$('#matchingCarousel').carousel({
  			interval: false
		});
	});

	$('.modal').on('shown.bs.modal', function () {
  		$('#myInput').trigger('focus');
	})

	$('.modal').on('hidden.bs.modal', function () {
		$(".modal-body").empty();
		$('#matchingCarousel').carousel({
  			interval: false
		});
	})

	$('.listingModule').first().addClass('active');

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

});
