$(document).ready(function() {

  console.log("IN THE BEGGINING OF QUIZ.JS");
  // Getting jQuery references to the responses
  var kidsInput = $("#kids");
  var youngInput = $("#young");
  var aloneInput = $("#alone");
  var petInput = $("#pet");
  var bedInput = $("#bed");
  var bathInput = $("#bath");
  var budgetInput = $("#budget");
  var zipInput = $("#zip");

  var kids = false;
  var schools = false;
  var saftey = false;
  var parks = false;
  var hospitals = false;
  var grocery = false;
  // Adding an event listener for when the form is submitted
  $("#match").on("click", addQuizInfo);
  // A function for handling what happens when the form to create a new post is submitted
  function addQuizInfo(event) {

    console.log("In addQuizInfo method.");
      // get lat and long
      // axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      //   params:{
      //     address: zipInput.val(),
      //     key:"AIzaSyBYS8UeF08wAvxPCw096lcnpgGQPtXFgH0"
      //   }
      // })
      // .then(function(response){
      //   var latitude = response.data.results[0].geometry.location.lat;
      //   var longitude = response.data.results[0].geometry.location.lng;
      //     console.log(latitude);
      //     console.log(longitude);
   
      if (kidsInput.val()) {
        schools = true;
        grocery = true;
      } if (youngInput.val()) {
        hospitals = true;
      } if (aloneInput.val()) {
        saftey = true;
      } if (petInput.val()) {
        parks = true;
      }


        
    var newQuizInfo = {
        caresAboutSchools: schools,
        caresAboutGroceryStores: grocery,
        caresAboutHospitals: hospitals,
        caresAboutCrimes: saftey,
        caresAboutParks: parks,
        zipcode: zipInput.val(),
        budget: parseFloat (budgetInput.val()),
        bedrooms: parseInt (bedInput.val()),
        bathrooms: parseInt (bathInput.val())
    };
      addQuizInfoToUserTable(newQuizInfo);
    
};
 // Submits a new listing object to the api-routes to be posted in the db
  function addQuizInfoToUserTable(quizInfo) {
    $.post("/api/addQuizInfoToUser", quizInfo);
    
  }
});


