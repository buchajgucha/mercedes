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

  $('.video__link').on('click', function(){
    $('.video__play').toggleClass('video__play--active');
    $('.video__img').toggleClass('video__img--active');
    if($('.video__play').hasClass('video__play--active')){
      $('.video__play').trigger('play');
    
    }else{$('.video__play').trigger('pause')}
    
});