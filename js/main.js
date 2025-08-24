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
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
/* Swiper END */
