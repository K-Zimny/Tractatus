  jQuery( document ).ready(function() {
    console.log( "ready!" );

    // jQuery screen fade in effect

    jQuery("#servicePage").animate({
    opacity: 1,
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });

      // jQuery in viewport

    $.fn.isOnScreen = function(){

      var win = $(window);

      var viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  };

});

// jQuery fallback code

// var delayInMilliseconds = 1000; //1 second

// setTimeout(function() {
//   document.getElementById("servicePage").style.display = "block";
//   document.getElementById("servicePage").style.opacity = "1";
// }, delayInMilliseconds);