$(document).ready(function() {
  // Getting jQuery references to the responses
  var addressInput = $("#address");
  var cityInput = $("#city");
  var zipInput = $("#zipcode");
  var sqftInput = $("#sqft");
  var bedInput = $("#bed");
  var bathInput = $("#bath");
  var priceInput = $("#price");
  var imgInput = $("#img");

  $("#submitListing").on("click", listingSubmit);

  // axios get request to pull longitude and latitude
  function listingSubmit(event){
      
      // gets lat and long through google api
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
          address: addressInput.val() + " " + cityInput.val(),
          key:"AIzaSyBYS8UeF08wAvxPCw096lcnpgGQPtXFgH0"
        }
      })
      .then(function(response){
        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;

        var newListing = {
        address: addressInput.val(),
        city: cityInput.val(),
        zip: zipInput.val(),
        bed: bedInput.val(),
        bath: bathInput.val(),
        price: priceInput.val(),
        img: imgInput.val(),
        longitude: longitude,
        latitude: latitude
    };

        submitPost(newListing);
        console.log(newListing);

      })
      .catch(function(error){
        console.log(error);
      });   
  }

      function submitPost(post) {
        $.post("/api/listing", post);
      }

});


