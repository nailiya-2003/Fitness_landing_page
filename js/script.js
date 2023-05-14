// document.addEventListener('DOMContentLoaded', function() {
//     var workTxtElement = document.querySelector('.work-txt');
//     var workDescrElement = document.querySelector('.work-descr');
//     var workSectionElement = document.querySelector('.at_home_txt');
//     var workSectionPosition = workSectionElement.offsetTop;
    
//     window.addEventListener('scroll', function() {
//       if (window.pageYOffset >= workSectionPosition) {
//         workTxtElement.classList.add('visible');
//         workDescrElement.classList.add('visible');
//       }
//     });
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     var workTxtElement = document.querySelector('.work-txt');
//     var workDescrElement = document.querySelector('.work-descr');
//     var workSectionElement = document.querySelector('.at_home_txt');
//     var workSectionPosition = workSectionElement.offsetTop;
    
//     if (window.pageYOffset >= workSectionPosition) {
//       workTxtElement.classList.add('visible');
//       workDescrElement.classList.add('visible');
//     }
  
//     window.addEventListener('scroll', function() {
//       if (window.pageYOffset >= workSectionPosition) {
//         workTxtElement.classList.add('visible');
//         workDescrElement.classList.add('visible');
//       }
//     });
//   });
// document.addEventListener('DOMContentLoaded', function() {
//     var workTxtElement = document.querySelector('.work-txt');
//     var workDescrElement = document.querySelector('.work-descr');
//     var workSectionElement = document.querySelector('.opportunities');
//     var workSectionPosition = workSectionElement.offsetTop;
//     var screenHeight = window.innerHeight;
    
//     window.addEventListener('scroll', function() {
//       var currentPosition = window.pageYOffset + screenHeight;
//       if (currentPosition >= workSectionPosition && currentPosition <= (workSectionPosition + 100)) {
//         workTxtElement.classList.add('visible');
//         workDescrElement.classList.add('visible');
//       }
//     });
//   });
document.addEventListener('DOMContentLoaded', function() {
    var workTxtElement = document.querySelector('.work-txt');
    var workDescrElement = document.querySelector('.work-descr');
    var seeMoreElement = document.querySelector('.see-more');
    var getDescrElement = document.querySelector('.get-descr');
    var getTextElement = document.querySelector('.get-txt');
    var workSectionElement = document.querySelector('.opportunities');
    var workSectionPosition = workSectionElement.offsetTop;
   
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= workSectionPosition - 50) {
        setTimeout(function() {
          workTxtElement.classList.add('visible');
          workDescrElement.classList.add('visible');
          seeMoreElement.classList.add('visible');
          getDescrElement.classList.add('visible');
          getTextElement.classList.add('visible');
        }, 50);
      }
    });
  });
  
  
  
  
  
  
  