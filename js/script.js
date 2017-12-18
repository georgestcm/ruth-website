$(function(){
  var $home = $('div.home');
  var $entryBtn = $('button#entry_btn');
  var $img = $("div.img_index");
  var $navLinks = $("a.nav_link");
  var $divGallery = $('div.gallery_section');
  var $divAbout = $('div.About_section');
  var $divContact = $('div.contact_section');
  var $nav_link_wrapper = $('div.nav_link_wrapper');
  var $name = $('div.entry_text');
  var $photoViewer = $('div.photo_viewer');
  var $li = $('.gallery_section_list');
  var $exitImg = $('div.exit_img');
  var $body = $('body');

  $entryBtn.on('click',function() {
    $entryBtn.hide();
    $img.fadeOut();
    $name.fadeOut();
    $home.css("borderBottom", "5px double black");
    $home.animate({
    height: "0vh"
  },"slow",function() { window.location = "home.html"; })
})
// animates the width of index when button is clicked and open home.html

$navLinks.hide().fadeIn("slow");
// animate the nav text

$divGallery.hide();
$divContact.hide();
$photoViewer.hide();
// gallery , contact page  and photoViewer is hiden on initial load

$nav_link_wrapper.children('.first').on('click',function(e) {
  e.preventDefault();
  $divAbout.fadeIn();
  $divGallery.hide();
  $divContact.hide();

})

$nav_link_wrapper.children('.second').on('click',function(e) {
  e.preventDefault();
  $divAbout.hide();
  $divContact.hide();
  $divGallery.fadeIn();

})

$nav_link_wrapper.children('.third').on('click',function(e) {
  e.preventDefault();
  $divAbout.hide();
  $divGallery.hide();
  $divContact.fadeIn();
})
//above are the nav control "what hides or show depending on what link is clicked"

$exitImg.on('click',function(){
  $photoViewer.animate({
    height: "0vh"
  },function() {
    $(this).hide();
    $nav_link_wrapper.fadeIn();
    $divGallery.fadeIn();
  })

})
// once the x is clicked, the page comes  down and hides itself and show the nav and category selection


$li.on('click',function() {
  $photoViewer.show().animate({
    height: "100vh"
  })

$nav_link_wrapper.fadeOut();
$divGallery.fadeOut();
})

// on li click, the photo viewer animates in
// continue on with the above code




























$('h2.name').typeIt({
  strings: '',
  speed: 200,
  deleteSpeed: undefined,
  lifeLike: true,
  cursor: true,
  breakLines: true,
  breakDelay: 750,
  startDelay: 250,
  loop: true,
  loopDelay: 1050,
  html: true,
  autoStart: true,
  callback: function(){}
 });


})



//
//
//
//
//angularJs

var myModule = angular.module("module",[]);
myModule.controller("controller",function($scope) {

})
