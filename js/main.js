
$(document).ready(function(){

  // $('[href="https://google.com"]').on('click', function(event) {
  //     console.log("linking to google?");
  //     event.preventDefault();
  // })

  console.log($('.submenu a').first().text());
  console.log($('.submenu a').last().text());

  $(document).on('contextmenu',  function() {
    return false;
  })

  // $(document).on('mousedown',  function(event) {
  //   event.preventDefault();
  //   if(event.which == 3) {
  //
  //       $('.hidden').hide();
  //
  //
  //       if($(event.target).is('img')){
  //         $('.saveimg, .newtab').show();
  //       }
  //       else if($(event.target).is('a')){
  //         $('.newtab').show();
  //       }
  //
  //       console.log(event.pageX,event.pageY);
  //
  //       $('#context').css({
  //         top: event.pageY,
  //         left: event.pageX
  //       });
  //
  //       $('#context').fadeIn();
  //     return false;
  //   }
  //   $('#context').fadeOut();
  //
  //
  // });

  $('[data-trigger="dropdown"]').on('mouseenter',function(){

    var submenu = $(this).parent().find('.submenu');
      console.log(submenu);
      submenu.fadeIn(300);

      $('.profile-menu').on('mouseleave', function(){
          submenu.fadeOut(300);
      })
  });
  $('#prepend, #append, #replace').on('click',function(e){
    var el = $(e.currentTarget);
    var action = el.attr('id');
    var content = $('.text').val();

    if(action == "prepend") {
      console.log("Prepending....");
      $('#main').prepend(content);
    }
    else if(action == "append"){
      console.log("appending....");
        $('#main').append(content);
    }
    else if (action == "replace") {
      console.log("Replacing....");
      $('#main').html(content);
    }
    $('.text').val('');
  })


  $('textarea').focusin(function (){
    console.log("Focused in the testarea");
  });

  window.passed = 0;

  $('input[name=email]').on('keyup', function() {
      console.log("keyup");
    // if($(this).val().indexOf('0') > -1) {
    //   passed++;
    //
    //   if($(this).val().indexOf('.') > -1) {
    //     passed++;
    //   }
    // }


  });

});
