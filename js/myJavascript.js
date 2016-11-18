/*tubular plugin for video background*/

$(document).ready(function() {
   $('#wrapper').tubular({videoId: 'ahlywIKP5_c'});
});

//jquery for Open house div on main page

/*
$(document).ready(function(){
    $("#open-house").hover(function(){
        $("#open-house-info").toggle();
    });
});
*/

//jquery for Paragraphs to get background-color in divs on main page


$(document).ready(function(){
   $(".page > p").hover(function(){
        $(this).toggleClass("background");
      });
});

//jquery for Photogallery on Amenities page
$(document).ready(function () {
    $('#submit').click(function () {
      
      /* here's the magic that pulls the value from whatever option you selected... read it a few times to make sure you understand what's going on. */
      
  var checkThis = $('#selectPhoto option:selected').val();
  

        switch (checkThis) {

        case "room-one":
   
            $('#viewphoto').removeClass();
            $('#viewphoto').addClass('room-one');

            break;

        case "kitchen":
            $('#viewphoto').removeClass();
            $('#viewphoto').addClass('kitchen');
          
            break;
            
        case "laundryroom":
            $('#viewphoto').removeClass();
            $('#viewphoto').addClass('laundryroom');

            break;
            
        case "mall":
            $('#viewphoto').removeClass();
            $('#viewphoto').addClass('mall');

            break;

        default:
 $('#viewphoto').text('Please select again');

        }
   });
});

$('.page').colorbox();