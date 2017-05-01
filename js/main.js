$(function(){

  $('.signin').on('click', function(){
    $('.modal').css('display', 'block');
  });

  $('.close').on('click', function(){
    $('.modal').css('display', 'none');
  });

  $('.submit').on('click', function(){
    $('.getstarted input').attr('class', 'error');
  });

});
