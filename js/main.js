$(function(){

  $('.signin').on('click', function(){
    $('.modal').fadeIn();
  });

  $('.close').on('click', function(){
    $('.modal').fadeOut();
  });

  $('.submit').on('click', function(){
    $('.getstarted input').attr('class', 'error');
  });

  $('.getstarted').on('mouseenter', 'input', function(){
    $(this).attr('class', 'okay');
  });

});
