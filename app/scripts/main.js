
$('.activate-box').click(function(){
	console.log('the button clicked');

	$('.box').addClass('active');
})






$('.expandable').click(function(){
	console.log('focused on an input!');

	$(this).addClass('expanded');	

});




$('.submit').click(function (){
	console.log('focused on an input!');

	$('input').each(function(){
		if ($(this).val() == '') {
			$(this).addClass('error');
		}
	});
});




$('.boxtwo').click(function(){
	console.log('it slides');

	$(this).addClass('active'); 
});


$('.boxthree').click(function(){
	console.log('it fades');

	$(this).fadeOut(1000);
});


$('.textfour').click(function(){
	console.log('disappear');

	$(this).hide(2000);
});


$('.five').click(function(){
  if ( $('div:fivebox').is('hidden') ) {
    $('fivebox').show('slow');
  } else {
    $('fivebox').slideUp(1000);
 }
});


$('.six').click(function(){
	console.log('appears');
	
	$('.sixinfo').addClass('active');
});








$('.seven').hover(function(){
	console.log('expands');
	$(this).addClass('hover')
});




$('.eightcolorchange').click(function(){
	console.log('color change');
	$(this).addClass('active')
});




$('.tablinkone').click(function(){
	console.log('other tabs gets lighter');

	$('.tablinktwo').addClass('opacity');
	$('.tablinkthree').addClass('opacity');
});















	






$('.slide-up').click(function(){
	console.log('slide up');

    $('slideme').slideUp('slow');

});

$('.slide-down').click(function(){
	console.log('slide down');

    $('slideme').slideUp();

});

$('.slide-toggle').click(function(){
	console.log('slide toggle');

    $('slideme').slideToggle('fast');

});
             
$('.email').blur(function(){
	console.log('email blur');

	$(this).css('color', 'gray');
});

$('.email').click(function(){
	console.log('email blur');

	$(this).focus();
});


$('.nine').hover(function(){
	console.log('expands');

	$(this).addClass('hover')
});

$('.ten').click(function(){
	console.log('slides up');
	
	$(this).slideUp('slow')
});

$('.eleven').click(function(){
	console.log('slides up');
	
	$(this).slideToggle('slow')
});
 
$('.twelve').click(function(){
	console.log('color change');
	$(this).addClass('active')
});

$('.thirteen').click(function(){
	console.log('color change');
	
	$('.fourteen').addClass('opacity');
});;




$('.square').click(function(){
	console.log('moves');
	
	$(this).addClass('active');
	$('.circle').addClass('active');

});

$('.onandoff').mouseleave(function(){
	console.log('hovers on and off');

	$(this).removeClass('gone');
});

$('.tabone').click(function(){
	console.log('box appears and tab gets darker');

	$(this).addClass('opacity');
	$('.tabinfo').addClass('active');
});



$('.tablinkone').click(function(){
	console.log('box appears and tab gets darker');

	$(this).addClass('opacity');
	$('.tabinfo').addClass('active');
});

$('.twentyfive').click(function(){
	console.log('it slides and toggles back');

	$(this).toggleClass('active'); 
});





















