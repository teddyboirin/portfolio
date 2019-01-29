$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#contact").position().top) {
				$('body').css('background', '#ffffff');

    }
    
    else {
      $('body').css('background', '#191b22');
    }
});



