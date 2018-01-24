var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2203",
  database: "adoor_db"
});

connection.connect(function(err){
	console.log("Connected");
});
$("#submit").click(function(){
	console.log("worked");
	runSend();
});

function runSend(){
	var address = $("#address").val().trim()
	.then(function(answer){
		var responses = [[answer.address]];
		var query = "INSERT INTO adoor_db.listings (address) VALUES ?"
		connection.query(query, [responses], function(err,res){
			console.log("Added")
	});

});