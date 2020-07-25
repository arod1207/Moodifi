$(document).ready(function(){


  $('#increment').click(function() {
    $.ajax({
      method: "PUT",
      url: `/playlist/${category}/${name}`
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });




      













});