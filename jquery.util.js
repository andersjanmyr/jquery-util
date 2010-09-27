
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


jQuery.fn.tapir = function() {

  return this.each(function(){
    var context = this.getContext('2d');
    context.fillStyle = 'darkgray';
    context.strokeStyle = 'darkgray';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(10, 50);
    context.bezierCurveTo(30, 30, 30, 25, 70, 32);
    context.bezierCurveTo(70, 32, 70, 60, 90, 60);
    context.bezierCurveTo(83, 90, 87, 90, 87, 90);
    context.bezierCurveTo(83, 90, 87, 90, 70, 90);
    context.bezierCurveTo(63, 60, 67, 60, 67, 60);
    context.bezierCurveTo(55, 57, 55, 55, 50, 50);
    context.bezierCurveTo(12, 50, 12, 70, 12, 60);
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(55, 32);
    context.bezierCurveTo(47, 10, 59, 10, 55, 32);
    context.bezierCurveTo(59, 10, 80, 10, 55, 32);
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(125, 60);
    context.bezierCurveTo(123, 60, 127, 60, 155, 60);
    context.bezierCurveTo(147, 90, 147, 90, 147, 90);
    context.bezierCurveTo(113, 90, 107, 90, 130, 90);
    context.fill();
    context.closePath();

    context.beginPath();
    context.moveTo(125, 61);
    context.bezierCurveTo(87, 70, 67, 50, 87, 60);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(68, 32);
    context.bezierCurveTo(150, 20, 150, 30, 153, 60);
    context.stroke();
    context.closePath();

  });

}


