$(document).ready(function(){
	
	// function that hides personal info questions and makes the quiz appear
	$("#quiz").click(function(){
		console.log("working");
		$("#profileCreateStart").css("display", "none");
		$("#takeQuizAppear").css("display", "inline");
	});
});