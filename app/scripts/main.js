
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


$('.doubleclick').dblclick(function(){
	console.log('double clicks and changes color')

	$(this).addClass('active');
});

$('.textchange').click(function(){
	console.log('text gets shadow')

	$(this).addClass('active');
});

$('.textchangetwo').click(function(){
	console.log('text gets smaller')

	$(this).addClass('active');
});


$('.expandable').click(function(){
	console.log('focused on an input!');

	$(this).addClass('expanded');	

});

$('.delete').click(function(){
	console.log('all will disappear')

	$(this).addClass('active');
});
















