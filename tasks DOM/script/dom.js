// 1
// function changeBackground() {
//     let body = document.getElementById('body');
//     body.style.backgroundColor = 'red';
// }

// 2
// function checkUpValue() {
//     let input1 = document.getElementById('input1');
//     let input2 = document.getElementById('input2');
//     if (input1.value == '' && input2.value == '') {
//         console.log("поля пустые");
//     } else {
//         console.log("поля не пустые")
//     }
// }

// 3
// let app = document.getElementById('app');

// app.style.width = '200px'
// app.style.height = '200px'
// app.style.background = 'red';
// app.style.borderRadius = '40px';
// app.style.border = 'none';

// window.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowLeft") {
//         initialPosition -= 100;
//         elem.style.left = `${initialPosition}px`;
//     }
//     if (e.key === "ArrowRight") {
//         initialPosition += 100;
//         elem.style.left = `${initialPosition}px`;
//     }
// });

// Задание #4
// Навесьте на событие движения мыши обработчик, который будет выводить в консоль
// координаты движения. Примечание: выводите их как x и y.
// Событие надо «повесить» на document

// let elem = document.querySelector('#elem');

// document.addEventListener('mousemove', function(event) {
//     elem.innerHTML = 'X = ' + event.pageX + ' : ' + 'Y = ' + event.pageY;
// })

// Задание #5
// Создайте обработчик события, который при нажатии на div элемент выводит через
// alert() id либо class вашего элемента

// let element = document.getElementById('element');
// let elementId = element.id;
// let elementClass = element.className;

// element.style.width = '200px';
// element.style.height = '200px';
// element.style.background = 'red';

// element.addEventListener('click', function() {
//     alert(`class: ${elementClass} и id: ${elementId}`);
// })

// Задание №6
// Создайте две кнопки в HTML - "увеличить" и "уменьшить". В JS файле создайте
// глобальную переменную counter. Навесьте на ваши кнопки обработчики событий, которые
// увеличивают, либо уменьшают ваш counter на одну единицу при нажатии на
// соответствующую кнопку.

// let count = document.querySelector('#CountNumber');
// let countPlus = document.querySelector('#CountPlus');
// let countMinus = document.querySelector('#CountMinus');

// countPlus.addEventListener('click', function() {
//     if (count.innerHTML < 100) {
//         count.innerHTML ++
//     }
// });

// countMinus.addEventListener('click', function() {
//     if (count.innerHTML < 100) {
//         count.innerHTML --
//     }
// })

// Задание №7
// Создайте в HTML параграф с текстом. В JS файле напишите обработчик
// события, который при нажатии на текст, выводит количество букв и пробелов
// в вашем тексте.

// let elem1 = document.querySelector('#elem');
// let elem = document.querySelector('#elem').innerHTML;
// let elemLength = elem.length;
// let count = 0;

// for (let i = 0; i < elem.length; i++) {
//     if (elem[i] === " ")
//         ++count;
// }

// elem1.addEventListener('click', function () {
//     console.log(`Количество букв: ${elemLength}`);
//     console.log(`Количество пробелов: ${count}`);
// })

// Задание №8
// Создайте в HTML button. Навесьте на этот элемент обработчик события, который
// при нажатии на кнопку удаляет эту кнопку.

// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
//     let parent = button.parentNode
//     parent.removeChild(button);
// })

// Задание #9
// Создайте модальное окно по аналогии с компонентом Bootstrap:
// http://getbootstrap.com/javascript/#modals;

// let modalWindow = document.querySelector('#modalWindow');
// let input1 = document.querySelector('#input1');
// let saveButton = document.querySelector('#saveButton');
// let input2 = document.querySelector('#input2');
// let task = document.querySelector('#task');
// let closeButton = document.querySelector('#closeButton');
// let taskName = document.querySelector('#taskName');
// let imageClose = document.querySelector('#imageClose');

// saveButton.addEventListener('click', function () {
//     taskName.append(" " + input1.value);
//     task.append(" " + input2.value);
// });

// closeButton.addEventListener('click', function () {
//     let window = modalWindow.parentNode;
//     window.removeChild(modalWindow);
// });

// imageClose.addEventListener('click', function () {
//     let closeSimbol = modalWindow.parentNode;
//     closeSimbol.removeChild(modalWindow);
// });

// Задание №10
// Создайте кнопку и нумерованный список с 6 li элементами в HTML. Навесьте на кнопку
// обработчик события, который при нажатии проходится циклом по элементам списка и меняет
// их цвет на зеленый.

// function changeColor() {
//     let elements = document.querySelectorAll('.list li')

//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.color = 'green';
//     }
// }

// Задание №11
// Создайте в HTML кнопку и таблицу состоящую из двух столбцов и одного ряда. Напишите в
// JS функцию которая при каждом нажатии на кнопку будет добавлять новый ряд в Вашу таблицу.

// let table = document.querySelector('#table tr');
// let button = document.querySelector('#button');
// let row = document.querySelector('#row td');

// button.addEventListener('click', function() {
//     table.append(row);
// })

// Задание №12
// Напишите код который будет создавать h1 тэг и выводить в тэг информацию о размере
// окна (ширину и высоту) браузера, каждый раз как вы меняете размер окна.

// let elem = document.querySelector("#elem");
// let body = document.querySelector('#body');
// let bodyWidth = elem.clientWidth;
// let bodyHeight = elem.clientHeight;
// elem.textContent = `Ширина: ${bodyWidth}, Высота: ${bodyHeight}`;

// if (bodyWidth <= bodyWidth && bodyHeight <= bodyHeight) {
//     elem.textContent = `Ширина: ${bodyWidth}, Высота: ${bodyHeight}`;
// }

// Задание №13
// Создайте в HTML кнопку. Напишите код который при нажатии на кнопку будет выдавать
// вам случайные цитаты в браузере.

// Задание №14
// Создайте гоночную игру с двумя машинами. Когда кнопка старта нажата,
// две машины должны двигаться по экрану, пока одна из них не окажется в другом конце экрана.
// Когда один из блоков дойдет до конца - вы должны поздравить победителя при помощи
// модального окна.

// Задание #15
// Создайте скрипт, реализующий игру
// Крестики-нолики http://htmllab.ru/krestiki-noliki/