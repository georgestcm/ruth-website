$(function(){
  var $home = $('div.home');
  var $entryBtn = $('button#entry_btn');

  $entryBtn.on('click',function() {
    $entryBtn.hide();
    $home.animate({
    height: "0vh"
  },"1000",function() { window.location = "home.html"; })
})
// animates the width of index when button is clicked and open home.html



})
