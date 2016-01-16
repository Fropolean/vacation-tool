$(function() {
  $("form#survey").submit(function(event) {
    var climate = $("select#climate").val();
    var region = $("select#region").val();
    var terrain = $("select#terrain").val();
    var budget = $("select#budget").val();
    var food = $("select#food").val();
    var house = $("select#house").val();

    var location = null
    var count = 0

    if (budget === "RICH") {
      count += 1;
    }
alert(count);
    if (house === "NO") {
      location = "to stay home";
    } else {
          // leave home
        if (region === "URBAN") {
            //climate
          if (climate === "HOT") {
              //terrain
            if (terrain === "BEACH") {
                //food
              if (food ===  "FANCY" && count === 1) { //urban hot beach fancy loaded
                location = "a cruise in the Galapagos";
              } else if (food === "FANCY") { //urban hot beach fancy
                location = "Maui";
              } else { //urban hot beach grub
                location = "Venice Beach, California";
              }
              //end terrain BEACH
            } else { //terrain PEAKS
                  //food
                if (food ===  "FANCY" && count === 1) { //urban hot peaks fancy loaded
                  location = "Siena, Italy";
                } else if (food === "FANCY") { //urban hot peaks fancy
                  location = "Andorra";
                } else { //urban hot peaks grub
                  location = "Albuquerque, New Mexico";
                }
              }
            //END CLIMATE HOT
            //START CLIMATE COLD
          } else { //climate COLD
                //terrain
              if (terrain === "BEACH") { //urban cold beach
                  //food
                if (food ===  "FANCY" && count === 1) { //urban cold beach fancy loaded
                  location = "the Isle of Man";
                } else if (food === "FANCY"){ //urban cold beach fancy
                  location = "it in Punta Arenas, Chile";
                } else { //urban cold beach grub
                  location = "Reykjavik, Iceland";
                }

              } else { //terrain PEAKS
                    //food
                  if (food ===  "FANCY" && count === 1) { //urban cold peaks fancy loaded
                    location = "the Swiss Alps";
                  } else if (food === "FANCY") { //urban cold peaks fancy
                    location = "Whistler, BC";
                  } else { //urban cold peaks grub
                    location = "it in Loveland, CO";
                  }
                }
              }
          //urban END
          //rural START
        } else { //rural
          if (climate === "HOT") {
              //terrain
            if (terrain === "BEACH") {
                //food
              if (food ===  "FANCY" && count === 1) { //rural hot beach fancy loaded
                location = "the Caribbean";
              } else if (food === "FANCY") { //rural hot beach fancy
                location = "Madagascar";
              } else { //rural hot beach grub
                location = "West Virginia";
              }

            } else { //terrain PEAKS
                  //food
                if (food ===  "FANCY" && count === 1) { //rural hot peaks fancy loaded
                  location = "Hakone, Japan";
                } else if (food === "FANCY") { //rural hot peaks fancy
                  location = "Carpathian Mountains, Romania";
                } else { //rural hot peaks grub
                  location = "Kenya";
                }
              }
            //end climate HOT
          } else { //climate COLD
                //terrain
              if (terrain === "BEACH") { //rural cold beach
                  //food
                if (food ===  "FANCY" && count === 1) { //rural cold beach fancy loaded
                  location = "Antarctica";
                } else if (food === "FANCY") { //rural cold beach fancy
                  location = "Greenland";
                } else { //rural cold beach grub
                  location = "the Kenai Peninsula";
                }

              } else { //terrain PEAKS
                    //food
                  if (food === "FANCY" && count === 1) { //rural cold peaks fancy loaded
                    location = "Patagonia";
                  } else if (food === "FANCY") { //rural cold peaks fancy
                    location = "Stora Sjofallet National Park, Sweden";
                  } else { //rural cold peaks grub
                    location = "Denali National Park, Alaska";
                  }
                }
              }
            }
          }

    $("#location").text(location);
    $(".result").show();

    event.preventDefault();

  })
});
