$(document).ready(function(){
  let pathUrl = window.location.pathname

  console.log(rating)
  $('#increment').click(function() {
    $.ajax({
      method: "POST",
      url: pathUrl,   
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });



}); 
