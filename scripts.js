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


    if (house === "NO") {
      location = "to stay home";
    } else {
          // leave home
        if (region === "URBAN") { //urban
            //climate
          if (climate === "HOT") { //urban hot
              //terrain
            if (terrain === "BEACH") { //urban hot beach
                //food
              if (food ===  "FANCY") { //urban hot beach fancy
                location = "Maui";
              } else { //urban hot beach grub
                location = "Venice Beach, California";
              }
              //end terrain BEACH
            } else { //terrain PEAKS
                  //food
                if (food ===  "FANCY") { //urban hot peaks fancy
                  location = "Phoenix, AZ";
                } else { //urban hot peaks grub
                  location = "New Mexico";
                }
              }
            //END CLIMATE HOT
            //START CLIMATE COLD
          } else { //climate COLD
                //terrain
              if (terrain === "BEACH") { //urban cold beach
                  //food
                if (food ===  "FANCY") { //urban cold beach fancy
                  location = "Punta Arenas, Chile";
                } else { //urban cold beach grub
                  location = "Reykjavik, Iceland";
                }

              } else { //terrain PEAKS
                    //food
                  if (food ===  "FANCY") { //urban cold peaks fancy
                    location = "the Swiss Alps";
                  } else { //urban cold peaks grub
                    location = "it in Loveland, CO";
                  }
                }
              }
          //urban END
          //rural START
        } else { //rural
          if (climate === "HOT") { //rural hot
              //terrain
            if (terrain === "BEACH") { //rural hot beach
                //food
              if (food ===  "FANCY") { //rural hot beach fancy
                location = "the Caribbean";
              } else { //rural hot beach grub
                location = "Madagascar";
              }

            } else { //terrain PEAKS
                  //food
                if (food ===  "FANCY") { //rural hot peaks fancy
                  location = "Hakone, Japan";
                } else { //rural hot peaks grub
                  location = "Kenya";
                }
              }
            //end climate HOT
          } else { //climate COLD
                //terrain
              if (terrain === "BEACH") { //rural cold beach
                  //food
                if (food ===  "FANCY") { //rural cold beach fancy
                  location = "Antarctica";
                } else { //rural cold beach grub
                  location = "the Kenai Peninsula";
                }

              } else { //terrain PEAKS
                    //food
                  if (food ===  "FANCY") { //rural cold peaks fancy
                    location = "Denali National Park, Alaska";
                  } else { //rural cold peaks grub
                    location = "Stora Sjofallet National Park, Sweden";
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
