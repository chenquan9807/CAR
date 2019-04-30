(function ($) {

	"use strict";

	$(window).load(function () {

		// Preloader
		// $('.loader').fadeOut();
		// $('.loader-mask').delay(350).fadeOut('slow');

		$(window).trigger("resize");
		masonry();
		initOwlCarousel();

		setTimeout(function () {
			$.stellar('refresh');
		}, 1000);
	});


	$(window).resize(function () {

		container_full_height_init();
		$.stellar('refresh');
		$('.equal-height').matchHeight();

		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
			$('.navigation-overlay').removeClass("sticky");
		}

		/* Mobile Menu Resize
		-------------------------------------------------------*/
		$(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height());

	});


	// Sticky menu
	$(window).scroll(function () {

		var windowWidth = $(window).width();

		if ($(window).scrollTop() > 10 & windowWidth > 974) {
			$('.navigation-overlay, .navbar-fixed-top').addClass("sticky");
			$('.logo-wrap').addClass("shrink");
		} else {
			$('.navigation-overlay, .navbar-fixed-top').removeClass("sticky");
			$('.logo-wrap').removeClass("shrink");
		}
	});

	/* Onepage Nav
	-------------------------------------------------------*/
	$('.onepage-nav .navbar-collapse ul li a').on('click', function () {
		$(".navbar-collapse").collapse('hide');
	});


	// Smooth Scroll Navigation
	$('.local-scroll').localScroll({
		offset: {
			top: -60
		},
		duration: 1500,
		easing: 'easeInOutExpo'
	});


	/* Full screen Navigation
	// -------------------------------------------------------*/

	$('#nav-icon, .overlay-menu').on("click", function () {
		$('#nav-icon, #overlay').toggleClass('open');

		$(function () {
			var delay = 0
			$('.overlay-menu > ul > li').each(function () {
				$(this).css({
					animationDelay: delay + 's'
				})
				delay += 0.1
			})
		})
	});


	/* Bootstrap Dropdown Navigation
	-------------------------------------------------------*/
	"use strict";
	! function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
	}(function (a) {
		function b(b) {
			this.$element = a(b), this.$main = this.$element.closest(".dropdown, .dropup, .btn-group"), this.$menu = this.$element.parent(), this.$drop = this.$menu.parent().parent(), this.$menus = this.$menu.siblings(".dropdown-submenu");
			var d = this.$menu.find("> .dropdown-menu > " + c);
			this.$submenus = d.filter(".dropdown-submenu"), this.$items = d.not(".dropdown-submenu"), this.init()
		}
		var c = ":not(.disabled, .divider, .dropdown-header)";
		return b.prototype = {
			init: function () {
				this.$element.on({
					"click.bs.dropdown": this.click.bind(this),
					keydown: this.keydown.bind(this)
				}), this.$menu.on("hide.bs.submenu", this.hide.bind(this)), this.$items.on("keydown", this.item_keydown.bind(this)), this.$menu.nextAll(c + ":first:not(.dropdown-submenu)").children("a").on("keydown", this.next_keydown.bind(this))
			},
			click: function (a) {
				a.stopPropagation(), this.toggle()
			},
			toggle: function () {
				this.$menu.hasClass("open") ? this.close() : (this.$menu.addClass("open"), this.$menus.trigger("hide.bs.submenu"))
			},
			hide: function (a) {
				a.stopPropagation(), this.close()
			},
			close: function () {
				this.$menu.removeClass("open"), this.$submenus.trigger("hide.bs.submenu")
			},
			keydown: function (a) {
				if (/^(32|38|40)$/.test(a.keyCode) && a.preventDefault(), /^(13|32)$/.test(a.keyCode)) this.toggle();
				else if (/^(27|38|40)$/.test(a.keyCode))
					if (a.stopPropagation(), 27 == a.keyCode) this.$menu.hasClass("open") ? this.close() : (this.$menus.trigger("hide.bs.submenu"), this.$drop.removeClass("open").children("a").trigger("focus"));
					else {
						var b = this.$main.find("li:not(.disabled):visible > a"),
							c = b.index(a.target);
						if (38 == a.keyCode && 0 !== c) c--;
						else {
							if (40 != a.keyCode || c === b.length - 1) return;
							c++
						}
						b.eq(c).trigger("focus")
					}
			},
			item_keydown: function (a) {
				27 == a.keyCode && (a.stopPropagation(), this.close(), this.$element.trigger("focus"))
			},
			next_keydown: function (a) {
				if (38 == a.keyCode) {
					a.preventDefault(), a.stopPropagation();
					var b = this.$drop.find("li:not(.disabled):visible > a"),
						c = b.index(a.target);
					b.eq(c - 1).trigger("focus")
				}
			}
		}, a.fn.submenupicker = function (c) {
			var d = this instanceof a ? this : a(c);
			return d.each(function () {
				var c = a.data(this, "bs.submenu");
				c || (c = new b(this), a.data(this, "bs.submenu", c))
			})
		}
	});
	$('.dropdown-submenu > a').submenupicker();


	/* Mobile Navigation 
	-------------------------------------------------------*/
	$('.dropdown-toggle').on('click', function (e) {
		e.preventDefault();
	});


	/* Mobile Detect
	-------------------------------------------------------*/
	if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
		$("html").addClass("mobile");
		$('.dropdown-toggle').attr('data-toggle', 'dropdown');
	} else {
		$("html").removeClass("mobile");
	}


	/* IE Detect
	-------------------------------------------------------*/
	if (Function('/*@cc_on return document.documentMode===10@*/')()) {
		$("html").addClass("ie");
	}


	/* Text Rotator
	-------------------------------------------------------*/
	$(".rotate").textrotator({
		animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
		separator: ",",
		speed: 3000
	});


	/* Counters
	-------------------------------------------------------*/
	$('.statistic').appear(function () {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});


	/* Owl Carousel
	-------------------------------------------------------*/

	function initOwlCarousel() {
		(function ($) {
			"use strict";


			/* Testimonials
			-------------------------------------------------------*/

			$("#owl-testimonials").owlCarousel({

				navigation: false,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				autoHeight: true,
				slideSpeed: 300,
				pagination: true,
				paginationSpeed: 400,
				singleItem: true,
				stopOnHover: true

			})


			/* Partners Logo
			-------------------------------------------------------*/

			$("#owl-partners").owlCarousel({

				autoPlay: 3000,
				pagination: false,
				itemsCustom: [
					[0, 2],
					[450, 2],
					[700, 3],
					[1000, 3],
					[1200, 4],
					[1400, 5],
					[1600, 6]
				]

			})


			/* Team
			-------------------------------------------------------*/

			$("#team-slider").owlCarousel({

				autoPlay: 3000,
				pagination: false,
				stopOnHover: true,
				itemsCustom: [
					[0, 1],
					[450, 2],
					[700, 3],
					[1000, 3],
					[1200, 4],
					[1400, 5],
					[1600, 5]
				]

			})


			/* Single Image
			-------------------------------------------------------*/

			$("#owl-single").owlCarousel({

				navigation: true,
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem: true,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

			})


		})(jQuery);
	};


	/* FlexSlider
	-------------------------------------------------------*/

	function masonry() {
		var $container = $('.masonry');
		$container.imagesLoaded(function () {
			$container.isotope({
				itemSelector: '.masonry-item',
				layoutMode: 'masonry'
			});
		});
	}


	// Flexslider / Masonry
	$('#flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		touch: true,
		slideshow: false,
		prevText: ["<i class='fa fa-angle-left'></i>"],
		nextText: ["<i class='fa fa-angle-right'></i>"],
		start: function () {
			var $container = $('.masonry');
			$container.imagesLoaded(function () {
				$container.isotope({
					itemSelector: '.masonry-item',
					layoutMode: 'masonry'
				});
			});
		}
	});


	/* Flickity Slider
	-------------------------------------------------------*/

	// Featured Works
	var $gallery = $('.works-slider').flickity({
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		autoPlay: false,
		prevNextButtons: true,
		percentPosition: true,
		imagesLoaded: true,
		lazyLoad: 1,
		pageDots: true,
		selectedAttraction: 0.1,
		friction: 0.6,
		rightToLeft: false,
		arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
	});

	// magnific popup bug fix
	var popupItems = $.map($gallery.find('.gallery-cell a'), function (link) {
		return {
			src: link.href,
			type: $(link).attr('data-popup-type') || 'image'
		}
	});

	$gallery.on('staticClick', function (event, pointer, cellElement, cellIndex) {
		if (!cellElement) {
			return;
		}
		$.magnificPopup.open({
			items: popupItems,
			gallery: {
				enabled: true
			},
			callbacks: {
				open: function () {
					$.magnificPopup.instance.goTo(cellIndex);
				}
			}
		});
	});

	// prevent links from opening
	$gallery.on('click', 'a', function (event) {
		event.preventDefault();
	});


	// From Blog
	$('.blog-slider').flickity({
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		autoPlay: false,
		prevNextButtons: true,
		percentPosition: true,
		imagesLoaded: true,
		lazyLoad: 1,
		pageDots: false,
		selectedAttraction: 0.1,
		friction: 0.6,
		rightToLeft: false,
		arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
	});


	/* Accodrions
	-------------------------------------------------------*/
	function toggleChevron(e) {
		$(e.target)
			.prev('.panel-heading')
			.find("a")
			.toggleClass('plus minus');
	}
	$('#accordion').on('hide.bs.collapse', toggleChevron);
	$('#accordion').on('show.bs.collapse', toggleChevron);



	/* Progress Bars
	-------------------------------------------------------*/
	var $section = $('#animated-skills').appear(function () {

		var bar = $('.progress-bar');
		var bar_width = $(this);

		function loadDaBars() {

			$(bar).each(function () {
				bar_width = $(this).attr('aria-valuenow');
				$(this).width(bar_width + '%');
			});
		}
		loadDaBars();
	});


	/* Lightbox popup
	-------------------------------------------------------*/

	$('.lightbox-gallery').magnificPopup({
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			titleSrc: 'title',
			verticalFit: true
		}
	});


	$(".lightbox-video").magnificPopup();



	/* Portfolio Isotope
	-------------------------------------------------------*/

	var $portfolio = $('#portfolio-container');
	$portfolio.imagesLoaded(function () {
		$portfolio.isotope({
			isOriginLeft: true
		});
		$portfolio.isotope();

	});

	// filter items on button click
	$('.portfolio-filter').on('click', 'a', function (e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		});

		$('.portfolio-filter a').removeClass('active');
		$(this).closest('a').addClass('active');

	});


	/* Equal Height
	-------------------------------------------------------*/

	$('.equal-height').matchHeight({
		byRow: true,
		property: 'height',
		target: null,
		remove: false
	});


	/* Parallax
	-------------------------------------------------------*/

	$.stellar({
		horizontalScrolling: false
	});


	// Wow Animations

	var wow = new WOW({
		offset: 50,
		mobile: false
	});

	wow.init();

	/* FitVIds
	-------------------------------------------------------*/
	$(".video-wrap").fitVids();


	/* Contact Form
	-------------------------------------------------------*/

	var submitContact = $('#submit-message'),
		message = $('#msg');

	submitContact.on('click', function (e) {
		e.preventDefault();

		var $this = $(this);

		// $.ajax({
		// 	type: "POST",
		// 	url: 'contact.php',
		// 	dataType: 'json',
		// 	cache: false,
		// 	data: $('#contact-form').serialize(),
		// 	success: function(data) {

		// 		if(data.info !== 'error'){
		// 			$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
		// 			message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
		// 		} else {
		// 			message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
		// 		}
		// 	}
		// });
	});


})(jQuery);


/* Scroll to Top
-------------------------------------------------------*/

(function () {
	"use strict";

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 550;
	document.querySelector('#back-to-top');

	function init() {
		window.addEventListener('scroll', function () {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 50);
			}
		}, false);
	}

})();

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("#back-to-top").addClass("show");
	} else {
		$("#back-to-top").removeClass("show");
	}

});

$('a[href="#top"]').on('click', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1350, "easeInOutQuint");
	return false;
});


/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init() {
	(function ($) {
		$(".container-full-height").height($(window).height());
	})(jQuery);
}

var c;
var ifclick=0;
$('.logo').mouseover(function() {
	c = setTimeout(function () {
		$("#admin-page").show(500);
	}, 500);
})
$('.logo').click(function() {
	ifclick++;
	if(ifclick%2==1) {
		c = setTimeout(function () {
			$("#admin-page").show(500);
		}, 500);
	}
	if(ifclick%2==0){
		$("#admin-page").hide(500);
		clearTimeout(c);
	}
})
$('.nopadding').mouseleave(function() {
	$("#admin-page").hide(500);
	clearTimeout(c);
})
var storage = window.localStorage
$("#carForecast").click(function() { 
  storage['router']='carForecast';
})
$("#carFlow").click(function() {
	storage['router']='carFlow';
  })

 var anchor2 = [
                    {
                        name: '2019/03/10 00:00:00',
                        value: ['2019/03/10 00:00:00', 23]
                    },
                    {
                        name: '2019/03/10 00:05:00',
                        value: ['2019/03/10 00:05:00', 23]
                    },
                    {
                        name: '2019/03/10 00:10:00',
                        value: ['2019/03/10 00:10:00', 23]
                    },
                    {
                        name: '2019/03/10 00:15:00',
                        value: ['2019/03/10 00:15:00', 22]
                    },
                    {
                        name: '2019/03/10 00:20:00',
                        value: ['2019/03/10 00:20:00', 23]
                    },
                    {
                        name: '2019/03/10 00:25:00',
                        value: ['2019/03/10 00:25:00', 20]
                    },
                    {
                        name: '2019/03/10 00:30:00',
                        value: ['2019/03/10 00:30:00', 18]
                    },
                    {
                        name: '2019/03/10 00:35:00',
                        value: ['2019/03/10 00:35:00', 23]
                    },
                    {
                        name: '2019/03/10 00:40:00',
                        value: ['2019/03/10 00:40:00', 19]
                    },
                    {
                        name: '2019/03/10 00:45:00',
                        value: ['2019/03/10 00:45:00', 23]
                    },
                    {
                        name: '2019/03/10 00:50:00',
                        value: ['2019/03/10 00:50:00', 25]
                    },
                    {
                        name: '2019/03/10 00:55:00',
                        value: ['2019/03/10 00:55:00', 27]
                    },
                    {
                        name: '2019/03/10 01:00:00',
                        value: ['2019/03/10 01:00:00', 22]
                    },
                    {
                        name: '2019/03/10 01:05:00',
                        value: ['2019/03/10 01:05:00', 27]
                    },
                    {
                        name: '2019/03/10 01:10:00',
                        value: ['2019/03/10 01:10:00', 28]
                    },
                    {
                        name: '2019/03/10 01:15:00',
                        value: ['2019/03/10 01:15:00', 22]
                    },
                    {
                        name: '2019/03/10 01:20:00',
                        value: ['2019/03/10 01:20:00', 23]
                    },
                    {
                        name: '2019/03/10 01:25:00',
                        value: ['2019/03/10 01:25:00', 26]
                    },
                    {
                        name: '2019/03/10 01:30:00',
                        value: ['2019/03/10 01:30:00', 29]
                    },
                    {
                        name: '2019/03/10 01:35:00',
                        value: ['2019/03/10 01:35:00', 26]
                    },
                    {
                        name: '2019/03/10 01:40:00',
                        value: ['2019/03/10 01:40:00', 27]
                    },
                    {
                        name: '2019/03/10 01:45:00',
                        value: ['2019/03/10 01:45:00', 26]
                    },
                    {
                        name: '2019/03/10 01:50:00',
                        value: ['2019/03/10 01:50:00', 25]
                    },
                    {
                        name: '2019/03/10 01:55:00',
                        value: ['2019/03/10 01:55:00', 26]
                    },
                    {
                        name: '2019/03/10 02:00:00',
                        value: ['2019/03/10 02:00:00', 26]
                    },
                    {
                        name: '2019/03/10 02:05:00',
                        value: ['2019/03/10 02:05:00', 27]
                    },
                    {
                        name: '2019/03/10 02:10:00',
                        value: ['2019/03/10 02:10:00', 24]
                    },
                    {
                        name: '2019/03/10 02:15:00',
                        value: ['2019/03/10 02:15:00', 30]
                    },
                    {
                        name: '2019/03/10 02:20:00',
                        value: ['2019/03/10 02:20:00', 28]
                    },
                    {
                        name: '2019/03/10 02:25:00',
                        value: ['2019/03/10 02:25:00', 24]
                    },
                    {
                        name: '2019/03/10 02:30:00',
                        value: ['2019/03/10 02:30:00', 27]
                    },
                    {
                        name: '2019/03/10 02:35:00',
                        value: ['2019/03/10 02:35:00', 24]
                    },
                    {
                        name: '2019/03/10 02:40:00',
                        value: ['2019/03/10 02:40:00', 27]
                    },
                    {
                        name: '2019/03/10 02:45:00',
                        value: ['2019/03/10 02:45:00', 27]
                    },
                    {
                        name: '2019/03/10 02:50:00',
                        value: ['2019/03/10 02:50:00', 28]
                    },
                    {
                        name: '2019/03/10 02:55:00',
                        value: ['2019/03/10 02:55:00', 30]
                    },
                    {
                        name: '2019/03/10 03:00:00',
                        value: ['2019/03/10 03:00:00', 29]
                    },
                    {
                        name: '2019/03/10 03:05:00',
                        value: ['2019/03/10 03:05:00', 23]
                    },
                    {
                        name: '2019/03/10 03:10:00',
                        value: ['2019/03/10 03:10:00', 26]
                    },
                    {
                        name: '2019/03/10 03:15:00',
                        value: ['2019/03/10 03:15:00', 25]
                    },
                    {
                        name: '2019/03/10 03:20:00',
                        value: ['2019/03/10 03:20:00', 28]
                    },
                    {
                        name: '2019/03/10 03:25:00',
                        value: ['2019/03/10 03:25:00', 29]
                    },
                    {
                        name: '2019/03/10 03:30:00',
                        value: ['2019/03/10 03:30:00', 28]
                    },
                    {
                        name: '2019/03/10 03:35:00',
                        value: ['2019/03/10 03:35:00', 29]
                    },
                    {
                        name: '2019/03/10 03:40:00',
                        value: ['2019/03/10 03:40:00', 32]
                    },
                    {
                        name: '2019/03/10 03:45:00',
                        value: ['2019/03/10 03:45:00', 27]
                    },
                    {
                        name: '2019/03/10 03:50:00',
                        value: ['2019/03/10 03:50:00', 30]
                    },
                    {
                        name: '2019/03/10 03:55:00',
                        value: ['2019/03/10 03:55:00', 33]
                    },
                    {
                        name: '2019/03/10 04:00:00',
                        value: ['2019/03/10 04:00:00', 27]
                    },
                    {
                        name: '2019/03/10 04:05:00',
                        value: ['2019/03/10 04:05:00', 30]
                    },
                    {
                        name: '2019/03/10 04:10:00',
                        value: ['2019/03/10 04:10:00', 31]
                    },
                    {
                        name: '2019/03/10 04:15:00',
                        value: ['2019/03/10 04:15:00', 34]
                    },
                    {
                        name: '2019/03/10 04:20:00',
                        value: ['2019/03/10 04:20:00', 32]
                    },
                    {
                        name: '2019/03/10 04:25:00',
                        value: ['2019/03/10 04:25:00', 29]
                    },
                    {
                        name: '2019/03/10 04:30:00',
                        value: ['2019/03/10 04:30:00', 36]
                    },
                    {
                        name: '2019/03/10 04:35:00',
                        value: ['2019/03/10 04:35:00', 32]
                    },
                    {
                        name: '2019/03/10 04:40:00',
                        value: ['2019/03/10 04:40:00', 35]
                    },
                    {
                        name: '2019/03/10 04:45:00',
                        value: ['2019/03/10 04:45:00', 31]
                    },
                    {
                        name: '2019/03/10 04:50:00',
                        value: ['2019/03/10 04:50:00', 32]
                    },
                    {
                        name: '2019/03/10 04:55:00',
                        value: ['2019/03/10 04:55:00', 31]
                    },
                    {
                        name: '2019/03/10 05:00:00',
                        value: ['2019/03/10 05:00:00', 32]
                    },
                    {
                        name: '2019/03/10 05:05:00',
                        value: ['2019/03/10 05:05:00', 35]
                    },
                    {
                        name: '2019/03/10 05:10:00',
                        value: ['2019/03/10 05:10:00', 34]
                    },
                    {
                        name: '2019/03/10 05:15:00',
                        value: ['2019/03/10 05:15:00', 37]
                    },
                    {
                        name: '2019/03/10 05:20:00',
                        value: ['2019/03/10 05:20:00', 31]
                    },
                    {
                        name: '2019/03/10 05:25:00',
                        value: ['2019/03/10 05:25:00', 38]
                    },
                    {
                        name: '2019/03/10 05:30:00',
                        value: ['2019/03/10 05:30:00', 35]
                    },
                    {
                        name: '2019/03/10 05:35:00',
                        value: ['2019/03/10 05:35:00', 39]
                    },
                    {
                        name: '2019/03/10 05:40:00',
                        value: ['2019/03/10 05:40:00', 35]
                    },
                    {
                        name: '2019/03/10 05:45:00',
                        value: ['2019/03/10 05:45:00', 41]
                    },
                    {
                        name: '2019/03/10 05:50:00',
                        value: ['2019/03/10 05:50:00', 40]
                    },
                    {
                        name: '2019/03/10 05:55:00',
                        value: ['2019/03/10 05:55:00', 42]
                    },
                    {
                        name: '2019/03/10 06:00:00',
                        value: ['2019/03/10 06:00:00', 40]
                    },
                    {
                        name: '2019/03/10 06:05:00',
                        value: ['2019/03/10 06:05:00', 39]
                    },
                    {
                        name: '2019/03/10 06:10:00',
                        value: ['2019/03/10 06:10:00', 41]
                    },
                    {
                        name: '2019/03/10 06:15:00',
                        value: ['2019/03/10 06:15:00', 40]
                    },
                    {
                        name: '2019/03/10 06:20:00',
                        value: ['2019/03/10 06:20:00', 43]
                    },
                    {
                        name: '2019/03/10 06:25:00',
                        value: ['2019/03/10 06:25:00', 40]
                    },
                    {
                        name: '2019/03/10 06:30:00',
                        value: ['2019/03/10 06:30:00', 48]
                    },
                    {
                        name: '2019/03/10 06:35:00',
                        value: ['2019/03/10 06:35:00', 50]
                    },
                    {
                        name: '2019/03/10 06:40:00',
                        value: ['2019/03/10 06:40:00', 50]
                    },
                    {
                        name: '2019/03/10 06:45:00',
                        value: ['2019/03/10 06:45:00', 53]
                    },
                    {
                        name: '2019/03/10 06:50:00',
                        value: ['2019/03/10 06:50:00', 55]
                    },
                    {
                        name: '2019/03/10 06:55:00',
                        value: ['2019/03/10 06:55:00', 57]
                    },
                    {
                        name: '2019/03/10 07:00:00',
                        value: ['2019/03/10 07:00:00', 56]
                    },
                    {
                        name: '2019/03/10 07:05:00',
                        value: ['2019/03/10 07:05:00', 52]
                    },
                    {
                        name: '2019/03/10 07:10:00',
                        value: ['2019/03/10 07:10:00', 55]
                    },
                    {
                        name: '2019/03/10 07:15:00',
                        value: ['2019/03/10 07:15:00', 59]
                    },
                    {
                        name: '2019/03/10 07:20:00',
                        value: ['2019/03/10 07:20:00', 62]
                    },
                    {
                        name: '2019/03/10 07:25:00',
                        value: ['2019/03/10 07:25:00', 67]
                    },
                    {
                        name: '2019/03/10 07:30:00',
                        value: ['2019/03/10 07:30:00', 69]
                    },
                    {
                        name: '2019/03/10 07:35:00',
                        value: ['2019/03/10 07:35:00', 69]
                    },
                    {
                        name: '2019/03/10 07:40:00',
                        value: ['2019/03/10 07:40:00', 74]
                    },
                    {
                        name: '2019/03/10 07:45:00',
                        value: ['2019/03/10 07:45:00', 77]
                    },
                    {
                        name: '2019/03/10 07:50:00',
                        value: ['2019/03/10 07:50:00', 77]
                    },
                    {
                        name: '2019/03/10 07:55:00',
                        value: ['2019/03/10 07:55:00', 80]
                    },
                    {
                        name: '2019/03/10 08:00:00',
                        value: ['2019/03/10 08:00:00', 77]
                    },
                    {
                        name: '2019/03/10 08:05:00',
                        value: ['2019/03/10 08:05:00', 86]
                    },
                    {
                        name: '2019/03/10 08:10:00',
                        value: ['2019/03/10 08:10:00', 84]
                    },
                    {
                        name: '2019/03/10 08:15:00',
                        value: ['2019/03/10 08:15:00', 86]
                    },
                    {
                        name: '2019/03/10 08:20:00',
                        value: ['2019/03/10 08:20:00', 87]
                    },
                    {
                        name: '2019/03/10 08:25:00',
                        value: ['2019/03/10 08:25:00', 90]
                    },
                    {
                        name: '2019/03/10 08:30:00',
                        value: ['2019/03/10 08:30:00', 90]
                    },
                    {
                        name: '2019/03/10 08:35:00',
                        value: ['2019/03/10 08:35:00', 90]
                    },
                    {
                        name: '2019/03/10 08:40:00',
                        value: ['2019/03/10 08:40:00', 91]
                    },
                    {
                        name: '2019/03/10 08:45:00',
                        value: ['2019/03/10 08:45:00', 98]
                    },
                    {
                        name: '2019/03/10 08:50:00',
                        value: ['2019/03/10 08:50:00', 95]
                    },
                    {
                        name: '2019/03/10 08:55:00',
                        value: ['2019/03/10 08:55:00', 100]
                    },
                    {
                        name: '2019/03/10 09:00:00',
                        value: ['2019/03/10 09:00:00', 100]
                    },
                    {
                        name: '2019/03/10 09:05:00',
                        value: ['2019/03/10 09:05:00', 97]
                    },
                    {
                        name: '2019/03/10 09:10:00',
                        value: ['2019/03/10 09:10:00', 97]
                    },
                    {
                        name: '2019/03/10 09:15:00',
                        value: ['2019/03/10 09:15:00', 100]
                    },
                    {
                        name: '2019/03/10 09:20:00',
                        value: ['2019/03/10 09:20:00', 100]
                    },
                    {
                        name: '2019/03/10 09:25:00',
                        value: ['2019/03/10 09:25:00', 100]
                    },
                    {
                        name: '2019/03/10 09:30:00',
                        value: ['2019/03/10 09:30:00', 100]
                    },
                    {
                        name: '2019/03/10 09:35:00',
                        value: ['2019/03/10 09:35:00', 100]
                    },
                    {
                        name: '2019/03/10 09:40:00',
                        value: ['2019/03/10 09:40:00', 99]
                    },
                    {
                        name: '2019/03/10 09:45:00',
                        value: ['2019/03/10 09:45:00', 100]
                    },
                    {
                        name: '2019/03/10 09:50:00',
                        value: ['2019/03/10 09:50:00', 98]
                    },
                    {
                        name: '2019/03/10 09:55:00',
                        value: ['2019/03/10 09:55:00', 96]
                    },
                    {
                        name: '2019/03/10 10:00:00',
                        value: ['2019/03/10 10:00:00', 100]
                    },
                    {
                        name: '2019/03/10 10:05:00',
                        value: ['2019/03/10 10:05:00', 97]
                    },
                    {
                        name: '2019/03/10 10:10:00',
                        value: ['2019/03/10 10:10:00', 98]
                    },
                    {
                        name: '2019/03/10 10:15:00',
                        value: ['2019/03/10 10:15:00', 94]
                    },
                    {
                        name: '2019/03/10 10:20:00',
                        value: ['2019/03/10 10:20:00', 97]
                    },
                    {
                        name: '2019/03/10 10:25:00',
                        value: ['2019/03/10 10:25:00', 98]
                    },
                    {
                        name: '2019/03/10 10:30:00',
                        value: ['2019/03/10 10:30:00', 99]
                    },
                    {
                        name: '2019/03/10 10:35:00',
                        value: ['2019/03/10 10:35:00', 94]
                    },
                    {
                        name: '2019/03/10 10:40:00',
                        value: ['2019/03/10 10:40:00', 96]
                    },
                    {
                        name: '2019/03/10 10:45:00',
                        value: ['2019/03/10 10:45:00', 95]
                    },
                    {
                        name: '2019/03/10 10:50:00',
                        value: ['2019/03/10 10:50:00', 99]
                    },
                    {
                        name: '2019/03/10 10:55:00',
                        value: ['2019/03/10 10:55:00', 95]
                    },
                    {
                        name: '2019/03/10 11:00:00',
                        value: ['2019/03/10 11:00:00', 98]
                    },
                    {
                        name: '2019/03/10 11:05:00',
                        value: ['2019/03/10 11:05:00', 95]
                    },
                    {
                        name: '2019/03/10 11:10:00',
                        value: ['2019/03/10 11:10:00', 98]
                    },
                    {
                        name: '2019/03/10 11:15:00',
                        value: ['2019/03/10 11:15:00', 99]
                    },
                    {
                        name: '2019/03/10 11:20:00',
                        value: ['2019/03/10 11:20:00', 98]
                    },
                    {
                        name: '2019/03/10 11:25:00',
                        value: ['2019/03/10 11:25:00', 95]
                    },
                    {
                        name: '2019/03/10 11:30:00',
                        value: ['2019/03/10 11:30:00', 95]
                    },
                    {
                        name: '2019/03/10 11:35:00',
                        value: ['2019/03/10 11:35:00', 91]
                    },
                    {
                        name: '2019/03/10 11:40:00',
                        value: ['2019/03/10 11:40:00', 87]
                    },
                    {
                        name: '2019/03/10 11:45:00',
                        value: ['2019/03/10 11:45:00', 86]
                    },
                    {
                        name: '2019/03/10 11:50:00',
                        value: ['2019/03/10 11:50:00', 83]
                    },
                    {
                        name: '2019/03/10 11:55:00',
                        value: ['2019/03/10 11:55:00', 81]
                    },
                    {
                        name: '2019/03/10 12:00:00',
                        value: ['2019/03/10 12:00:00', 82]
                    },
                    {
                        name: '2019/03/10 12:05:00',
                        value: ['2019/03/10 12:05:00', 82]
                    },
                    {
                        name: '2019/03/10 12:10:00',
                        value: ['2019/03/10 12:10:00', 88]
                    },
                    {
                        name: '2019/03/10 12:15:00',
                        value: ['2019/03/10 12:15:00', 82]
                    },
                    {
                        name: '2019/03/10 12:20:00',
                        value: ['2019/03/10 12:20:00', 84]
                    },
                    {
                        name: '2019/03/10 12:25:00',
                        value: ['2019/03/10 12:25:00', 83]
                    },
                    {
                        name: '2019/03/10 12:30:00',
                        value: ['2019/03/10 12:30:00', 85]
                    },
                    {
                        name: '2019/03/10 12:35:00',
                        value: ['2019/03/10 12:35:00', 84]
                    },
                    {
                        name: '2019/03/10 12:40:00',
                        value: ['2019/03/10 12:40:00', 83]
                    },
                    {
                        name: '2019/03/10 12:45:00',
                        value: ['2019/03/10 12:45:00', 85]
                    },
                    {
                        name: '2019/03/10 12:50:00',
                        value: ['2019/03/10 12:50:00', 83]
                    },
                    {
                        name: '2019/03/10 12:55:00',
                        value: ['2019/03/10 12:55:00', 79]
                    },
                    {
                        name: '2019/03/10 13:00:00',
                        value: ['2019/03/10 13:00:00', 78]
                    },
                    {
                        name: '2019/03/10 13:05:00',
                        value: ['2019/03/10 13:05:00', 75]
                    },
                    {
                        name: '2019/03/10 13:10:00',
                        value: ['2019/03/10 13:10:00', 78]
                    },
                    {
                        name: '2019/03/10 13:15:00',
                        value: ['2019/03/10 13:15:00', 76]
                    },
                    {
                        name: '2019/03/10 13:20:00',
                        value: ['2019/03/10 13:20:00', 80]
                    },
                    {
                        name: '2019/03/10 13:25:00',
                        value: ['2019/03/10 13:25:00', 82]
                    },
                    {
                        name: '2019/03/10 13:30:00',
                        value: ['2019/03/10 13:30:00', 82]
                    },
                    {
                        name: '2019/03/10 13:35:00',
                        value: ['2019/03/10 13:35:00', 85]
                    },
                    {
                        name: '2019/03/10 13:40:00',
                        value: ['2019/03/10 13:40:00', 88]
                    },
                    {
                        name: '2019/03/10 13:45:00',
                        value: ['2019/03/10 13:45:00', 90]
                    },
                    {
                        name: '2019/03/10 13:50:00',
                        value: ['2019/03/10 13:50:00', 85]
                    },
                    {
                        name: '2019/03/10 13:55:00',
                        value: ['2019/03/10 13:55:00', 92]
                    },
                    {
                        name: '2019/03/10 14:00:00',
                        value: ['2019/03/10 14:00:00', 93]
                    },
                    {
                        name: '2019/03/10 14:05:00',
                        value: ['2019/03/10 14:05:00', 90]
                    },
                    {
                        name: '2019/03/10 14:10:00',
                        value: ['2019/03/10 14:10:00', 96]
                    },
                    {
                        name: '2019/03/10 14:15:00',
                        value: ['2019/03/10 14:15:00', 93]
                    },
                    {
                        name: '2019/03/10 14:20:00',
                        value: ['2019/03/10 14:20:00', 94]
                    },
                    {
                        name: '2019/03/10 14:25:00',
                        value: ['2019/03/10 14:25:00', 95]
                    },
                    {
                        name: '2019/03/10 14:30:00',
                        value: ['2019/03/10 14:30:00', 93]
                    },
                    {
                        name: '2019/03/10 14:35:00',
                        value: ['2019/03/10 14:35:00', 93]
                    },
                    {
                        name: '2019/03/10 14:40:00',
                        value: ['2019/03/10 14:40:00', 95]
                    },
                    {
                        name: '2019/03/10 14:45:00',
                        value: ['2019/03/10 14:45:00', 96]
                    },
                    {
                        name: '2019/03/10 14:50:00',
                        value: ['2019/03/10 14:50:00', 98]
                    },
                    {
                        name: '2019/03/10 14:55:00',
                        value: ['2019/03/10 14:55:00', 99]
                    },
                    {
                        name: '2019/03/10 15:00:00',
                        value: ['2019/03/10 15:00:00', 90]
                    },
                    {
                        name: '2019/03/10 15:05:00',
                        value: ['2019/03/10 15:05:00', 92]
                    },
                    {
                        name: '2019/03/10 15:10:00',
                        value: ['2019/03/10 15:10:00', 94]
                    },
                    {
                        name: '2019/03/10 15:15:00',
                        value: ['2019/03/10 15:15:00', 90]
                    },
                    {
                        name: '2019/03/10 15:20:00',
                        value: ['2019/03/10 15:20:00', 93]
                    },
                    {
                        name: '2019/03/10 15:25:00',
                        value: ['2019/03/10 15:25:00', 95]
                    },
                    {
                        name: '2019/03/10 15:30:00',
                        value: ['2019/03/10 15:30:00', 96]
                    },
                    {
                        name: '2019/03/10 15:35:00',
                        value: ['2019/03/10 15:35:00', 97]
                    },
                    {
                        name: '2019/03/10 15:40:00',
                        value: ['2019/03/10 15:40:00', 94]
                    },
                    {
                        name: '2019/03/10 15:45:00',
                        value: ['2019/03/10 15:45:00', 100]
                    },
                    {
                        name: '2019/03/10 15:50:00',
                        value: ['2019/03/10 15:50:00', 98]
                    },
                    {
                        name: '2019/03/10 15:55:00',
                        value: ['2019/03/10 15:55:00', 96]
                    },
                    {
                        name: '2019/03/10 16:00:00',
                        value: ['2019/03/10 16:00:00', 95]
                    },
                    {
                        name: '2019/03/10 16:05:00',
                        value: ['2019/03/10 16:05:00', 96]
                    },
                    {
                        name: '2019/03/10 16:10:00',
                        value: ['2019/03/10 16:10:00', 95]
                    },
                    {
                        name: '2019/03/10 16:15:00',
                        value: ['2019/03/10 16:15:00', 100]
                    },
                    {
                        name: '2019/03/10 16:20:00',
                        value: ['2019/03/10 16:20:00', 95]
                    },
                    {
                        name: '2019/03/10 16:25:00',
                        value: ['2019/03/10 16:25:00', 99]
                    },
                    {
                        name: '2019/03/10 16:30:00',
                        value: ['2019/03/10 16:30:00', 100]
                    },
                    {
                        name: '2019/03/10 16:35:00',
                        value: ['2019/03/10 16:35:00', 97]
                    },
                    {
                        name: '2019/03/10 16:40:00',
                        value: ['2019/03/10 16:40:00', 100]
                    },
                    {
                        name: '2019/03/10 16:45:00',
                        value: ['2019/03/10 16:45:00', 99]
                    },
                    {
                        name: '2019/03/10 16:50:00',
                        value: ['2019/03/10 16:50:00', 100]
                    },
                    {
                        name: '2019/03/10 16:55:00',
                        value: ['2019/03/10 16:55:00', 96]
                    },
                    {
                        name: '2019/03/10 17:00:00',
                        value: ['2019/03/10 17:00:00', 99]
                    },
                    {
                        name: '2019/03/10 17:05:00',
                        value: ['2019/03/10 17:05:00', 93]
                    },
                    {
                        name: '2019/03/10 17:10:00',
                        value: ['2019/03/10 17:10:00', 94]
                    },
                    {
                        name: '2019/03/10 17:15:00',
                        value: ['2019/03/10 17:15:00', 91]
                    },
                    {
                        name: '2019/03/10 17:20:00',
                        value: ['2019/03/10 17:20:00', 84]
                    },
                    {
                        name: '2019/03/10 17:25:00',
                        value: ['2019/03/10 17:25:00', 84]
                    },
                    {
                        name: '2019/03/10 17:30:00',
                        value: ['2019/03/10 17:30:00', 82]
                    },
                    {
                        name: '2019/03/10 17:35:00',
                        value: ['2019/03/10 17:35:00', 74]
                    },
                    {
                        name: '2019/03/10 17:40:00',
                        value: ['2019/03/10 17:40:00', 74]
                    },
                    {
                        name: '2019/03/10 17:45:00',
                        value: ['2019/03/10 17:45:00', 73]
                    },
                    {
                        name: '2019/03/10 17:50:00',
                        value: ['2019/03/10 17:50:00', 67]
                    },
                    {
                        name: '2019/03/10 17:55:00',
                        value: ['2019/03/10 17:55:00', 72]
                    },
                    {
                        name: '2019/03/10 18:00:00',
                        value: ['2019/03/10 18:00:00', 68]
                    },
                    {
                        name: '2019/03/10 18:05:00',
                        value: ['2019/03/10 18:05:00', 66]
                    },
                    {
                        name: '2019/03/10 18:10:00',
                        value: ['2019/03/10 18:10:00', 66]
                    },
                    {
                        name: '2019/03/10 18:15:00',
                        value: ['2019/03/10 18:15:00', 66]
                    },
                    {
                        name: '2019/03/10 18:20:00',
                        value: ['2019/03/10 18:20:00', 61]
                    },
                    {
                        name: '2019/03/10 18:25:00',
                        value: ['2019/03/10 18:25:00', 57]
                    },
                    {
                        name: '2019/03/10 18:30:00',
                        value: ['2019/03/10 18:30:00', 58]
                    },
                    {
                        name: '2019/03/10 18:35:00',
                        value: ['2019/03/10 18:35:00', 56]
                    },
                    {
                        name: '2019/03/10 18:40:00',
                        value: ['2019/03/10 18:40:00', 55]
                    },
                    {
                        name: '2019/03/10 18:45:00',
                        value: ['2019/03/10 18:45:00', 57]
                    },
                    {
                        name: '2019/03/10 18:50:00',
                        value: ['2019/03/10 18:50:00', 54]
                    },
                    {
                        name: '2019/03/10 18:55:00',
                        value: ['2019/03/10 18:55:00', 57]
                    },
                    {
                        name: '2019/03/10 19:00:00',
                        value: ['2019/03/10 19:00:00', 52]
                    },
                    {
                        name: '2019/03/10 19:05:00',
                        value: ['2019/03/10 19:05:00', 55]
                    },
                    {
                        name: '2019/03/10 19:10:00',
                        value: ['2019/03/10 19:10:00', 53]
                    },
                    {
                        name: '2019/03/10 19:15:00',
                        value: ['2019/03/10 19:15:00', 52]
                    },
                    {
                        name: '2019/03/10 19:20:00',
                        value: ['2019/03/10 19:20:00', 56]
                    },
                    {
                        name: '2019/03/10 19:25:00',
                        value: ['2019/03/10 19:25:00', 58]
                    },
                    {
                        name: '2019/03/10 19:30:00',
                        value: ['2019/03/10 19:30:00', 57]
                    },
                    {
                        name: '2019/03/10 19:35:00',
                        value: ['2019/03/10 19:35:00', 62]
                    },
                    {
                        name: '2019/03/10 19:40:00',
                        value: ['2019/03/10 19:40:00', 61]
                    },
                    {
                        name: '2019/03/10 19:45:00',
                        value: ['2019/03/10 19:45:00', 67]
                    },
                    {
                        name: '2019/03/10 19:50:00',
                        value: ['2019/03/10 19:50:00', 61]
                    },
                    {
                        name: '2019/03/10 19:55:00',
                        value: ['2019/03/10 19:55:00', 66]
                    },
                    {
                        name: '2019/03/10 20:00:00',
                        value: ['2019/03/10 20:00:00', 67]
                    },
                    {
                        name: '2019/03/10 20:05:00',
                        value: ['2019/03/10 20:05:00', 66]
                    },
                    {
                        name: '2019/03/10 20:10:00',
                        value: ['2019/03/10 20:10:00', 62]
                    },
                    {
                        name: '2019/03/10 20:15:00',
                        value: ['2019/03/10 20:15:00', 69]
                    },
                    {
                        name: '2019/03/10 20:20:00',
                        value: ['2019/03/10 20:20:00', 62]
                    },
                    {
                        name: '2019/03/10 20:25:00',
                        value: ['2019/03/10 20:25:00', 62]
                    },
                    {
                        name: '2019/03/10 20:30:00',
                        value: ['2019/03/10 20:30:00', 65]
                    },
                    {
                        name: '2019/03/10 20:35:00',
                        value: ['2019/03/10 20:35:00', 61]
                    },
                    {
                        name: '2019/03/10 20:40:00',
                        value: ['2019/03/10 20:40:00', 60]
                    },
                    {
                        name: '2019/03/10 20:45:00',
                        value: ['2019/03/10 20:45:00', 53]
                    },
                    {
                        name: '2019/03/10 20:50:00',
                        value: ['2019/03/10 20:50:00', 53]
                    },
                    {
                        name: '2019/03/10 20:55:00',
                        value: ['2019/03/10 20:55:00', 50]
                    },
                    {
                        name: '2019/03/10 21:00:00',
                        value: ['2019/03/10 21:00:00', 46]
                    },
                    {
                        name: '2019/03/10 21:05:00',
                        value: ['2019/03/10 21:05:00', 42]
                    },
                    {
                        name: '2019/03/10 21:10:00',
                        value: ['2019/03/10 21:10:00', 44]
                    },
                    {
                        name: '2019/03/10 21:15:00',
                        value: ['2019/03/10 21:15:00', 36]
                    },
                    {
                        name: '2019/03/10 21:20:00',
                        value: ['2019/03/10 21:20:00', 37]
                    },
                    {
                        name: '2019/03/10 21:25:00',
                        value: ['2019/03/10 21:25:00', 35]
                    },
                    {
                        name: '2019/03/10 21:30:00',
                        value: ['2019/03/10 21:30:00', 29]
                    },
                    {
                        name: '2019/03/10 21:35:00',
                        value: ['2019/03/10 21:35:00', 33]
                    },
                    {
                        name: '2019/03/10 21:40:00',
                        value: ['2019/03/10 21:40:00', 33]
                    },
                    {
                        name: '2019/03/10 21:45:00',
                        value: ['2019/03/10 21:45:00', 33]
                    },
                    {
                        name: '2019/03/10 21:50:00',
                        value: ['2019/03/10 21:50:00', 33]
                    },
                    {
                        name: '2019/03/10 21:55:00',
                        value: ['2019/03/10 21:55:00', 26]
                    },
                    {
                        name: '2019/03/10 22:00:00',
                        value: ['2019/03/10 22:00:00', 28]
                    },
                    {
                        name: '2019/03/10 22:05:00',
                        value: ['2019/03/10 22:05:00', 29]
                    },
                    {
                        name: '2019/03/10 22:10:00',
                        value: ['2019/03/10 22:10:00', 27]
                    },
                    {
                        name: '2019/03/10 22:15:00',
                        value: ['2019/03/10 22:15:00', 25]
                    },
                    {
                        name: '2019/03/10 22:20:00',
                        value: ['2019/03/10 22:20:00', 28]
                    },
                    {
                        name: '2019/03/10 22:25:00',
                        value: ['2019/03/10 22:25:00', 25]
                    },
                    {
                        name: '2019/03/10 22:30:00',
                        value: ['2019/03/10 22:30:00', 28]
                    },
                    {
                        name: '2019/03/10 22:35:00',
                        value: ['2019/03/10 22:35:00', 26]
                    },
                    {
                        name: '2019/03/10 22:40:00',
                        value: ['2019/03/10 22:40:00', 24]
                    },
                    {
                        name: '2019/03/10 22:45:00',
                        value: ['2019/03/10 22:45:00', 27]
                    },
                    {
                        name: '2019/03/10 22:50:00',
                        value: ['2019/03/10 22:50:00', 22]
                    },
                    {
                        name: '2019/03/10 22:55:00',
                        value: ['2019/03/10 22:55:00', 25]
                    },
                    {
                        name: '2019/03/10 23:00:00',
                        value: ['2019/03/10 23:00:00', 23]
                    },
                    {
                        name: '2019/03/10 23:05:00',
                        value: ['2019/03/10 23:05:00', 28]
                    },
                    {
                        name: '2019/03/10 23:10:00',
                        value: ['2019/03/10 23:10:00', 24]
                    },
                    {
                        name: '2019/03/10 23:15:00',
                        value: ['2019/03/10 23:15:00', 21]
                    },
                    {
                        name: '2019/03/10 23:20:00',
                        value: ['2019/03/10 23:20:00', 27]
                    },
                    {
                        name: '2019/03/10 23:25:00',
                        value: ['2019/03/10 23:25:00', 27]
                    },
                    {
                        name: '2019/03/10 23:30:00',
                        value: ['2019/03/10 23:30:00', 23]
                    },
                    {
                        name: '2019/03/10 23:35:00',
                        value: ['2019/03/10 23:35:00', 21]
                    },
                    {
                        name: '2019/03/10 23:40:00',
                        value: ['2019/03/10 23:40:00', 22]
                    },
                    {
                        name: '2019/03/10 23:45:00',
                        value: ['2019/03/10 23:45:00', 22]
                    },
                    {
                        name: '2019/03/10 23:50:00',
                        value: ['2019/03/10 23:50:00', 25]
                    },
                    {
                        name: '2019/03/10 23:55:00',
                        value: ['2019/03/10 23:55:00', 20]
                    }
                ]
                