$(document).ready(function() {
  function myMatches(match) {
    $.get("/api/my-matches", match, function() {
    });
  }
