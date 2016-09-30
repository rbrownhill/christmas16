$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  $("#robert").hide();

 $("#showRobert").click( function(){
  $("#eddie").hide();
  $("#robert").show();
});
$("#showEddie").click( function(){
  $("#eddie").show();
  $("#robert").hide();
});

 var getaudio = $('#player')[0];
   /* Get the audio from the player (using the player's ID), the [0] is necessary */
   var mouseovertimer;
   /* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play (incase you accidentally hover over the speaker) */
   var audiostatus = 'off';
   /* Global variable for the audio's status (off or on). It's a bit crude but it works for determining the status. */

   
   $(document).on('click touchend', '.speaker', function() {
     /* Touchend is necessary for mobile devices, click alone won't work */
     if (!$('.speaker').hasClass("speakerplay")) {
       if (audiostatus == 'off') {
         $('.speaker').addClass('speakerplay');
         getaudio.load();
         getaudio.play();
         window.clearTimeout(mouseovertimer);
         audiostatus = 'on';
         return false;
       } else if (audiostatus == 'on') {
         $('.speaker').addClass('speakerplay');
         getaudio.play()
       }
     } else if ($('.speaker').hasClass("speakerplay")) {
       getaudio.pause();
       $('.speaker').removeClass('speakerplay');
       window.clearTimeout(mouseovertimer);
       audiostatus = 'on';
     }
   });

   $('#player').on('ended', function() {
     $('.speaker').removeClass('speakerplay');
     /*When the audio has finished playing, remove the class speakerplay*/
     audiostatus = 'off';
     /*Set the status back to off*/
   });

});



(function (global) {

var dc = {};


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};




global.$dc = dc;

})(window);
