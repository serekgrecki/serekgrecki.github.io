$(document).ready(function(){

  var count = 0;
  var images = ['img/bg0.jpg','img/bg1.jpg','img/bg2.jpg'];
  var image = $(".fader");

  image.css("background-image","url(img/startpage.jpg)");

  setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image","url("+images[count++]+")");
        image.css("background-position","center");
      image.fadeIn(500);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },5000);

});