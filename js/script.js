// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
   var searchInput = $("input").val();
    console.log(searchInput);
    var request_url = "https://api.giphy.com/v1/gifs/search?q= " + searchInput + "&rating=pg&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: request_url,
      method: "GET",
      success: function(response) {
          var extend = (response.data.length - 1) * Math.random();
           extend = Math.floor(extend);
           console.log(extend);
           var pic_url = response.data[extend].images.original.url;
           $("#my_image").attr("src", pic_url);
         //  $('body').append('<img src=' + pic_url + '>');
      },
    });


});

