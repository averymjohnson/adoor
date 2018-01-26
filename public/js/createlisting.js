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
  function listingSubmit(event){
    // event.preventDefault();

    // if (!addressInput.val().trim() || !cityInput.val().trim() || !zipInput.val() || !sqftInput.val() || !bedInput.val() || !bathInput.val() || !priceInput.val() || !imgInput.val()) {
    //   return;
    // }

    var newListing = {
      address: addressInput.val(),
      city: cityInput.val(),
      zip: zipInput.val(),
      bed: bedInput.val(),
      bath: bathInput.val(),
      price: priceInput.val(),
      img: imgInput.val()
    };

    submitPost(newListing);
    console.log(newListing);
    console.log("new listing object");
  }

  function submitPost(post) {
    $.post("/api/listing", post);
  }

});


