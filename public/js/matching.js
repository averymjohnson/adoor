
$(document).ready(function() {
	var match = null;
	$('.carousel').carousel({
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
	    			console.log(match);
	    		}).then(function(data) {
	    			if (match !== null) {
	    			  $("#matchAddress").html(`${match.address} ${match.city}, MO ${match.zipcode}`);
	    			  var listingInfo = $("<p>");
	    			  listingInfo.html(`bedrooms: ${match.bedrooms} bathrooms: ${match.bathrooms}`);
	    			  $(".modal-body").prepend(listingInfo);
	    			  initMap();

	    			  function initMap() {
				        var uluru = {lat: match.latitiude, lng: match.longitiude};
				        var map = new google.maps.Map(document.getElementById('map'), {
				          zoom: 4,
				          center: uluru
				        });
				        var marker = new google.maps.Marker({
				          position: uluru,
				          map: map
				        });
				      }

	    			  $('#matchModal').modal('show');
	    			}

	    			console.log("checking for match for " + currentListing);
	    		});
			} 
			
		$('.carousel').carousel('next');

	});


	
	$('.carousel').on('slide.bs.carousel', function () {
  		$('.carousel').carousel({
  			interval: false
		});
	});

	$('.modal').on('shown.bs.modal', function () {
  		$('#myInput').trigger('focus')
	})

	$('.listingModule').first().addClass('active');

});
