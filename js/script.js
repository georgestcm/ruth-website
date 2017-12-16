$(function(){
  var $home = $('div.home');
  var $entryBtn = $('button#entry_btn');
  var $img = $("div.img_index");
  var $navLinks = $("a.nav_link");
  var $divGallery = $('div.gallery_section');
  var $divAbout = $('div.About_section');
  var $divContact = $('div.contact_section');
 var $nav_link_wrapper = $('div.nav_link_wrapper');

  $entryBtn.on('click',function() {
    $entryBtn.hide();
    $img.fadeOut();
    $home.css("borderBottom", "5px double black");
    $home.animate({
    height: "0vh"
  },"slow",function() { window.location = "home.html"; })
})
// animates the width of index when button is clicked and open home.html

$navLinks.hide().fadeIn("slow");
// hides the nav text and then animates it

$nav_link_wrapper.children('.first').on('click',function(e) {
  e.preventDefault();
  $divAbout.hide().fadeIn('slow');
})

$divGallery.hide();
$divContact.hide();



})
