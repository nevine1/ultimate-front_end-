$(function () {
  "use strict";

  $(".toggle-sidebar").on("click", function () {
    $(".sidebar, .content-area").toggleClass("no-sidebar");
  });
  // clicking on > to show the sidebar submenu
  $(".toggle-submenu").on("click", function () {
    console.log("venasamaaaaaaan");
    $(this)
      .find(".fa-chevron-right")
      .toggleClass("fa-chevron-right fa-chevron-down");
    //$(this).next(".child-links").css({ display: "block" });
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

  //hide and show toggle-setting
  $(".toggle_setting").on("click", function () {
    //add  class fa-spin to make the grear rotating when clicking on the i icon
    $(this).find("i").toggleClass("fa-spin");
    //$(".setting_box").toggleClass("hide_setting");
    //or use this code
    $(this).parent().toggleClass("hide_setting");
  });
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
