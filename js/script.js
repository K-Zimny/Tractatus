  jQuery( document ).ready(function() {
    console.log( "ready!" );

    // jQuery screen fade in effect

    jQuery("#servicePage").animate({
    opacity: 1,
    height: "toggle"
  }, 2000, function() {
    // Animation complete.
  });

  // home video scroll down

  document.getElementById("homeVideo").scrollIntoView();

  // home video height and parallax

  // jQuery(window).resize(function() {
  //   var video = jQuery("#homeVideo").children("video");
  //   var videoHeight = jQuery("#homeVideo").children("video").height();
  //   console.log(videoHeight + 100);
  //   var videoFigureHeight = jQuery("#homeVideo").height(videoHeight);
  //   console.log(videoFigureHeight);

  //   jQuery('#scrollDiv').hide();
  //   jQuery(window).scroll(function() {
  //       if (jQuery(document).scrollTop() > 69) {
  //         jQuery(video).css('margin-top', -100)
  //       }
  //       else {
  //         jQuery(video).css('margin-top', 0)
  //       }
  //   });

  jQuery(window).resize(function() {
    var video = jQuery("#homeVideo").children("video");
    var videoHeight = jQuery("#homeVideo").children("video").height();
    // console.log(videoHeight + 100);
    var videoFigureHeight = jQuery("#homeVideo").height(videoHeight);
    // console.log(videoFigureHeight);
    jQuery(window).scroll(function() {
      console.log(jQuery(document).scrollTop());

      // var video = jQuery("#homeVideo").children("video");
        if (jQuery(document).scrollTop() > 1) {
          // jQuery(video).css('margin-top', -100)
          jQuery(video).animate({
            'margin-top': '-99'
          }, 0);
          // jQuery(video).css('margin-top', -100)
        }
        else {
          jQuery(video).animate({
            'margin-top': '0'
          }, 0);
        }

        // if (jQuery(document).scrollTop() > 1000) {
        //   jQuery(video).css('display', "none")
        // }
        // else {
        //   jQuery(video).css('display', "flex")
        // }


    });




    // jQuery(window).scroll(function() {
    //   var offset = jQuery(video).offset().top;
    //   console.log(offset);
    //   var negOffset = -(offset - 100);
    //   setTimeout(function() {
    //     jQuery(video).css('margin-top', negOffset);
    //         }, 100);      
    // }).scroll(); 

  })
  .resize();

  // var videoHeight = jQuery("#homeVideo").children("video").height();
  // console.log(videoHeight);
  // var videoFigureHeight = jQuery("#homeVideo").height(videoHeight);
  // console.log(videoFigureHeight);

  // remove sub menu on scroll

  jQuery(window).scroll(function() {
  if (jQuery(document).scrollTop() > 1) {
    jQuery("#mega-menu-item-234").removeClass( "mega-toggle-on" )
  }
  else {
    // do nothing
  }
});


});



// jQuery fallback code

// var delayInMilliseconds = 1000; //1 second

// setTimeout(function() {
//   document.getElementById("servicePage").style.display = "block";
//   document.getElementById("servicePage").style.opacity = "1";
// }, delayInMilliseconds);


// After home video 

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
