//0부터 gaeMaxCount-1 까지 문제 순서를 섞은 배열을 만듬
const playOrder = createCodeArray(gameMaxNum);

let loadingIndex = 2;
let count = 1;

let leftGameName
let rightGameName
let waitingGameName

let leftGameValue
let rightGameValue
let waitingGameValue

let leftGameImage
let rightGameImage
let waitingGameImage







$(document).ready(function() {

  //게임 최초 싫행시 왼쪽, 오른쪽, 대기하는거 3개를 로드하자
  leftGameName = gameNameArray[playOrder[0]];
  rightGameName = gameNameArray[playOrder[1]];
  waitingGameName = gameNameArray[playOrder[2]];

  leftGameValue = gameValueArray[playOrder[0]];
  rightGameValue = gameValueArray[playOrder[1]];
  waitingGameValue = gameValueArray[playOrder[2]];

  leftGameImage = gameImageArray[playOrder[0]];
  rightGameImage = gameImageArray[playOrder[1]];
  waitingGameImage = gameImageArray[playOrder[2]];


  $("#leftbox_name").text(leftGameName);
  $("#rightbox_name").text(rightGameName);

  $("#leftbox_value").text(numberWithCommas(leftGameValue));
  $("#rightbox_value").text(numberWithCommas(rightGameValue));

  $(".unit").text(gameUnit);

  $("#playCount").html(count + "\/" + gameMaxNum + "﻿&nbsp;﻿&nbsp;");

  appendSlide(" '<div class=\"swiper-slide\"><img src=\" " + leftGameImage + " \"></div>' ");
  appendSlide(" '<div class=\"swiper-slide\"><img src=\" " + rightGameImage + " \"></div>' ");
  appendSlide(" '<div class=\"swiper-slide\"><img src=\" " + waitingGameImage + " \"></div>' ");

  slidePrev();


  $("#gameoverGoToMain").click(function() {
    window.location.href = 'https://youtu.be/ioGTF5BoMfA?t=706';
  });

  $("#gameoverReStart").click(function() {
    window.location.reload();
  });




  //크다 버튼
  $("#biggerButton").click(function() {

    if (leftGameValue < rightGameValue) {
      correctAnswer(true);
    } else {
      //틀렸어도 오차가 10% 미만이면 봐준다
      if (Math.abs(leftGameValue - rightGameValue) / Math.max(leftGameValue, rightGameValue) <= overlookRange) {
        correctAnswer(false);
      } else {
        incorrectAnswer();
      }
    }
  });


  //작다 버튼
  $("#smallerButton").click(function() {
    if (leftGameValue > rightGameValue) {
      correctAnswer(true);
    } else {
      //틀렸어도 오차가 10% 미만이면 봐준다
      if (Math.abs(leftGameValue - rightGameValue) / Math.max(leftGameValue, rightGameValue) <= overlookRange) {
        correctAnswer(false);
      } else {
        incorrectAnswer();
      }
    }
  });



});




function correctAnswer(perfect) {

  //fadeIn 디폴트 값은 400ms다
  //버튼을 숨기면서 숫자를 보여준다
  $("#rightbox_buttonsWrapper").hide();
  $("#rightbox_value").fadeIn();
  $("#rightbox_unit").fadeIn();


  $({
    val: 0
  }).animate({
    val: rightGameValue
  }, {
    duration: 1000,
    step: function() {
      var num = numberWithCommas(Math.floor(this.val));
      $("#rightbox_value").text(num);
    },
    complete: function() {
      $("rightbox_value").text(num);
    }
  });


  //동그라미나 삼각형을 보여준다
  setTimeout(function() {
    if (perfect) {
      $("#answer_o").fadeIn(600);
    } else {
      $("#answer_triangle").fadeIn(600);
    }
  }, 1100);

  //글자들을 hide한다
  setTimeout(function() {
    $("#leftbox_name, #rightbox_name, #leftbox_value,  #rightbox_value, .unit, .answerImage").hide(300);
  }, 3000);



  //문제가 마지막문제 직전이 아닐 때
  if (count < gameMaxNum - 1) {
    //오른쪽 값들을 왼쪽으로 옮기고, 슬라이드를 넘기면서 fadeIn 해준다
    setTimeout(function() {

      setTimeout(function() {
        rightToLeft();
      }, 300);

      slideNext(500);
      $("#leftbox_name, #rightbox_name, #leftbox_value, #leftbox_unit").fadeIn();
      $("#rightbox_buttonsWrapper").fadeIn(1000);
    }, 3050);

    //첫번째 슬라이드를 제거한다
    setTimeout(function() {
      removeSlide(0);
    }, 3600);

    //다 맞췄으면
  } else {
    setTimeout(function() {
      clearGamePopup();
    }, 3600);
  }
}


function incorrectAnswer() {

  //버튼을 숨기면서 숫자를 보여준다
  $("#rightbox_buttonsWrapper").hide();
  $("#rightbox_value").fadeIn();
  $("#rightbox_unit").fadeIn();


  $({
    val: 0
  }).animate({
    val: rightGameValue
  }, {
    duration: 1000,
    step: function() {
      var num = numberWithCommas(Math.floor(this.val));
      $("#rightbox_value").text(num);
    },
    complete: function() {
      $("rightbox_value").text(num);
    }
  });

  //x그림을 보여준다
  setTimeout(function() {
    $("#answer_x").fadeIn(600);
  }, 1100);

  setTimeout(function() {
    failGamePopup();
  }, 3000);

}


function failGamePopup() {
  $("#gameoverPopup").fadeIn();
  $("#gameoverCount").text(count);
  $("#gameoverCountMaxnum").text("점");

  if (count <= 2) {
    $("#gameoverMention").text(randomItem(["잘못 누르신 거라 믿어요"]));
  } else if (count <= 5) {
    $("#gameoverMention").text(randomItem(["조금 아쉽네요"]));
  } else if (count <= 10) {
    $("#gameoverMention").text(randomItem(["흠...터레스팅"]));
  } else if (count <= 20) {
    $("#gameoverMention").text(randomItem(["나쁘지 않았어요"]));
  } else if (count <= 30) {
    $("#gameoverMention").text(randomItem(["그래도 많이 맞추셨어요"]));
  } else if (count <= 50) {
    $("#gameoverMention").text(randomItem(["꽤 하시는데요?"]));
  } else if (count <= 70) {
    $("#gameoverMention").text(randomItem(["대단하신데요?"]));
  } else if (count <= 100) {
    $("#gameoverMention").text(randomItem(["정말 멀리 오셨어요"]));
  } else if (count <= 200) {
    $("#gameoverMention").text(randomItem(["이 정도면 고인물이죠"]));
  } else if (count <= 300) {
    $("#gameoverMention").text(randomItem(["정말정말 멀리 오셨어요"]));
  } else {
    $("#gameoverMention").text(randomItem(["경이로우세요"]));
  }

  $("#playCount").hide();
  $("#headerTopic").hide();
  $("#answer_x").hide(800);
}



function clearGamePopup() {
  count = count + 1;
  $("#gameoverPopup").fadeIn();
  $("#gameoverCount").text(count);
  $("#gameoverCountMaxnum").text("점");
  $("#gameoverMention").text("이걸 다 맞추시다니! 정말 대단하세요");
  $("#playCount").hide();
  $("#headerTopic").hide();
  $("#answer_o").hide(800);
  $("#answer_triangle").hide(800);
}


function rightToLeft() {
  count = count + 1;
  loadingIndex = loadingIndex + 1;

  leftGameName = rightGameName;
  rightGameName = waitingGameName;
  waitingGameName = gameNameArray[playOrder[loadingIndex]];

  leftGameValue = rightGameValue;
  rightGameValue = waitingGameValue;
  waitingGameValue = gameValueArray[playOrder[loadingIndex]];

  $("#leftbox_name").text(leftGameName);
  $("#rightbox_name").text(rightGameName);

  $("#leftbox_value").text(numberWithCommas(leftGameValue));
  $("#rightbox_value").text(numberWithCommas(rightGameValue));

  $(".unit").text(gameUnit);

  $("#playCount").html(count + "\/" + gameMaxNum + "﻿&nbsp;﻿&nbsp;");

  appendSlide(" '<div class=\"swiper-slide\"><img src=\" " + gameImageArray[playOrder[loadingIndex]] + " \"></div>' ");
}





function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createCodeArray(maxnum) {
  var playOrder = [];
  for (var i = 0; i < maxnum; i++) {
    playOrder[i] = i;
  }

  playOrder = shuffle(playOrder);
  return playOrder;
}


function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}

function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}