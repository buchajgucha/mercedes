var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 60,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("menu--active");
});
console.log(menu);

const videoLink = document.querySelector(".video__link");
const videoPlay = document.querySelector(".video__play");
const videoImg = document.querySelector(".video__img");

videoLink.addEventListener("click", function () {
  videoPlay.classList.toggle("video__play--active");
  videoImg.classList.toggle("video__img--active");
  if (videoPlay.classList.contains("video__play--active")) {
    videoPlay.play();
  } else {
    videoPlay.pause();
  }
});
