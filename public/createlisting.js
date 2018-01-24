//  var mysql = require("mysql"); 

 

//  var connection = mysql.createConnection({ 
//    host: "localhost", 
//    port: 3306, 
//    user: "root", 
//    password: "2203", 
//    database: "adoor_db" 
//  }); 

//  $("#submit").click(function(){

// connection.connect(function(err){ 
//  	alert("Connected"); 

//  	}); 
// });
$("#submit").click(function(){


	var addressR = $("#address").val().trim();
	var cityR = $("#city").val().trim();
	var zipCodeR = $("#zip").val().trim();
	var bedR = $("#bed").val().trim(); 
	var bathR = $("#bath").val().trim();
	var priceR = $("#price").val().trim();
	var imgR = $("#imginp");


	var responses = [
	{
		"address" = addressR,
		"city" = cityR,
		"zipCode" = zipCodeR,
		"bed" = bedR,
		"bath" = bathR,
		"price" = priceR,
		"img" = imgR
			}
		];

	module.exports = responses;

// 	$.then(function(){
// 		var listing = [[responses.address, responses.city, responses.zipCode, responses.bed, responses.bath, responses.price, responses.img]];
// 		var query = "INSERT INTO adoor_db.listings (address, city, zipCode, bed, bath, price, img) VALUES ?"
// 		connection.query(query, [listing], function(err, res){
// 			alert("Listing is Added");
// 		});

// 	connection.end();

// 	})
// }


