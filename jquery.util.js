
/* Center the selected items in the window*/
jQuery.fn.center = function() {
  return this.each(function(){    
    function center(item) {
      return function() {
        $(item).css({left: ($(window).width() - $(item).width())/2});
      }
    }
    center(this)();
    $(window).resize(center(this));
  });
    
}

  
