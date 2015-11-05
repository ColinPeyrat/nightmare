$(document).ready(function() {
    $("body").append("<div id='bubbles'></div>");


    $("body").append("<button id='go'>Go</button>");
    $("body").append("<button id='pause'>Pause</button");
		$("body").append("<button id='trigger'>Trigger</button");

    var run = false;

    function nightmare() {
        //définition d'un variable qui permet que la fonction tourne seulement quand run == true;
        if (run) {
            	$.getJSON("position.php",{ },function(data){
								console.log(data);
								var divsize = ((Math.random()*100) + 50).toFixed();

								var posx = (data.x).toFixed() - 25;
						    var posy = (data.y).toFixed() - 25;

								console.log(posx + " " + posy);

                var bubble = $("<div/>");
                $("#bubbles").append(bubble);
                bubble
										.addClass('bubble')
                    .hide(2000)
                    .click(function() {
                        $(this).css("background-color", "white");
                    })
                    .css({
                        "top": (posy) + "px",
                        "left": (posx) + "px",
                    });
            }, "json");
        }
    }

    $("#go").click(function() {
        //run = true, la fonction reprend
        run = true;
        setInterval(nightmare, 500);
    });

    $("#pause").click(function() {
				//run = false, la fonction s'arrette
        run = false;
        //t'avais oublié le each ici, il faut parcourir chaque bulle et arreter l'animation de chacune d'entre elle
        $('.bubble').each(function() {
            $(this).stop();
        });
    });

		$("#trigger").click(function() {
			if(run == false){
	        $('.bubble').each(function() {
	        	$(this).hide();
			 		});
			}
		});

});
