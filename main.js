// Анонимная самоисполняющаяся функция и событие, когда загружен ХТМЛ и построено ДОМ дерево
(() => {
  // // Если поместить объявление через переменную после вызова, то её не будет видно
  const ready = () => {
    console.log('ready');
  }
  document.addEventListener('DOMContentLoaded', ready);

})();

// Правильный хук на событие transition
(() => {
  window.onload = () => {
    var keys = document.querySelectorAll('.transition-hook__block');

    function removeEffect(e) {
      // Суть - в данный момент событие transitionend срабатывает много раз на разные события - это зависит от цсс - у нас там и бордер, и скейл и прочее.
      // Нам нужна только трансформация-скейл, поэтому отлавливаем окончание этого события и тут же убираем класс.
      if (e.propertyName !== 'transform') return;
      this.classList.remove('active');
    }

    keys.forEach(key => key.addEventListener('transitionend', removeEffect));
    window.addEventListener("keydown", (e) => {
      var key = document.querySelector('.transition-hook__block[data-key="' + e.keyCode + '"]');
      if (!key) return;
      key.classList.add('active');
    });
  }
})();





var arr1 = ['1','2','3'];
var arr2 = [...arr1, 'z'];    // '1','2','3', 'z'
var arr3 = ['z', ...arr1] ;   // 'z','1','2','3'
console.log(arr2);