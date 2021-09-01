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

      jQuery(window).resize(function() {
        var video = jQuery("#homeVideo").children("video");
        var videoHeight = jQuery("#homeVideo").children("video").height();
        jQuery("#homeVideo").height(videoHeight);
  
        if (jQuery(window).width() > 782) {
          jQuery(window).scroll(function() {
            if (jQuery(document).scrollTop() > 1) {
              jQuery(video).animate({
                'margin-top': '-95'
    
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
      var halfHeight = jQuery(window).height() / 3;
      jQuery('.service-accordion').css({"filter": "brightness(.5)"});
      if (jQuery(this).hasClass("accordion-closed")) {
        jQuery(this).find("p").animate({
          opacity: "toggle",
          height: "toggle",
          "marginBottom": "+=50px"
        }, 600);
        jQuery(this).addClass("accordion-open");
        jQuery(this).removeClass("accordion-closed");
        if (window.matchMedia('(max-width: 781px)').matches) {
          jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top + -50
          }, 1500);
        } 
        else {
          jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top + -halfHeight
          }, 1500);
        }
      }
      else {
        //Do nothing 
      }     
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

