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

  //open & close fullscreen window
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");

    if ($(this).hasClass("full-screen")) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  });
});

var elem = document.documentElement;
function openFullscreen() {
  //this funciton is not working
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (elem.exitFullscreen) {
    elem.exitFullscreen();
  } else if (elem.webkitExitFullscreen) {
    elem.webkitExitFullscreen();
  } else if (elem.mozCancelFullScreen) {
    elem.mozCancelFullScreen();
  } else if (elem.msExitFullscreen) {
    elem.msExitFullscreen();
  }
}
