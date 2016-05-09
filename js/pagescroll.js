/*!
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);

	// EP - New code variable offset
	var width = $(window).width();
	var offset = 75;
	if (width <= 479) {
            offset = 50;
        }
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - offset
        }, 1500, 'easeInOutExpo');

	// Old stock code
        //$('html, body').stop().animate({
            //scrollTop: $($anchor.attr('href')).offset().top - 75
        //}, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
