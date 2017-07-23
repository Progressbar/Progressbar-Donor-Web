'use strict'
jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        let copy_to = $(to).clone(true);
        let copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};

$( "#slovak" ).click(function() {
   $("#slovak").attr({'id':'notactive', 'id': 'slovak'});
   $(".en").fadeOut('slow', function(){
     $(".sk").fadeIn('slow');
   });
  $(this).swapWith("#english");
 });

 $( "#english" ).click(function() {
   $("#english").attr({'id':'notactive', 'id': 'english'})
   $(".sk").fadeOut('slow', function(){
     $(".en").fadeIn('slow');
   });
    $(this).swapWith("#slovak");
 });
