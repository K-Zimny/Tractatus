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

}); //End jQuery Document ready function

