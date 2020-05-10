$(document).ready(function(){
	/* Owlcarousel start */
	$('.banner').owlCarousel({
		items: 1,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 30,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items:1
			}
		}
	});



	 /* clients section start */
    $('.logo-slider').owlCarousel({
        items: 5,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 30,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items:5
            }
        }
    });






});