const swiper = new Swiper('.swiper-container', {


  slidesPerView: 2, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 0, // 슬라이드간 간격
  slidesPerGroup: 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
  // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank: true,

  loop: true, // 무한 반복

  touchRatio: 0, //드래그 금지

  // ★동적로딩 설정
  // lazy: {
  //   loadPrevNext: true // 이전, 다음 이미지는 미리 로딩
  // },

  // navigation: { // 네비게이션
  //   nextEl: '.swiper-button-next', // 다음 버튼 클래스명
  //   prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
  // },

  on: {
    slidesLengthChange: function() {
      resizeContents();
    },
  }

});




function slideNext(speed) {
  swiper.slideNext(speed);
}

function slidePrev() {
  swiper.slidePrev();
}


// function activeSlide() {
//   alert($('.swiper-slide-active img').attr('src'));
// }

function appendSlide(slide) {
  swiper.appendSlide(slide);
}

function removeSlide(slideIndex) {
  swiper.removeSlide(slideIndex);
}