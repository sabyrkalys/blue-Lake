$(document).ready(function($) {
// акции
	$('.main-stock').slick({
		  	infinite: true,
		  	//dots:true,
		  	//speed: 500,
		  	//autoplay: true,
			slidesToShow: 1,
			//centerPadding: '18px',
			//centerMode: true,
			arrows: false,
			focusOnSelect: true,
			//asNavFor: '.slider-for',
			slidesToScroll: 1,
			//prevArrow:"<div class=\"left_arow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			//nextArrow:"<div class=\"right_arow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
	});
	// Слайдер на отзвывы
	$('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            //speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            adaptiveHeight: true
        });
	$('.slider-nav').slick({
		  	infinite: true,
		  	dots:true,
		  	//speed: 500,
		  	//autoplay: true,
			slidesToShow: 3,
			centerPadding: '2px',
			centerMode: true,
			focusOnSelect: true,
			asNavFor: '.slider-for',
			slidesToScroll: 1,
			prevArrow:"<div class=\"left_arow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			nextArrow:"<div class=\"right_arow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			    }, {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true,
			        prevArrow:false,
			        nextArrow:false
			      }
			    }
			  ]
	});
// Слайдер на комнаты
	$('.rooms').slick({
		  	infinite: true,
		  	dots:true,
		  	// speed: 1000,
		  	// autoplay: true,
			slidesToShow: 2,
			arrows: false,
			//centerPadding: '18px',
			//centerMode: true,
			//focusOnSelect: true,
			//asNavFor: '.slider-for',
			slidesToScroll: 1,
			//prevArrow:"<div class=\"left_arow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			//nextArrow:"<div class=\"right_arow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>"
			responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			    }
			  ]
	});
	// слайдер галлереи террироии
	$('.slider-block').slick({
		  	infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow:"<div class=\"left_arow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			nextArrow:"<div class=\"right_arow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    }, {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true
			        // prevArrow:false,
			        // nextArrow:false
			      }
			    }
			  ]
	});
		$("#all").click(function () {
		    $('input:checkbox').not(this).prop('checked', this.checked);
	 	});
		var time = 2, cc = 1;
	$(window).scroll(function() {
		$('#counter').each(function(){
			var
			cPos = $(this).offset().top,
			topWindow = $(window).scrollTop();
			if(cPos < topWindow + 500) {
				if (cc < 2) {
					$('.prem-block-digital-total').addClass('num-active');
					$('.prem-block-digital-total').each(function(){
						var i = 1,
						num = $(this).data('num'),
						step = 500 * time / num,
						that = $(this),
						int = setInterval(function(){
							if(i <= num) {
								that.html(i);
							}
								else {
									cc = cc + 2;
									clearInterval(int);
								}
								i++;
						}, step);
					});
				}
			}
		});
	});
	
});