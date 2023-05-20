new WOW().init();


// function animateNumber(targetNumber, duration) {
//   const element = document.getElementById('out');
//   const startNumber = parseFloat(element.innerText);
//   const range = targetNumber - startNumber;
//   const increment = range / (duration / 10);
//   let currentNumber = startNumber;

//   const timer = setInterval(() => {
//     currentNumber += increment;
//     element.innerText = currentNumber.toFixed(2);

//     if (currentNumber >= targetNumber) {
//       clearInterval(timer);
//       element.innerText = targetNumber.toFixed(2);
//     }
//   }, 10);
// }

// animateNumber(4.95, 2000);

// function animateNumber_1(targetNumber, duration) {
//   const element = document.getElementById('out1');
//   const startNumber = parseInt(element.innerText);
//   const range = targetNumber - startNumber;
//   const increment = Math.ceil(range / (duration / 10));
//   let currentNumber = startNumber;

//   const timer = setInterval(() => {
//     currentNumber += increment;
//     element.innerText = currentNumber;

//     if (currentNumber >= targetNumber) {
//       clearInterval(timer);
//       element.innerText = targetNumber;
//     }
//   }, 10);
// }

// animateNumber(100, 2000); 


// var time = 1000;
// var step = 2;

// function outNum(num, elem) {
//   let e = document.querySelector("#out1");
//   n = 0;
//   let t = Math.round(time / (num / step));
//   let interval = setInterval(() => {
//     n = n + step;
//     if (n == num) {
//       clearInterval(interval);
//     }
//     e.innerHTML = n;
//   }, t);
// }

// outNum(350, "#out1");


// var time = 1000;
// var step = 3;

// function outNum1(num, elem) {
//   let e = document.querySelector("#out2");
//   n = 0;
//   let t = Math.round(time / (num / step));
//   let interval = setInterval(() => {
//     n = n + step;
//     if (n == num) {
//       clearInterval(interval);
//     }
//     e.innerHTML = n;
//   }, t);
// }

// outNum1(500, "#out2");


// function animateNumber(targetNumber, duration, elementId) {
//   const element = document.getElementById(elementId);
//   const startNumber = parseFloat(element.innerText.replace(',', ''));
//   const range = targetNumber - startNumber;
//   const increment = range / (duration / 10);
//   let currentNumber = startNumber;

//   const timer = setInterval(() => {
//     currentNumber += increment;
//     element.innerText = formatNumber(currentNumber);

//     if (currentNumber >= targetNumber) {
//       clearInterval(timer);
//       element.innerText = formatNumber(targetNumber);
//     }
//   }, 10);
// }

// function formatNumber(number) {
//   return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// animateNumber(500, 2000, 'out2');
// animateNumber(350, 1500, 'out1');
// animateNumber(4.95, 1000, 'out');
// function animateNumber(targetNumber, duration, elementId) {
//   const element = document.getElementById(elementId);
//   const startNumber = parseInt(element.innerText.replace(',', ''));
//   const range = targetNumber - startNumber;
//   const increment = Math.ceil(range / (duration / 10));
//   let currentNumber = startNumber;

//   const timer = setInterval(() => {
//     currentNumber += increment;
//     element.innerText = formatNumber(currentNumber);

//     if (currentNumber >= targetNumber) {
//       clearInterval(timer);
//       element.innerText = formatNumber(targetNumber);
//     }
//   }, 10);
// }

// function formatNumber(number) {
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// animateNumber(500, 2000, 'out2');
// animateNumber(350, 1500, 'out1');
// animateNumber(4.95, 1000, 'out');

// function animateNumber(targetNumber, duration, elementId) {
//   const element = document.getElementById(elementId);
//   const startNumber = parseFloat(element.innerText);
//   const range = targetNumber - startNumber;
//   const increment = range / (duration / 10);
//   let currentNumber = startNumber;

//   const timer = setInterval(() => {
//     currentNumber += increment;
//     element.innerText = formatNumber(currentNumber);

//     if (currentNumber >= targetNumber) {
//       clearInterval(timer);
//       element.innerText = formatNumber(targetNumber);
//     }
//   }, 10);
// }

// function formatNumber(number) {
//   return number.toFixed(2);
// }

// animateNumber(500, 2000, 'out2');
// animateNumber(350, 1500, 'out1');
// animateNumber(4.95, 1000, 'out');
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








  
  
  
  