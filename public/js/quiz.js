$(document).ready(function() {
  // Getting jQuery references to the responses
  var kidsInput = $("#kids");
  var youngInput = $("#young");
  var aloneInput = $("#alone");
  var petInput = $("#pet");
  var bedInput = $("#bed");
  var bathInput = $("#bath");
  var budgetInput = $("#budget");
  var zipInput = $("#zip");

  // Adding an event listener for when the form is submitted
  $("#match").on("click", newUser);
  // A function for handling what happens when the form to create a new post is submitted
    function newUser(event) {
      // get lat and long
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
          address: zipInput.val(),
          key:"AIzaSyBYS8UeF08wAvxPCw096lcnpgGQPtXFgH0"
        }
      })
      .then(function(response){
        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;
          console.log(latitude);
          console.log(longitude);
        
        var newAcct = {
        caresAboutSchools: JSON.parse(kidsInput.val()),
        caresAboutGroceryStores: JSON.parse(kidsInput.val()),
        caresAboutHospitals: JSON.parse(youngInput.val()),
        caresAboutCrimes: JSON.parse(aloneInput.val()),
        caresAboutParks: JSON.parse(petInput.val()),
        zipcode: parseInt (zipInput.val()),
        budget: parseInt (budgetInput.val()),
        bedrooms: parseInt (bedInput.val()),
        bathrooms: parseInt (bathInput.val()),
    };
      postUser(newAcct);
      console.log(newAcct);
  })
    
};
 // Submits a new listing object to the api-routes to be posted in the db
  function postUser(post) {
    $.post("/api/user-profile", post);
  }
});


