$(document).ready(function() {
	$('.popup__btn').on('click touchstart', function(event){
		event.preventDefault();
		$('.popup').fadeIn(); 
		$("body").css("overflow","hidden");
		$("body").css("padding-right","17px");
		$(".popup").toggleClass('popup__padding');
	});
	$('.popup__close , .popup__area').on('click touchstart', function(event){
		event.preventDefault();
		$('.popup').fadeOut();
		$("body").css("overflow","visible");
		$("body").css("padding-right","0px");
		$(".popup").toggleClass('popup__padding');
	});
	
	$('.spoiler__title').click(function(event) {
		if($('.services__spoilers').hasClass('one')) {
			$('.spoiler__title').not($(this)).removeClass('active');
			$('.spoiler__content').not($(this).next()).slideUp(300);
		}

		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.nav__menu').on('click touchstart', function(event){
		event.preventDefault();
		$('.menu__list').show(300);
		$('.nav__menu').css("display","none");
	});
	$('.close-menu').on('click touchstart', function(event){
		event.preventDefault();
		$('.menu__list').hide(300);
		$('.nav__menu').css("display","block");
	});
});