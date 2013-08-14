$(document).ready(function() {

  var strokes_p1 = 0;
  var strokes_p2 = 0;
  var jay_avatar = "<img src='http://www.highsnobiety.com/files/2012/10/Jay-Z-Albums-from-Worst-to-Best-14.png' height='200' width='200'>"
  var ye_avatar = "<img src='http://riddim-donmagazine.com/wp-content/uploads/2013/05/kanye_west1.jpg' height='200' width='200'>";
  var result_url = $('#url').text()

  var resetRace = function(winner, time) {

    var data = {
      winner: winner,
      winner_time: time
    };

    request = $.ajax({
      type: "POST",
      url: "/test",
      data: data
    });

    request.done(function(response){
      if (response == 'player 1') {
        $('#jay .text').before(winner+" wins ")
        $('#jay').fadeIn('slow');
      }
      else if (response == 'player 2') {
        $('#ye .text').before(winner+" wins!")  
        $('#ye').fadeIn('slow');
      }
    });
  };


  $(document).on('keyup', function(event) {
    var startTime = new Date().getSeconds();
     if(event.which == 81) {
      if (strokes_p1 < 80){
        $('#player1_strip td.active').empty().removeClass('active').after( "<td class = 'active'>"+jay_avatar+"</td>" );
        strokes_p1++;
      }
      else {
        var endTime = new Date().getSeconds();
        var totalTime = endTime - startTime;

        resetRace("player 1", totalTime);
        
      } 
    }
    else if (event.which == 80) {
      if (strokes_p2 < 80){
        $('#player2_strip td.active').empty().removeClass('active').after( "<td class = 'active'>"+ye_avatar+"</td>" );
        strokes_p2++;
      }
      else {
        var endTime = new Date().getSeconds();
        var totalTime = endTime - startTime;
        resetRace("player 2", totalTime);
      }
    } 

  });
});
