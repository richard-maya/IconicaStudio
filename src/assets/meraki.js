// HEADER
// ------------------------------->
$(document).on("scroll", function () {
	if ($(document).scrollTop() > 200) {
		$(".navbar").addClass("navbar-small");
	} else {
		$(".navbar").removeClass("navbar-small");
	}
});


// FOOTER
// ------------------------------->
$(document).ready(function() {
	// INITIATE THE FOOTER
  siteFooter();
	$(window).resize(function() {
		siteFooter();
	});

	function siteFooter() {
		var contact = $('#contact');
		var contactHeight = contact.height();
		var contactWidth = contact.width();

		var siteFooter = $('footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		contact.css({
			"margin-bottom" : siteFooterHeight + 32
		});
	};
});


// WAYPOINTS
// ------------------------------->
$(document).ready(function() {
	$("#contact").waypoint(function(direction){
	    if(direction == 'down'){
	        $(".navbar").addClass('yellow-navbar');
	    } else {
	        $(".navbar").removeClass('yellow-navbar');
	    }
	}, {offset: '-50px'});
});
