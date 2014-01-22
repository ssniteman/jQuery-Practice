
$('.activate-box').click(function(){
	console.log('the button clicked');

	$('.box').addClass('active');
})






$('.expandable').click(function(){
	console.log('focused on an input!');

	$(this).addClass('expanded');	

})




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
})


$('.boxthree').click(function(){
	console.log('it fades');

	$(this).fadeOut(1000);
})


$('.four').click(function(){
	console.log('disappear');

	$(this).hide(2000);
})


$('.fifth').click(function(){
  if ( $( 'div:fifth-box' ).is( ':hidden' ) ) {
    $('fifth-box').show('slow');
  } else {
    $( "fifth-box" ).slideUp(1000);
 }
})


$('.six').click(function(){
	console.log('appears');
	
	$('.sixinfo').addClass('active');
})








$('.seven').hover(function(){
	console.log('expands');
	$(this).addClass('hover')
})

$('.eightcolorchange').click(function(){
	console.log('color change');
	$(this).addClass('active')
})







$('.tabs').ready(function(){  
  
$('ul.tabs li').click(function(){  
var tab_id = $(this).attr('tablink');  
  
$('ul.tabs li').removeClass('current');  
$('.tab-content').removeClass('current');  
  
$(this).addClass('current');  
$("#"+tab_id).addClass('current');  
})  
  
})  






$('.slide-up').click(function(){
	console.log('slide up');

    $('slideme').slideUp('slow');

})

$('.slide-down').click(function(){
	console.log('slide down');

    $('slideme').slideUp();

})

$('.slide-toggle').click(function(){
	console.log('slide toggle');

    $('slideme').slideToggle('fast');

})
             
$('email').click(function(){
	console.log('email blur');

	$(this).blur();
})





















