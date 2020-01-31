$(document).ready(function(){


  $('[data-trigger="dropdown"]').on('mouseenter',function(){

    var submenu = $(this).parent().find('.submenu');
      console.log(submenu);
      submenu.fadeIn(300);

      $('.profile-menu').on('mouseleave', function(){
          submenu.fadeOut(300);
      })
  });




});
