// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
	$('.menu-wrapper').on('click', function() {
		$('.menu-wrapper').toggleClass('animate');
		$('.header_mob-menu').toggleClass('header_mob-menu-active');
		
	});
	// $('.modal_close').on('click', function() {
	// 	$('.modal').toggleClass('modal_visible');
	// });
	// $('.buy_btn').on('click', function() {
	// 	$('.modal').toggleClass('modal_visible');
	// });
	
	function modalFunc() {
		var modal = document.querySelector('.modal ');
		var modalContent = document.querySelector('.modal_content ');
		var btn = document.querySelector(".buy_btn");
		var span = document.querySelector(".modal_close");
		var buy = document.querySelector(".modal_btn")
	
		btn.onclick = function() {
			modal.style.display = "block";
		}
		
		span.onclick = function() {
			modal.style.display = "none";
		}
		buy.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
	modalFunc();
	
});
