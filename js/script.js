// Swiper-slider===================================================================================
const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
});

// scroll header=========================================================
var minOffset = 50;
window.onscroll = function () {
  let has_class = document.body.classList.contains("is_scrolled");

  if (minOffset < document.documentElement.scrollTop) {
    if (!has_class) {
      document.body.classList.add("is_scrolled");
    }
  } else if (has_class) {
    document.body.classList.remove("is_scrolled")

  }
};


// ===============================
document.addEventListener('DOMContentLoaded',function(){
  new SmartPhoto(".js-smartPhoto",{
    useOrientationApi: false
  });
});


