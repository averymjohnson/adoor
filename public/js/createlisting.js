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

  // Adding an event listener for when the form is submitted
  $("#submitListing").on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function newUser(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!addressInput.val().trim() || !cityInput.val().trim() || !zipInput.val() || !sqftInput.val() || !bedInput.val() || !bathInput.val() || !priceInput.val() || !imgInput.val()) {
      return;
    }
    // Constructing a newAcct object to hand to the database
    var newListing = {
      address: addressInput
        .val()
        .trim(),
      city: cityInput
        .val()
        .trim(),
      zip: zipInput
        .val()
        .trim(),
      // sqft: sqftInput
      //   .val()
      //   .trim(),
      bed: bedInput
        .val()
        .trim(),
      bath: bathInput
        .val()
        .trim(),
      price: priceInput
        .val()
        .trim()//,
      //img: imgInput
    };

    //Add the listing information to the database
    console.log(newAcct);

    createListing(newAcct);

 // Submits a new listing object to the api-routes to be posted in the db
  function createListing(listing) {
    $.post("/api/listing", listing, function() {
    });
  }
