$(document).ready(function(){


  $('[data-trigger="dropdown"]').on('mouseenter',function(){

    var sub = $(this).parent().find('.submenu');
    sub.addClass('active');

  });
  $('[data-trigger="dropdown"]').on('mouseleave',function(){
    var sub = $(this).parent().find('.submenu');
    if($(this).mouseenter('.submenu')){

    }
    else {
      sub.removeClass('active');
    }

      // var sub = $(this).parent().find('.submenu');
      // sub.removeClass('active');

  });


});
