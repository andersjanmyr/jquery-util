$(document).ready(function(){
  module("qunit.util.test");    
    
  test("center in window", function() {
    $("#center-item").center();
    ok( true, "this test is fine" );
    var value = "hello";
    equals( "hello", value, "We expect value to be hello" );
  });
});
