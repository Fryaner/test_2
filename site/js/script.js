$(document).ready(function(){
	$('.slider').slick({
  		dots: true,
  		arrows:false,
  		vertical:true,
      verticalSwiping:true,
	});
});
$(document).ready(function(){
	$('.rows-slider').slick({
  		dots: true,
  		arrows:false,
  		slidesToShow:2,
  		slidesToScroll:1,
	});
});
$(document).ready(function(){
  $('.reviews-slider').slick({
      dots: false,
      arrows:true,
  });
});