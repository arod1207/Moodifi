$(document).ready(function(){
  function playlistStart(event) {
  $("#homeScreen").addClass('hide');
  $("#homeScreen").removeClass('show');
  };
  $("#moodsBtn").on("click", playlistStart);
  $("#activeBtn").on("click", playlistStart);






  $('#increment').click(function() {
    $.ajax({
      method: "PUT",
      url: `/playlist/${category}/${name}`
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  });



});