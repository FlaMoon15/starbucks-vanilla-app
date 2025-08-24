/* sub-menu Event START */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
/* sub-menu Event END */


/* BADGE EVENT START */
const badgeEl = document.querySelector('header .badges');

/**
 * throttle은 lodash.js 사용
 * throttle(함수, 시간)
 * GSAP 사용
 */
window.addEventListener('scroll', _.throttle(() => {
  console.log(window.scrollY);
  if (window.scrollY > 500) { // Badge Hidden
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
  } else { // Badge Visible
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));
/* BADGE EVENT END */


/* FADE-IN START */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});
/* FADE-IN END */


/* Swiper START */
/**
 *  notice-line
 *  new Swiper(선택자, 옵션)
 */ 
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
/**
 *  promotion
 *  new Swiper(선택자, 옵션)
 */ 
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
/* Swiper END */


/* PROMOTION START */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

// Promotion Toggle
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // Promotion Hide
    promotionEl.classList.add('hide');
  } else {
    // Promotion Visible
    promotionEl.classList.remove('hide');
  }
});
/* PROMOTION END */