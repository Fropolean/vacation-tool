$(function() {
  $("form#survey").submit(function(event) {
    var climate = $("select#climate").val();
    var region = $("select#region").val();
    var terrain = $("select#terrain").val();
    var drink = $("select#drink").val();
    var food = $("select#food").val();

    var location = null


    if (climate === "HOT") { //climate
        //terrain
      if (terrain === "BEACH") {
          //food
        if (food ===  "FANCY") {
          location = "on a cruise to the Caribbean";
        } else { //food GRUB
          location = "Venice Beach, California";
        }

      } else { //terrain PEAKS
            //food HOT
          if (food ===  "FANCY") {
            location = "Phoenix, AZ";
          } else { //food GRUB HOT
            location = "New Mexico";
          }
        }

    } else { //climate COLD
          //terrain
        if (terrain === "BEACH") {
            //food
          if (food ===  "FANCY") {
            location = "New Zealand";
          } else { //food GRUB
            location = "the Kenai Peninsula";
          }

        } else { //terrain PEAKS
              //food
            if (food ===  "FANCY") {
              location = "the Swiss Alps";
            } else { //food GRUB
              location = "Loveland, CO";
            }
          }
        }

    $("#location").text(location);
    $(".result").show();




    event.preventDefault();

  })
});
