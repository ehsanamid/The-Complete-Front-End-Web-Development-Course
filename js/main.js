$(document).ready(function(){

  var el = document.getElementById('text');

  console.log("EL in Vanilla JS:", el);


  console.log("EL in jQuery:", $(el));


  $('#go-button').on('mouseover', function(){
    console.log("Fantistic Job");
  });
});
