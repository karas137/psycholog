$(function(){
	$('a[data-target^="anchor"]').bind('click.smallscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top + 70;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false;
	}) 
});


function showOrderForm() {
	$('#order-form, #order-form-overlay').fadeIn('slow');
}
function closeOrderForm() {
	$('#order-form, #order-form-overlay').fadeOut('slow');
}
function showSkypeForm() {
	$('#skype-order-form, #skype-order-form').fadeIn('slow');
}
function closeSkypeForm() {
	$('#skype-order-form, #skype-order-form').fadeOut('slow');
}
function showThanks() {
	$('#thanks-modal, #thanks-modal').fadeIn('slow');
}
function closeThanks() {
	$('#thanks-modal, #thanks-modal').fadeOut('slow');
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1
  });

$('#form_callback a[type="submit"]').on('click', function(e){
	e.preventDefault();

	var data = $(this).parent('#form_callback').serialize();

	$.post('/send_order.php', data, function(response){
		console.log(response);
		$('.response').html(response);
		if(response){
			closeOrderForm();
			showThanks();
		}

	})


	$.post('/skype_order.php', data, function(response){
		console.log(response);
		$('.response').html(response);
		if(response){
			closeSkypeForm();
			showThanks();
		}

	})
});
});


$(document).ready(function(){
    function animate() {
        var vScroll = $(window).scrollTop() + $(window).height() - 200;
        $('.animation-block').each(function() {
            var a = $(this).attr('data-animation-delay');
            var atype = $(this).attr('data-animation-type');
            var b;
            (a%1===0)?b=a:b=300;
            if (vScroll > $(this).offset().top + 100) {
                $(this).find('.ani').each(function(i) {
                    if (!$(this).hasClass('animation-completed')) {
                        var o = $(this);
                        setTimeout(function() {
                            o.addClass('animation-completed');
                            o.addClass(atype);
                        }, (i++)*b);
                    }
                });
            }
        });
    }

    animate();

    $(window).scroll(function() {
        animate();
    });
});