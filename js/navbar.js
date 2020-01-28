
 $(window).scroll(function () {
		if (($(this).scrollTop() > $('header').height()) && ($(document).width() > 576)) {
			$('nav').addClass('fixed-top');
			$('.navigation').css({background: '#F38181', opacity: '0.8'});
			$('body').css('padding-top', $('nav').height() + 'px');
		} else if(($(this).scrollTop() < $('header').height()) && ($(this).scrollTop()) <= 0 && ($(document).width() > 576)) {
			$('nav').removeClass('fixed-top');
			$('.navigation').css({background: 'transparent'});
			$('body').css('padding-top', '0');
		} 
});

console.log($('nav').height());
function scroll(e) {

    let href = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
    location.hash = href;
};

$('a[href^="#"]').click(scroll);
