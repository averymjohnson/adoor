 var mysql = require("mysql"); 

 
 
 var connection = mysql.createConnection({ 
   host: "localhost", 
   port: 3306, 
   user: "root", 
   password: "2203", 
   database: "bamazon" 
 }); 


connection.connect(function(err){ 
 	console.log("Connected to Bamazon Manager"); 
 	runSearch(); 
 	}); 
  


$("#submit").click(function(){

	var responses = {
		"address" = $("#address").val().trim(),
		"city" = $("#city").val().trim(),
		"zipCode" = $("#city").val().trim(),
		"bed" = $("#bed").val().trim(),
		"bath" = $("#bath").val().trim(),
		"price" = $("#price").val().trim(),
		"img" = $("#imginp)
		};

	$.then(function(){
		var listing = [[responses.address, responses.city, responses.zipCode, responses.bed, responses.bath, responses.price, responses.img]];
		var query = "INSERT INTO adoor_db.listings (address, city, zipCode, bed, bath, price, img) VALUES ?"
		connection.query(query, [listing], function(err, res){
			alert("Listing is Added");
		});

	connection.end();

	}):
}:


