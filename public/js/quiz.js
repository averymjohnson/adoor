$(document).ready(function() {
  // Getting jQuery references to the responses
  var kidsInput = $("#kids");
  var youngInput = $("#young");
  var aloneInput = $("#alone");
  var petInput = $("#pet");
  var bedInput = $("#bed");
  var bathInput = $("#bath";
  var budgetInput = $("#budget");
  var zipInput = $("#zip");

  // Adding an event listener for when the form is submitted
  $("#match").on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function newUser(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!kidsInput.val().trim() || !youngInput.val().trim() || !aloneInput.val() || !petInput.val() || !bedInput.val() || !budgetInput.val() || !zipInput.val() {
      return;
    }
    // Constructing a newAcct object to hand to the database
    var newAcct = {
      caresAboutSchools: kidsInput
        .val()
        .trim(),
      caresAboutGroceryStores: kidsInput
        .val()
        .trim(),
      caresAboutHospitals: youngInput
        .val()
        .trim(),
      caresAboutCrimes: aloneInput
        .val()
        .trim(),
      zipcode: zipInput
        .val()
        .trim(),
      budget: budgetInput
        .val()
        .trim(),
      bedrooms: bedInput
        .val()
        .trim(),
      bathrooms: bathInput
        .val()
        .trim()
    };

    //Add the listing information to the database
    createListing(newAcct);

 // Submits a new listing object to the api-routes to be posted in the db
  function postUser(users) {
    $.post("/api/users", listing, function() {
    });
  }
