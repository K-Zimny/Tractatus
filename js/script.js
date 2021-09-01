// ============================================================================================================================================================== */
// jQuery check if document is ready
//  ============================================================================================================================================================== */


jQuery( document ).ready(function() {
console.log( "ready!" );

   
// ============================================================================================================================================================== */
// jQuery screen fade in effect
//  ============================================================================================================================================================== */

    jQuery("#servicePage").animate({
      opacity: 1,
      height: "toggle"
    }, 2000);
    
// ============================================================================================================================================================== */
// home video scroll down
//  ============================================================================================================================================================== */

    if (jQuery("body").hasClass("home")) {
        console.log("homepage");

        jQuery(window).resize(function() {
          var video = jQuery("#homeVideo").children("video");
          var videoHeight = jQuery("#homeVideo").children("video").height();
          jQuery("#homeVideo").height(videoHeight);
    
          if (jQuery(window).width() > 782) {
            jQuery(window).scroll(function() {
              if (jQuery(document).scrollTop() > 1) {
                jQuery(video).animate({
                  'margin-top': '-75'
      
                }, 0);
              }
              else {
                jQuery(video).animate({
                  'margin-top': '0'
                }, 0);
              }
            });
          }
        }).resize();
    
        if (jQuery(window).width() > 782) {
          jQuery( document ).ready(function() {
            document.getElementById("homeVideo").scrollIntoView();
          });
        }
    }

// ============================================================================================================================================================== */
// remove sub menu on scroll for non hamburger screen sizes
//  ============================================================================================================================================================== */

    function toggleSubMenuScrollRemover() {
      if (window.matchMedia('(max-width: 781px)').matches) {
          // console.log("if");
      } 
      else {
          // console.log("else");
          if (jQuery(document).scrollTop() > 1) {
            jQuery("#mega-menu-item-234").removeClass( "mega-toggle-on" )
            jQuery("#mega-menu-item-539").removeClass( "mega-toggle-on" )
          }
          else {
          // do nothing
          }
      }
    } 

    jQuery(window).scroll(function() {
      toggleSubMenuScrollRemover();
    });

// ============================================================================================================================================================== */
// Add accordion and tabindex to service tabs homepage
//  ============================================================================================================================================================== */

    jQuery('.service-accordion').attr('tabindex',0);

    jQuery('.service-accordion').on("click",function() {
      if (jQuery(".service-accordion").hasClass("accordion-animation-done")) {
        jQuery('.service-accordion').css({"filter": "brightness(1)"}); 
        jQuery('.service-accordion').removeClass("accordion-animation-done");
      }
      if (jQuery('.service-accordion').hasClass("accordion-link")) {
        jQuery('.service-accordion').css({"filter": "brightness(1) !important"}); 
      }
      else {
        jQuery('.service-accordion').css({"filter": "brightness(.5)"});
      }
      if (jQuery(this).hasClass("accordion-closed")) {
        jQuery(this).css({"filter": "brightness(1)"});
        jQuery(this).css({"pointer-events": "none"});
        jQuery(this).find("p").animate({
          opacity: "toggle",
          height: "toggle",
          "marginBottom": "+=50px"
        }, 600);
        jQuery(this).addClass("accordion-open");
        window.setTimeout(function() {
          jQuery('.service-accordion').addClass("accordion-animation-done"); 
        }, 1600);
        jQuery(this).removeClass("accordion-closed");
        jQuery(window).on('mousewheel', function() {
          jQuery('html, body').stop();
        });
        jQuery(window).on('touchmove', function() {
          jQuery('html, body').stop();
        });
        if (window.matchMedia('(max-width: 1200px)').matches) {
          jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top + -5
          }, 1500);
        } 
        else {
          jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top + -100
          }, 1500);
        }
      }
      else {
        //Do nothing 
      }     
    });

    setInterval(function(){
      jQuery(window).scroll(function() {
        if (jQuery(".service-accordion").hasClass("accordion-animation-done")) {
          jQuery('.service-accordion').css({"filter": "brightness(1)"}); 
          jQuery('.service-accordion').removeClass("accordion-animation-done");
        }
      });
     }, 3000);
    

    jQuery('.service-accordion a').on("click",function() {
      console.log("Im hit");
      jQuery('.service-accordion').addClass("accordion-link");
    });

    // Used for making accordion expand on enter key press
    jQuery('.service-accordion').keypress(function (e) {
      var key = e.which;
      if(key == 13)  // the enter key code
      {
        if (jQuery(this).hasClass("accordion-closed")) {
          jQuery(this).find("p").animate({
            opacity: "toggle",
            height: "toggle",
            "marginBottom": "+=50px"
          }, 600);
          jQuery(this).addClass("accordion-open");
          jQuery(this).removeClass("accordion-closed");
          jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top + -100
          }, 1000);
        }
    else {
    //Do nothing 
    }

      }
    });  

}); //End jQuery Document ready function

