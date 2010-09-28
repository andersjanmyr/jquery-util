
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

  function initOptions(c) {
    c.fillStyle = 'darkgray';
    c.strokeStyle = 'darkgray';
    c.lineWidth = 2;
  }

  function drawFront(c) {
    c.beginPath();
    c.moveTo(10, 50);
    c.bezierCurveTo(30, 30, 30, 25, 70, 32);
    c.bezierCurveTo(70, 32, 70, 60, 90, 60);
    c.bezierCurveTo(83, 90, 87, 90, 87, 90);
    c.bezierCurveTo(83, 90, 87, 90, 70, 90);
    c.bezierCurveTo(63, 60, 67, 60, 67, 60);
    c.bezierCurveTo(55, 57, 55, 55, 50, 50);
    c.bezierCurveTo(12, 50, 12, 70, 12, 60);
    c.fill();
    c.closePath();
  }

  function drawFrontLeg(c) {
    c.beginPath();
    c.moveTo(55, 32);
    c.bezierCurveTo(47, 10, 59, 10, 55, 32);
    c.bezierCurveTo(59, 10, 80, 10, 55, 32);
    c.fill();
    c.closePath();
  }

  function drawBackLeg(c) {
    c.beginPath();
    c.moveTo(125, 60);
    c.bezierCurveTo(123, 60, 127, 60, 155, 60);
    c.bezierCurveTo(147, 90, 147, 90, 147, 90);
    c.bezierCurveTo(113, 90, 107, 90, 130, 90);
    c.fill();
    c.closePath();
  }

  function drawStomach(c) {
    c.beginPath();
    c.moveTo(125, 61);
    c.bezierCurveTo(87, 70, 67, 50, 87, 60);
    c.stroke();
    c.closePath();
  }

  function drawBack(c) {
    c.beginPath();
    c.moveTo(68, 32);
    c.bezierCurveTo(150, 20, 150, 30, 153, 60);
    c.stroke();
    c.closePath();
  }

  return this.each(function(){
    var c = this.getContext('2d');
    initOptions(c);
    drawFront(c);
    drawFrontLeg(c);
    drawBackLeg(c);
    drawStomach(c);
    drawBack(c);
  });

}



