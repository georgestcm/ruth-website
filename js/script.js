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
  var $liParent = $('.gallery_section_body');
  var $exitImg = $('div.exit_img');
  var $body = $('body');
  var $galleryBody = $('div.photo_viewer_body');
  var $photoViewerTitle = $('div.photo_viewer_title h3');
  var $photoViewerLi =$('ul.photo_viewer_li');
  var $modal = $(".modal")[0];
  var $modalClose = $(".close");
  var $modalImg = $("img#modal_img")[0];
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

function locationDisplay(location,body,text) {
     $photoViewerTitle.append(text);
      var liStorage = [];
   for(var i = 0; i <location.length; i++){
      var $li = $('<li></li>').addClass("liPosition");
      var $img = $('<img></img>').attr("src",location[i]).addClass("imgSize images");
      $li.prepend($img);
      liStorage.push($li);
    }
  for(var i = 0; i <liStorage.length; i++){
      liStorage[i].appendTo($photoViewerLi).hide();
      if($photoViewerLi.children().length == liStorage.length){
        for(var i = 0; i < $photoViewerLi.children().length; i++){
          liStorage[i].delay(i*200).fadeIn(850);
        }
      }
      };

}

// abov is the function the shows the pictures on the screen

$exitImg.on('click',function(){
  $photoViewer.removeClass("unset");
  $photoViewer.animate({
    height: "0vh"
  },function(){
    $(this).hide();

    $nav_link_wrapper.fadeIn();
    $divGallery.fadeIn();
    $photoViewerTitle.empty();
    for (var i = 0; i < $photoViewerLi.children().length; i++) {
      $photoViewerLi.children().remove();
    }
  })

})
// once the x is clicked, the page comes  down and hides itself and show the nav and category selection

var cityLocation = [];
for (var i = 1; i < 19; i++) {
   var cityImg = "images/City/city"+i+".jpg";
   cityLocation.push(cityImg);
}

$liParent.children('.city').on('click',function(){
  var text = "City";
  $photoViewer.show().animate({
    height: "100vh"
  },function(){
    locationDisplay(cityLocation,$galleryBody,text);
  $photoViewer.addClass("unset");
  })

$nav_link_wrapper.fadeOut();
$divGallery.fadeOut();
})
// above is for the city images

var flowerLocation = [];

for(var i = 1; i < 17; i++){
  var flowerImg = "images/Flowers/flower"+i+".jpg";
  flowerLocation.push(flowerImg)
}
$liParent.children('.flower').on('click',function(){
  var text = "Flowers";
  $photoViewer.show().animate({
    height: "100vh"
  },function(){
    locationDisplay(flowerLocation,$galleryBody,text);
    $photoViewer.addClass("unset");
  })

$nav_link_wrapper.fadeOut();
$divGallery.fadeOut();
})
// above is for the flower

var skyLocation = [];
for (var i = 1; i < 8; i++) {
 var skyImg = "images/Sky/sky"+i+".jpg";
 skyLocation.push(skyImg);
}
$liParent.children('.sky').on('click',function(){
  var text = "Sky";
  $photoViewer.show().animate({
    height: "100vh"
  },function(){
    locationDisplay(skyLocation,$galleryBody,text);
    $photoViewer.addClass("unset");
  })

$nav_link_wrapper.fadeOut();
$divGallery.fadeOut();
})

//above is for the sky

var extraLocation = [];
for (var i = 1; i < 6; i++) {
 var skyImg = "images/Misc/m"+i+".jpg";
 extraLocation.push(skyImg);
}
$liParent.children('.extra').on('click',function(){
  var text = "Extras";
  $photoViewer.show().animate({
    height: "100vh"
  },function(){
    locationDisplay(extraLocation,$galleryBody,text);
    $photoViewer.addClass("unset");
  })

$nav_link_wrapper.fadeOut();
$divGallery.fadeOut();
})
// above is for the extra images

$photoViewerLi.on("click",function(e){
if(e.target.nodeName == "IMG"){
  $modal.style.display = "block";
  $photoViewer.removeClass('unset');
  var $img = e.target.currentSrc;
  $modalImg.src = $img;
}
})


$modalClose.on("click",function(){
  $modal.style.display = "none";
  $photoViewer.addClass("unset");
})


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
