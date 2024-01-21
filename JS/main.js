/// <reference types="../@types/jquery" />
// &-----------------EVENTS-------------
// *-----SCROLL SMOOTH----
// $(".anchorSideBar").on("click", function (e) {
//   let anchorHref = $(e.target).attr("href");
//   let sectionOffset = $(anchorHref).offset().top;
//   $("body", "html").animate({ scrollTop: sectionOffset }, 1500);
// });
// --------------------------
$(".anchorSideBar").click(function () {
  var sectionId = $(this).attr("href");

  var positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 1500);
});
// *-----SIDEBAR---------
$("#open").on("click", function () {
  $(".sideNav").removeClass("d-none");
  $("#linkBox").removeClass("d-none");
  $(".sideNav").animate({ width: "250px" }, 1000);
  $("#open").animate({ left: "250px" }, 900);
  $(".home-content").animate({ marginLeft: "250px" }, 1000);
});

$("#closeIcon").on("click", function () {
  $(".sideNav").animate({ width: "0px" }, 1000, function () {
    $("#linkBox").addClass("d-none");
  });
  $("#open").animate({ left: "2%" }, 1000);
  $(".home-content").animate({ marginLeft: "50px" }, 1000);
});
// *-----Accordion--------
$(".toggle").on("click", function (e) {
  $(e.target).next().slideToggle(500);
});
// *-----Counter--------

window.onload = function () {
  countDownToTime("10 october 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $("#partyDay").html(`${days} D`);
  $("#partyHour").html(`${hours} h`);
  $("#partyMins").html(`${mins} m`);
  $("#partySeconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
// *-----TextArea--------
var maxLength = 100;
$("#feedBack").on("keyup", function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#numRemaining").text("your available character finished");
  } else {
    $("#numRemaining").text(AmountLeft);
  }
});
