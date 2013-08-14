$(document).ready(function() {

  var strokes_p1 = 0;
  var strokes_p2 = 0;
  var jay_avatar = "<img src='http://www.highsnobiety.com/files/2012/10/Jay-Z-Albums-from-Worst-to-Best-14.png' height='200' width='200'>"
  var ye_avatar = "<img src='http://riddim-donmagazine.com/wp-content/uploads/2013/05/kanye_west1.jpg' height='200' width='200'>";
  var result_url = $('#url').text()

  var resetRace = function(winner, time) {
    // $('#player2_strip td.active').removeClass('active');
    // $('#player1_strip td.active').removeClass('active');
    // $.post('ajax/test.html', function(data) {
    //   $('.result').html(data);
    // });

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
      // alert(response);
    });
    // alert(result_url)
    // document.location.href= result_url
    // $('#player1_strip').children().remove();
    // $('#player2_strip').children().remove();

    // $('#player2_strip').append("<td class = 'active'>"+player_avatar+"</td>");
    // $('#player1_strip').append("<td class = 'active'>"+player_avatar+"</td>");
    // strokes_p1 = 0; 
    // strokes_p2 = 0;
  };


  $(document).on('keyup', function(event) {
    var startTime = new Date().getSeconds();
    // $('td').removeClass('active')
  // while (($('#player1_strip td.active') != $('#player1_strip').last) && ($('#player2_strip td.active') != $('#player2_strip').last)) {
    if(event.which == 81) {
      if (strokes_p1 < 80){
        $('#player1_strip td.active').empty().removeClass('active').after( "<td class = 'active'>"+jay_avatar+"</td>" );
        strokes_p1++;
      }
      else {
        var endTime = new Date().getSeconds();
        var totalTime = endTime - startTime;
        alert("Player 1 wins!");

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
        alert("Player 2 wins!");
        resetRace("player 2", totalTime);
        // document.location.href='/results'
      }
    } 


    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
