  jQuery( document ).ready(function() {
    console.log( "ready!" );

    // jQuery screen fade in effect

    jQuery("#servicePage").animate({
    opacity: 1,
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });

  document.getElementById("homeVideo").scrollIntoView();

    // After home video 
    // window.scrollBy(0, 100);
    
  // document.getElementById('homeVideo').children[0].addEventListener('ended',myHandler,false);
  // function myHandler(e) {
  //     // What you want to do after the event
  //     console.log("Video over");

  //     setTimeout(function() {
  //       console.log("delay over");
  //       jQuery("#homeHeader").animate({
  //         opacity: 0,
  //         height: "toggle"
  //       }, 3000, function() {
  //         // Animation complete.
  //       });;
  //     }, 100);
  //   }

      // jQuery("#perfect").animate({
      //   opacity: 1,
      //   height: "toggle"
      // }, 2000, function() {
      //   // Animation complete.
      // });



});



// jQuery fallback code

// var delayInMilliseconds = 1000; //1 second

// setTimeout(function() {
//   document.getElementById("servicePage").style.display = "block";
//   document.getElementById("servicePage").style.opacity = "1";
// }, delayInMilliseconds);