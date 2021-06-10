$(document).ready(function() {

  $(window).resize(resizeContents);
  resizeContents();

  $("#selectTopic").change(function() {
    if ($("#selectTopic").val() === "notSelected") {
      $("#startButton").attr('disabled', true);
    } else {
      $("#startButton").attr('disabled', false);
    }
  });


  $("#startButton").click(function() {
    var topic = $("#selectTopic").val();
    switch (topic) {
      case "영화국내관객수":
        window.location.href = 'https://vsbattle.me/movie';
        $("#selectTopic option:eq(0)").prop("selected", true);
        break;

      case "애니메이션bd판매량":
        window.location.href = 'https://vsbattle.me/anibd';
        $("#selectTopic option:eq(0)").prop("selected", true);
        break;

      case "유튜버구독자수":
        window.location.href = 'https://vsbattle.me/youtuber';
        $("#selectTopic option:eq(0)").prop("selected", true);
        break;

        case "국가별1인당gdp":
          window.location.href = 'https://vsbattle.me/gdp-per-capita';
          $("#selectTopic option:eq(0)").prop("selected", true);
          break;

      default:
        $("#selectTopic option:eq(0)").prop("selected", true);
    }

  });

});




function resizeContents() {
  $("#indexMain").height($(window).height() - 160);
  $('.gameplayMain').height($(window).height() - 160);
  $(".swiper-container").height($(window).height() - 160);
  $(".swiper-container").width("100%");
}