var url = 'mail.php';
/**
 * anchor.js - jQuery Plugin
 * Jump to a specific section smoothly
 *
 * @dependencies	jQuery v1.5.0 http://jquery.com
 * @author			Cornel Boppart <cornel@bopp-art.com>
 * @copyright		Author
 
 * @version		1.0.5 (02/11/2014)
 */

;(function ($) {
	
	window.anchor = {
		
		/**
		 * Default settings
		 *
		 */
		settings: {
			transitionDuration: 2000,
			transitionTimingFunction: 'swing',
			labels: {
				error: 'Couldn\'t find any section'
			}
		},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options	The plugin options (Merged with default settings)
		 * @return	{object}	this	The current element itself
		 */
		init: function (options) {
			// Apply merged settings to the current object
			$(this).data('settings', $.extend(anchor.settings, options));

			return this.each(function () {
				var $this = $(this);

				$this.unbind('click').click(function (event) {
					event.preventDefault();
					anchor.jumpTo(
						anchor.getTopOffsetPosition($this),
						$this.data('settings')
					);
				});
			});
		},

		/**
		 * Gets the top offset position
		 *
		 * @param	{object}	$object				The root object to get sections position from
		 * @return	{int}		topOffsetPosition	The top offset position
		 */
		getTopOffsetPosition: function ($object) {
			var href = $object.attr('href'),
				$section = $($(href).get(0)),
				documentHeight = $(document).height(),
				browserHeight = $(window).height();

			if (!$section || $section.length < 1) {
				throw new ReferenceError(anchor.settings.labels.error);
			}

			if (($section.offset().top + browserHeight) > documentHeight) {
				return documentHeight - browserHeight;
			} else {
				return $section.offset().top;
			}
		},
		
		/**
		 * Jumps to the specific position
		 *
		 * @param	{int}		topOffsetPosition	The top offset position
		 * @param	{object}	settings			The object specific settings
		 * @return	{void}
		 */
		jumpTo: function (topOffsetPosition, settings) {
			var $viewport = $('html, body');

			$viewport.animate(
				{scrollTop: topOffsetPosition},
				settings.transitionDuration,
				settings.transitionTimingFunction
			);

				// Stop the animation immediately, if a user manually scrolls during the animation.
			$viewport.bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(event){
				if (event.which > 0 || event.type === 'mousedown' || event.type === 'mousewheel') {
					$viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
				}
			});
		}

	};

	$.fn.anchor = function (method) {
			// Method calling logic
		if (anchor[method]) {
			return anchor[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return anchor.init.apply(this, arguments);
		} else {
			return $.error('Method ' + method + ' does not exist on jQuery.anchor');
		}
	};

})(jQuery);

if (typeof ymaps !== "undefined" && typeof addr !== "undefined") {
	ymaps.ready(init);
	var yaMap;
	function init() {
		ymaps.geocode(addr, {
			results: 1
		}).then(function (res) {

			var coords = res.geoObjects.get(0).geometry.getCoordinates(),
				myPlacemark = new ymaps.Placemark(coords);
			yaMap = new ymaps.Map("map",{
				center: coords,
				zoom: 17,
				controls: ['zoomControl', 'fullscreenControl']
			});

			yaMap.geoObjects.add(myPlacemark);
		});
	}
}
if (typeof(jQuery) !== "undefined") {
	$(document).ready(function () {
		// var l = 0;
		// $('#callme-tel').on('keydown', function (e) {
		// 	var k = e.which,
		// 		val = $(this).val();

		// 	console.log(k);
		// 	if (k <= 57 && k >= 48) {
		// 		switch (l) {
		// 			case 0:
		// 				if (k == 55) {
		// 					$(this).val('+7 (');
		// 					l++;
		// 				} else if (k == 56) {
		// 					$(this).val('8 (');
		// 					l++;
		// 				}
		// 				e.preventDefault();
		// 				break;

		// 			case 1:
		// 			case 2:
		// 			case 3:
		// 			case 5:
		// 			case 6:
		// 			case 8:
		// 			case 10:
		// 				if (k <= 57 && k >= 48) {
		// 					l++;
		// 				} else {
		// 					e.preventDefault();
		// 				}
		// 				break;
		// 			case 4:
		// 			case 7:
		// 			case 9:
		// 				if (k <= 57 && k >= 48) {
		// 					l++;
		// 					$(this).val(val + '-')
		// 				} else {
		// 					e.preventDefault();
		// 				}
		// 				break;
		// 			default:
		// 				e.preventDefault();
		// 		}
		// 	} else if (k == 8) {
		// 		if (val = '') {
		// 			l = 0;
		// 		}
		// 	}


		// })






		if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
			$('.section-hero__video').hide();
			$('.section-hero__video-overlay').hide();
		}
//		$.datepicker.regional['ru'] = {
//            closeText: 'Закрыть',
//            prevText: '&#x3c;Пред',
//            nextText: 'След&#x3e;',
//            currentText: 'Сегодня',
//            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
//            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
//            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
//            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
//            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
//            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
//            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
//            weekHeader: 'Нед',
//            dateFormat: 'dd.mm.yy',
//            firstDay: 1,
//            isRTL: false,
//            showMonthAfterYear: false,
//            yearSuffix: ''
//        };
//		
//		$.datepicker.setDefaults( $.datepicker.regional['ru'] );
//
//		$('input[data-custom-placeholder]')
//			.focus(function() {
//				$('label[for="' + $(this).attr('id') + '"]').addClass('active');
//			})
//			.blur(function() {
//				if ($(this).val() == '') {
//					$('label[for="' + $(this).attr('id') + '"]').removeClass('active');
//				}
//			})
//		
//		
//		if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
//			$('#registration-date')
//				.attr('type', 'date')
//				.focus(function() {
//					$('label[for="registration-date"]').addClass('active');
//				})
//				.blur(function() {
//					if ($(this).val() == '') {
//						$('label[for="registration-date"]').removeClass('active');
//					}
//				})
////			$('#registration-time')
////				.attr('type', 'time')
////				.focus(function() {
////					$('label[for="registration-time').addClass('active');
////				})
////				.blur(function() {
////					if ($(this).val() == '') {
////						$('label[for="registration-time"]').removeClass('active');
////					}
////				})
//		} else {
//			$('#registration-date')
//				.focus(function() {
//					$('label[for="' + $(this).attr('id') + '"]').addClass('active');
//				})
//				.datepicker({
//		//			dateFormat: 'dd.mm.yy',
//					minDate: new Date(),
//					prevText: '<',
//					nextText: '>',
//					onClose: function (date) {
//						if (date == '') {
//							$('label[for="' + $(this).attr('id') + '"]').removeClass('active');
//						}
//					}
//				});
//			
//		}
//		$('#registration-time').timeDropper({
//			format: 'HH:00',
//			setCurrentTime: false
//		});

//		$('.nav-menu-btn').click(function() {
//			if ($(this).hasClass('open')) {
//				$(this).removeClass('open');
//				$(this).children('.nav-menu-btn__text').html('Открыть меню')
//				$('.menu').removeClass('open');
//			} else {
//				$(this).addClass('open');
//				$(this).children('.nav-menu-btn__text').html('Закрыть меню');
//				$('.menu').addClass('open');
//			}
//		})
//
//
//		$('.section-game-list__category-link').click(function(e) {
//			e.preventDefault();
//
//			$('.section-game-list__category-link').removeClass('active');
//			$(this).addClass('active');
//
//			$('.section-game-list__tab').removeClass('active');
//			$('.section-game-list__tab[data-tab="' + $(this).attr('data-tab') + '"]').addClass('active');
//
//		})
//		
////		var totalPrice = 0;
//		$('.reservation__item').click(function () {
//			$(this).toggleClass('active');
//			var total = 0;
//			$('.reservation__item.active').each(function () {
//				total += +$(this).attr('data-price');
//			})
//			$('.reservation__total-num').html(total.toString() + ' Р');
//		})
//		
//		
//		
		var popup = false;
		$('.popup').hide();
		
		
		function showPopup (el) {
			$('body').css('overflow', 'hidden');
			el.addClass('active');
			el.fadeIn();
			popup = true;
		}
		
		function hidePopup (el) {
			el.fadeOut();
			el.removeClass('active');
			$('body').css('overflow', 'auto');
			popup = false;
		}
		
		
		$('[data-popup]').click(function (e) {
			e.preventDefault();
			if (popup) {
				hidePopup($('.popup.active'));
			} else {
				showPopup($('#' + $(this).attr('data-popup')));
			}
		})
		
		$('.popup').click(function(e) {
			if ($(e.target).hasClass('popup')) {
				hidePopup($(this));
			}
		})
		$('.popup__btn-close').click(function () {
			hidePopup($(this).parents('.popup'));
		})
//		
//		
//		$('form').on('submit', function (e) {
//			e.preventDefault();
//			
//			
//			var popupBlock = $(e.target).parent();
//			if (popupBlock.attr('id') == 'callme') {
//				if ($('#callme-name').val() == '' || $('#callme-tel').val() == '' || $('#callme-email').val() == '') {
//					alert('Не все поля заполнены');
//					return;
//				}
//			} else if (popupBlock.attr('id') == 'registration'){
//				if ($('#promo-game').prop("checked") == false && $('#test-game').prop("checked") == false && $('#one-hour-of-play').prop("checked") == false) {
//					alert('Не все поля заполнены');
//					return;
//				}
//				
//				if ($('#registration-name').val() == '' || $('#registration-tel').val() == '' || $('#registration-date').val() == '') {
//					alert('Не все поля заполнены');
//					return;
//				}
//			}
//			if (typeof yaCounter47279892 != 'undefined') {
//				yaCounter47279892.reachGoal('zayavka');
//			} else {
//				console.log('Adblock detected')
//			}
//			var data = $(this).serialize(),
//				htmlText = popupBlock.find('.popup-wrapper__btn').html();
//			
//			$.ajax({
//				type: "POST",
//				url: url,
//				data: data,
//				beforeSend: function () {
//					popupBlock.find('.popup-wrapper__btn').html('Отправка...');
//				},
//				error: function () {
//					popupBlock.find('.popup-wrapper__btn').html('Ошибка');
//					setTimeout(function () {
//						popupBlock.find('.popup-wrapper__btn').html(htmlText);
//					}, 5000)
//				},
//				success: function () {
//					if (popupBlock.attr('id') == 'registration') {
//						alert("Благодарим за заявку! Мы перезвоним вам в ближайшее время для подтверждения бронирования");
//					} else if (popupBlock.attr('id') == 'callme') {
//						alert("Благодарим за заявку! Мы перезвоним вам в ближайшее время");
//					}
//					
//					hidePopup(popupBlock);
//					popupBlock.find('.popup-wrapper__btn').html(htmlText);
//				}
//			});
//		})
		
		
		// interview-form
		// guest-visit-form
		// call-me-form
		// guest-visit-form-m
		// thanks-and-gift-form
		
		$('form').on('submit', function (e) {
			e.preventDefault();
			var data = $(this).serialize();
			
			console.log(data);
			
			var id = $(this).attr('id');
			
			if (id == 'interview-form') {
				showPopup ($('#thanks-and-gift'));
				
			} else if (id == 'guest-visit-form') {
				showPopup ($('#thanks-and-gift'));
				
			} else if (id == 'call-me-form') {
				hidePopup ($('#call-me'));
				showPopup ($('#thanks'));
				
			} else if (id == 'guest-visit-form-m') {
				hidePopup ($('#guest-visit-m'));
				showPopup ($('#thanks-and-gift'));
				
			} else if (id == 'thanks-and-gift-form') {
				
			}
//			
//			$.ajax({
//				type: "POST",
//				url: url,
//				data: data,
////				beforeSend: function () {
////					popupBlock.find('.popup-wrapper__btn').html('Отправка...');
////				},
//				error: function () {
//					
//				},
//				success: function () {
//					
//				}
//			});
		});
		
		$('#bonus-1').show();
		$('#interview-go-to-2').click(function () {
			$('.step__item').removeClass('active');
			$('#interview-step-2').addClass('active');
			$('.step__discount-count').html('4000 р')
			$('#bonus-2').show();
			$('#step-scale-2').addClass('active');
		})
		$('#interview-go-to-3').click(function () {
			$('.step__item').removeClass('active');
			$('#interview-step-3').addClass('active');
			$('.step__discount-count').html('6000 р')
			$('#bonus-3').show();
			$('#step-scale-3').addClass('active');
		})
		$('#interview-go-to-4').click(function () {
			$('.step__item').removeClass('active');
			$('#interview-step-4').addClass('active');
			$('.step__discount-count').html('8000 р')
			$('#bonus-4').show();
			$('#step-scale-4').addClass('active');
		})
		$('#interview-go-to-5').click(function () {
			$('.step__item').removeClass('active');
			$('#interview-step-5').addClass('active');
			$('.step__discount-count').html('10000 р')
			$('#bonus-5').show();
			$('#step-scale-5').addClass('active');
		})
		$('#interview-go-to-6').click(function () {
			$('.step__item').removeClass('active');
			$('#interview-step-6').addClass('active');
		})
		
		$('.scheme-list__item').hover(
			function() {
				$('.scheme-map__pin[data-pin="' + $(this).attr('data-pin') + '"]').addClass('active');
			},
			function() {
				$('.scheme-map__pin').removeClass('active');
			}
		);
		
		$('.scheme-map__pin').hover(
			function() {
				var el = $('.scheme-list__item[data-pin="' + $(this).attr('data-pin') + '"]'),
					pos = el.position().top + $('.scheme-list__container').scrollTop() - 50;
				
				console.log(pos);
				el.addClass('active');
				$('.scheme-list__container').animate({ scrollTop: pos }, 500)
			},
			function() {
				$('.scheme-list__item').removeClass('active');
			}
		)
		$('.scheme-list__btn-up').click(function() {
			$('.scheme-list__container').animate({ scrollTop: 0 }, 500);
		})
		$('.scheme-list__btn-down').click(function() {
			$('.scheme-list__container').animate({ scrollTop: 700 }, 500);
		})
		
		
		$('a[data-anchor]').anchor({
			transitionDuration : 1000
		});
		
		if (typeof $.fn.owlCarousel  !== 'undefined') {

			$('.gallery-slider').addClass('owl-carousel owl-carousel_no-dots owl-theme');
			$('.gallery-slider').owlCarousel({ 
				loop: false,
				nav: false,
				navText: [ '', '' ],
				items: 1,
				autoHeight: true,
//				autoWidth:true, 
//				center:true,
				onInitialized: sliderChange,
//				onChanged: test,
				onTranslated: sliderChange,
				responsive : {
					768 : {
						nav: true
					}
				}
			})
			function sliderChange (e) {
//				console.log($(e.target).find('.owl-item.active').children().attr('alt'));
				console.log(String(e.item.index + 1) + '/' + String(e.item.count) + " " + $(e.target).find('.owl-item.active').children().attr('alt'));
				var index = e.item.index + 1,
					count = e.item.count;
				if (index < 10) {
					index = '0' + String(index);
				}
				if (count < 10) {
					count = '0' + String(count);
				}
				$('.gallery__index').html(index);
				$('.gallery__count').html(count);
				$('.gallery__title').html($(e.target).find('.owl-item.active').children().attr('alt'));
				
			}
//			$('.gallery-slider').on('initialized.owl.carousel', function (e) {
//				console.log(e);
//			})
			
			
		}
	})
	
}