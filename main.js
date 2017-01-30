$(document).ready(function(){
    $('#butt').hide();
    $('#hideplaylist').hide();
    $('#playlist').slideUp("slow");
    
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});    
    $('body').scrollspy({target: ".div", offset: 50}); 
    
  // Add smooth scrolling on all links inside the navbar
  $("#mynav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
     $("#offer a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
    
      $("#start a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
    
});

    
    
    
var audio;

//Hide Pause Initially
$('#pause').hide();
$('#sec').css("-webkit-animation-play-state", "paused");   
	
//Initializer - Play First Song
initAudio($('#playlist li:first-child'));
	
function initAudio(element){
	var song = element.attr('song');
    var title = element.text();
	//Create a New Audio Object
	audio = new Audio(song);
	
	if(!audio.currentTime){
		$('#duration').html('0.00');
	}

	$('#audio-title').text(title);
    
	$('#playlist li').removeClass('active');
    element.addClass('active');
}
    
//Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
    $('#sec').css("-webkit-animation-play-state", "running");
	showDuration();
});

//Pause Button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
    $('#sec').css("-webkit-animation-play-state", "paused");  
});
	
//Stop Button
$('#stop').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
    $('#sec').css("-webkit-animation-play-state", "paused");  
});

//Next Button
$('#next').click(function(){
    audio.pause();
    $('#sec').css("-webkit-animation-play-state", "paused");  
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
	audio.play();
	showDuration();
    $('#sec').css("-webkit-animation-play-state", "running");
});

//Prev Button
$('#prev').click(function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    initAudio(prev);
	audio.play();
	showDuration();
});

//Playlist Song Click
$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});
	
//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
	});
}

$('#cl').click(function() {
        $('#cl').slideToggle("slow",function(){
            $('#cl').html("<center><iframe class='col-10' id='yt' src='https://www.youtube.com/embed/6kcIhjQVp2g?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe></center>");
        });
        $('#cl').slideToggle("slow"); 
        $('#but').hide();
        $('#butt').show();
});

$('#butt').click(function(){
    $('#yt').attr('src', '');
        $('#but').show();
        $('#butt').hide();
});

$('#but').click(function() {
            $(this).removeClass("logo");
        $('#cl').slideToggle("slow",function(){
            $('#cl').html("<center><iframe class='col-10'  id='yt' src='https://www.youtube.com/embed/6kcIhjQVp2g?rel=0&autoplay=1' frameborder='0' allowfullscreen></iframe></center>");
        });
        $('#cl').slideToggle("slow"); 
        $('#but').hide();
        $('#butt').show();
    });
$('#fir').click(function()
               {
     $('#rowekFull').slideToggle("slow",function(){
            $('#rowekFull').html("<div id='col1' class='col textAbout'>opis1</div>");
        });
        $('#rowekFull').slideToggle("slow");
        $('#fir').css("filter","opacity(1)");
        $('#fir').css("filter","brightness(2)");
        $('#thi').css("filter","opacity(0.5)");
        $('#thi').css("filter","brightness(0.5)");
});
$('#thi').click(function()
               {
         $('#rowekFull').slideToggle("slow",function(){
            $('#rowekFull').html("<div id='col1' class='col textAbout'>opis2</div>");
        });
        $('#rowekFull').slideToggle("slow");
        $('#fir').css("filter","opacity(0.5)");
        $('#fir').css("filter","brightness(0.5)");
        $('#thi').css("filter","opacity(1)");
        $('#thi').css("filter","brightness(2)");
    
});
$('#hideplaylist').click(function()
{
    $('#showplaylist').show();
    $('#hideplaylist').hide();
    $('#playlist').slideUp("slow");
});
$('#showplaylist').click(function()
 {
    $('#showplaylist').hide();
    $('#hideplaylist').show();
    $('#playlist').slideDown("slow");
});