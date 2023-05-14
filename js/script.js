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


  let kmCount = 0;
let videoCount = 0;
let workoutCount = 0;

let kmCounter = document.querySelector('#km-counter');
let videoCounter = document.querySelector('#video-counter');
let workoutCounter = document.querySelector('#workout-counter');

setInterval(function() {
  kmCount += 0.01;
  videoCount++;
  workoutCount++;
  
  kmCounter.innerHTML = kmCount.toFixed(2);
  videoCounter.innerHTML = videoCount;
  workoutCounter.innerHTML = workoutCount;
}, 1000);







  
  
  
  
  
  