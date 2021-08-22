  jQuery( document ).ready(function() {
    console.log( "ready!" );

    // jQuery screen fade in effect

    jQuery("#servicePage").animate({
    opacity: 1,
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });

});

// jQuery fallback code

var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  document.getElementById("servicePage").style.display = "block";
  document.getElementById("servicePage").style.opacity = "1";
}, delayInMilliseconds);