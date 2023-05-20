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



// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//       items: 5,
//       loop: true,
//       margin: 10,
//       nav: true,
//   });
// });

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    rtl:true
  });
});



// $(document).ready(function() {
//   $('.owl-carousel').owlCarousel({
//     items: 4,
//     loop: true,
//     nav: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     onInitialized: function(event) {
//       var carousel = event.target;
//       var $dots = $(carousel).find('.owl-dots .owl-dot');

//       $dots.each(function(index, dot) {
//         var $dot = $(dot);
//         var $text = $dot.find('.dot-text');
//         var textWidth = $text.outerWidth();
//         var dotWidth = $dot.outerWidth();
//         var rightValue = (dotWidth - textWidth) / 2;

//         $text.css('right', rightValue + 'px');
//       });
//     }
//   });
// });





  
  
  