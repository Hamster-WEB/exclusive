let start = document.getElementById("start");

$(function() {
  $('.run-line').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});

$(function() {
  $('.run-line1').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
});
