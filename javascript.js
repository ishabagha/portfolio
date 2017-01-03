// Change color of nav after scrolling past jumbotron


 
$(window).scroll(function() {

		var scroll = $(window).scrollTop();
		var jumboHeight = $("#jumbotron").outerHeight();

		if (scroll > jumboHeight) {
			$(".navbar").addClass("nav-background");
		}

		if (scroll < jumboHeight) {
			$(".navbar").removeClass("nav-background");
		}
});



$(document).ready(function() {
	$('#wrapper-arrow').click(function () {
		$('body,html').animate({ scrollTop: $('#projects').offset().top + (-100) }, 'slow');
	}); 
});