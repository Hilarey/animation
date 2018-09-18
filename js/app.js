// WOW инициализация
const wow = new WOW()
/* или можно изменить настройки
const wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
);
*/
wow.init();

// Odometer инициализация
const od = new Odometer({
  el: document.querySelector('.digits'),
  value: 0
});
const od1 = new Odometer({
  el: document.querySelector('.digits1'),
  value: 0
});
const od2 = new Odometer({
  el: document.querySelector('.digits2'),
  value: 1000
});
const od3 = new Odometer({
  el: document.querySelector('.digits3'),
  value: 123455
});
od.el.innerHTML = od.value
od1.el.innerHTML = od1.value
od2.el.innerHTML = od2.value
od3.el.innerHTML = od3.value


// включаем одометр при появлении блока на экране
window.addEventListener(
  "scroll",
  //  lodash debounce для уменьшения количества обрабатываемых событий
  _.debounce(function(e) {
    if (od.el.getAttribute("style")) {
      const isVisible = od.el.getAttribute("style").indexOf("visible") >= 0;
      if (isVisible) {
        od.update(123)
        od1.update(4567)
        od2.update(2000)
        od3.update(123456)
      }
    }
  }),
  1500
);
