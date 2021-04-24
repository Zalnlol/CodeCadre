$(document).ready(function () {
  $("#menuBTN").click(function (e) {
    e.preventDefault();
    if ($("#menu-items").css("opacity") == 0) {
      $("#menu-items").addClass("fadeIn");
      $("#menu-items a").addClass("backinDown").removeClass("backinUp");
    } else {
      $("#menu-items").addClass("fadeOut").removeClass("fadeIn");
      $("#menu-items a").removeClass("backinDown").addClass("backinUp");
      setTimeout(function () {
        $("#menu-items").removeClass("fadeOut");
        $("#menu-items a").removeClass("backinUp");
      }, 500);
    }
  });
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $("#menu-items").removeClass();
      $("#menu-items a").removeClass();
      $("#menu-items a").css("opacity", 1);
      $("#menu-items").css("opacity", 1);
    } else {
      $("#menu-items a").css("opacity", 0);
      $("#menu-items").css("opacity", 0);
    }
  });
});
