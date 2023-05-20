new WOW().init();


const time = 1000;
const step = 1;

function outNum(num, elem) {
  let e = document.querySelector("#out");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(350, "#out");





  
  
  
  
  
  