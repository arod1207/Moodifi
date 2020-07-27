$(document).ready(function(){
  function playlistStart(event) {
  $("#homeScreen").addClass('hide');
  $("#homeScreen").removeClass('show');
  };
  $("#moodsBtn").on("click", playlistStart);
  $("#activeBtn").on("click", playlistStart);




}); 