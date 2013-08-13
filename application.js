$(document).ready(function() {

  var strokes_p1 = 0;
  var strokes_p2 = 0;
  var player_avatar = "<img src='futurama_ship.gif' height='200' width='200'>";
  var fire = "<img src='fire.jpg' height='100' width='100'>";

  var resetRace = function() {
    // $('#player2_strip td.active').removeClass('active');
    // $('#player1_strip td.active').removeClass('active');

    $('#player1_strip').children().remove();
    $('#player2_strip').children().remove();

    $('#player2_strip').append("<td class = 'active'>"+player_avatar+"</td>");
    $('#player1_strip').append("<td class = 'active'>"+player_avatar+"</td>");
    strokes_p1 = 0; 
    strokes_p2 = 0;
  };


  $(document).on('keyup', function(event) {
    // $('td').removeClass('active')
  // while (($('#player1_strip td.active') != $('#player1_strip').last) && ($('#player2_strip td.active') != $('#player2_strip').last)) {
    if(event.which == 81) {
      if (strokes_p1 < 20){
        $('#player1_strip td.active').empty().append(fire).removeClass('active').after( "<td class = 'active'>"+player_avatar+"</td>" );
        strokes_p1++;
      }
      else {
        alert("Player 1 wins!");
        resetRace();
        
      } 
    }
    else if (event.which == 80) {
      if (strokes_p2 < 20){
        $('#player2_strip td.active').empty().append(fire).removeClass('active').after( "<td class = 'active'>"+player_avatar+"</td>" );
        strokes_p2++;
      }
      else {
        resetRace();
        alert("Player 2 wins!");
      }
    } 


    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
