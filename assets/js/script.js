$(document).ready(function() {

	$(window).scroll(function () {
		var height = $(window).scrollTop();
 
 	if (height >= 730) { 
 		$(".p").fadeIn("slow");
 		}
	});

	$("#resume").hover(function(){
    	$(this).css("opacity", "0.7");
    	}, function(){
    		$(this).css("opacity", "1");
		});
});
