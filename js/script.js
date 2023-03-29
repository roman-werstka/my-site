// Swiper-slider===================================================================================
const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Autoplay
  autoplay: {
    delay: 8000,
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


// Modal===============================
const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});


// jquery===================
if (window.jQuery) {
  console.log("Yes")
} else {
  console.log("No")
}

// form================
$("#submit").click(function () {
  var name = $('input[name=fio]').val();
  var tel = $('input[name=tel]').val();
  var otpravka = true;
  if (name == "") {
    otpravka = false;
  }
  if (tel == "") {
    otpravka = false;
  }
  if (otpravka) {

    dannie = { 'polz_name': name, 'polz_tel': tel };
    $.post('senda.php', dannie, function (otvet) {
      rezultat = '<div style="color:#D80018;">' + otvet.text + '</div>';
      $("#form_result").hide().html(rezultat).slideDown();
    }, 'json');
  }
});

// tabs===========================
// let tabsBtn = document.querySelectorAll('.services__link');
// let tabsItem = document.querySelectorAll('.services__info');

// tabsBtn.forEach(function(element){
//   element.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path;

//     tabsBtn.forEach(function(btn){ btn.classList.remove('services__link--active')});
//     e.currentTarget.classList.add('services__link--active');

//     tabsItem.forEach(function(element){ element.classList.remove('services__info--active')});
//     document.querySelector(`[data-target="${path}"]`).classList.add('services__info--active');
//   });
// })


// new Accordion('.accordion-container');
new Accordion(['.container-first', '.container-second'], {});


