var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);


new WOW().init();



function animateInteger(targetNumber, duration, elementId) {
  const element = document.getElementById(elementId);
  const startNumber = parseInt(element.innerText.replace(',', ''));
  const range = targetNumber - startNumber;
  const increment = Math.ceil(range / (duration / 10));
  let currentNumber = startNumber;

  const timer = setInterval(() => {
    currentNumber += increment;
    element.innerText = formatInteger(currentNumber);

    if (currentNumber >= targetNumber) {
      clearInterval(timer);
      element.innerText = formatInteger(targetNumber);
    }
  }, 10);
}

function animateDecimal(targetNumber, duration, elementId) {
  const element = document.getElementById(elementId);
  const startNumber = parseFloat(element.innerText);
  const range = targetNumber - startNumber;
  const increment = range / (duration / 10);
  let currentNumber = startNumber;

  const timer = setInterval(() => {
    currentNumber += increment;
    element.innerText = formatDecimal(currentNumber);

    if (currentNumber >= targetNumber) {
      clearInterval(timer);
      element.innerText = formatDecimal(targetNumber);
    }
  }, 10);
}

function formatInteger(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatDecimal(number) {
  return number.toFixed(2);
}

animateInteger(500, 3000, 'out2');
animateInteger(350, 2500, 'out1');
animateDecimal(4.95, 2000, 'out');


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    rtl: true
  });
});

$(document).ready(function () {
  function checkCarousel() {
    var viewportWidth = $(window).width();

    if (viewportWidth < 750) {
      // Очень маленькие экраны (меньше 480px)
      $('.owl-carousel').trigger('destroy.owl.carousel');
      $('.owl-carousel').removeClass('owl-loaded');
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        rtl: true
      });
    } else if (viewportWidth < 868) {
      // Маленькие экраны (от 480px до 767px)
      $('.owl-carousel').trigger('destroy.owl.carousel');
      $('.owl-carousel').removeClass('owl-loaded');
      $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        rtl: true
      });
    } else if (viewportWidth < 992) {
      // Средние экраны (от 768px до 991px)
      $('.owl-carousel').trigger('destroy.owl.carousel');
      $('.owl-carousel').removeClass('owl-loaded');
      $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        rtl: true
      });
    } else {
      // Большие экраны (992px и выше)
      $('.owl-carousel').trigger('destroy.owl.carousel');
      $('.owl-carousel').removeClass('owl-loaded');
      $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        rtl: true
      });
    }
  }

  checkCarousel();
  $(window).on('resize', function () {
    checkCarousel();
  });
});



window.onload = function() {
  var scrollElem = document.getElementById("scrollToTop");
  window.onscroll = function() {
      if (this.scrollY > 400) {
          scrollElem.style.display = "block";
      } else {
          scrollElem.style.display = "none";
      }
  }
  scrollElem.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}




