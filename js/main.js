$(function () {
  "use strict";

  $(".toggle-sidebar").on("click", function () {
    $(".sidebar, .content-area").toggleClass("no-sidebar");
  });
  // clicking on > to show the sidebar submenu
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-chevron-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });

  $(".main-links").click(function () {
    $(".child-links").slideToggle();
  });
});
