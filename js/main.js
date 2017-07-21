$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

$('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');

  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(150);

    $(this).addClass('active');
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).parent().parent().find('input').val(selectResult);
      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      dropBlock.slideUp(150);
    });
  
  } else {
    $(this).removeClass('active');
    dropBlock.slideUp(150);
  }

  return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(150);
      $('.slct').removeClass('active');
  }
});

$(".scroll-btn").click(function () {
  elementClick = $(this).attr("href")
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
  return false;
});

 $(".fancybox").fancybox({
  padding : 0,
  helpers: {
    overlay: {
      locked: false
    }
  }
});

$('.input-tel').inputmask("+7(999)-999-9999"); 

$('.order-modal-btn').click(function(e) {
  e.preventDefault();
  $('.wrapper').addClass('wrapper--blur');
  $('#order-modal').fadeIn(400)
  $('body').addClass('modal-open')
});

$('.modal_close').click(function(e) {
  e.preventDefault();
  $('.wrapper').removeClass('wrapper--blur');
  $('#order-modal').fadeOut(400)
  $('body').removeClass('modal-open')
  $('#step1').removeClass('hidden')
  $('#step2').addClass('hidden')
  $('.step-level__item--first').removeClass('step-level__item--green').addClass('step-level__item--active')
  $('.step-level__item--second').removeClass('step-level__item--active').addClass('step-level__item--gray')
  $('.step-level__text--second').removeClass('step-level__text--active').addClass('step-level__text--gray')
});


$('.step-btn').click(function(e) {
  e.preventDefault()
  $('#step1').addClass('hidden')
  $('#step2').removeClass('hidden')
  $('.step-level__item--first').removeClass('step-level__item--active').addClass('step-level__item--green')
  $('.step-level__item--second').removeClass('step-level__item--gray').addClass('step-level__item--active')
  $('.step-level__text--second').removeClass('step-level__text--gray').addClass('step-level__text--active')
});