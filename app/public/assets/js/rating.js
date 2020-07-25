$(document).ready(function(){


  $('#increment').click(function() {
    $.ajax({
      type: "PUT",
      url: "/mood/angry/rating",
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });
















});