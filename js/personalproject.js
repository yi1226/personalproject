//  電腦版  swiper
var oWidth = document.querySelector('#body');

//裝置剛開始讀取
var awidth = window.outerWidth;
var ochangeSlidesPerView;
if (awidth > 1024) {
  ochangeSlidesPerView = 3;
  swiper;
} else if (awidth > 768 && awidth < 1024) {
  ochangeSlidesPerView = 2;
  swiper;
} else if (awidth <= 767) {
  ochangeSlidesPerView = 1;
  swiper;
}
var swiper = new Swiper('.swiper-container', {
  slidesPerView: ochangeSlidesPerView,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//視窗寬度調整事件
  oWidth.onresize = function () {
    var awidth = window.outerWidth;
    var ochangeSlidesPerView;
    console.log(awidth);

    if (awidth > 1024) {
      ochangeSlidesPerView = 3;
    } else if (awidth <= 768) {
      ochangeSlidesPerView = 1;
    } else {
      ochangeSlidesPerView = 2;
    }

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: ochangeSlidesPerView,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

//  $('.btnp6').cilck( function() {
//    $(".p6text").removeClass("active");
//    $(this).addclass("active"); 
//  })

//  手機板

var pages = new Array('one', 'two', 'three', 'four');

function toggleMenu() {
  document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
}

function goToPage(page) {
  var wrapper = document.getElementsByClassName('wrapper')[0];
  var sections = document.getElementsByTagName('section');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  wrapper.classList.remove('menu-open', 'page-one', 'page-two');
  wrapper.classList.add('page-' + pages[page]);
}
// 漢堡條
var burgers = document.querySelector('.burger');

var topbar = document.querySelector('.topbar');
var midbar = document.querySelector('.midbar');
var btmbar = document.querySelector('.btmbar');
burgers.onclick = function () {
  menu.classList.toggle("active");
  topbar.classList.toggle("active");
  midbar.classList.toggle("active");
  btmbar.classList.toggle("active");
}
// menu連結

var linktab = document.querySelectorAll('.linktab');
var linkcontent = document.querySelectorAll('.linkcontent');
var menu = document.querySelector('.menu');

for (let index = 0; index < linktab.length; index++) {
  const link_array = linktab[index];

  link_array.onclick = function () {
    remove_active();
    link_array.classList.add('active');
    linkcontent[index].classList.add('active');
  }
}
////
menu.onclick = function () {
  if (menu.classList.contains('active') == true) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

function remove_active() {
  for (const link_array of linktab) {
    link_array.classList.remove('active');
  }
  linkcontent.forEach(link_container => {
    link_container.classList.remove('active');
  });
}

