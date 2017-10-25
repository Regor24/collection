// Анонимная самоисполняющаяся функция и событие, когда загружен ХТМЛ и построено ДОМ дерево
(() => {
  // // Если поместить объявление через переменную после вызова, то её не будет видно
  var ready = () => {
    console.log('ready');
  }
  document.addEventListener('DOMContentLoaded', ready);
})();

<<<<<<< HEAD:main.js
// Правильный хук на событие transition
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

// Let, const, var
let fVar = function () {
  console.log('sadsad!!');
}

// Spread & Rest
function spread() {
  var arr1 = ['1','2','3'];
  var arr2 = [...arr1, 'z'];    // '1','2','3', 'z'
  var arr3 = ['z', ...arr1] ;   // 'z','1','2','3'
  console.log('spread', arr2);
}

// LOAD TEST:
spread();
=======


// Синглтон
// Expose module as global variable
var singleton = function(){

  // Правильный хук на событие transition
  function transitionEvent() {
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
  // end;

  // Spread & Rest
  function spread() {
    var arr1 = ['1','2','3'];
    var arr2 = [...arr1, 'z'];    // '1','2','3', 'z'
    var arr3 = ['z', ...arr1] ;   // 'z','1','2','3'
    console.log('spread', arr2);
  }
  // end;

  // Drag and drop
  function dragDrop() {
    const block = document.querySelector('.js-drag-n-drop');
    const containerPosition = document.querySelector('.js-drag-n-drop-container').getBoundingClientRect();

    // Отключаем собственный дрэг дроп браузера.
    // Он срабатывает для картинок, например. Те самые полупрозрачные фантомы картинок, ага.
    block.ondragstart = function() {
      return false;
    };

    block.addEventListener('mousedown', function(e) { // 1. отследить нажатие
      // подготовить к перемещению
      // 2. разместить на том же месте, но в абсолютных координатах
      block.style.position = 'absolute';
      moveAt(e);

      block.style.zIndex = 1000; // показывать над другими элементами

      // передвинуть под координаты курсора
      // и сдвинуть на половину ширины/высоты для центрирования
      function moveAt(e) {
        block.style.left = e.clientX - block.offsetWidth / 2 + 'px';
        block.style.top =  e.clientY - block.offsetHeight / 2 - containerPosition.top + 'px';
      }

      // 3, перемещать по экрану
      document.onmousemove = function(e) {
        moveAt(e);
      }

      // 4. отследить окончание переноса
      block.onmouseup = function() {
        document.onmousemove = null;
        block.onmouseup = null;
      }
    });
  }

  // Expose API
  return {
    transitionEvent: transitionEvent,
    spread: spread,
    dragDrop: dragDrop
  }
}();


// LOAD TEST:
singleton.dragDrop();
>>>>>>> 2ed4ad2efe326b3f8d9d08ba47a2584d301ced6c:js/main.js
