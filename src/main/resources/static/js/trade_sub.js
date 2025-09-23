window.addEventListener('DOMContentLoaded', function () {
  let trSwiper = new Swiper('.tr_swiper .swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3, // ← 모바일 기본 그룹
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // 태블릿
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4, // ← 그룹 설정 추가
        spaceBetween: 20,
      },
      // PC
      1201: {
        slidesPerView: 5,
        slidesPerGroup: 5, // ← 그룹 설정 추가
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});