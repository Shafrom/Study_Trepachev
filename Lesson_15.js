// Задача 1
// Спросите возраст пользователя с помощью функции prompt. Выведите с помощью alert введенный пользователем возраст.

let age = prompt('How old are You?');
alert('Your age is ' + age);

// Задача 2
// Переделайте приведенный ниже код так, чтобы суммировались числа, а не строки.

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(num1 + num2); // сложит числа как строки

// Решение:
let num1 = +prompt('Введите первое число'); // преобразует в число
let num2 = +prompt('Введите второе число'); // преобразует в число

alert(num1 + num2); // сложит числа

//         Практика

// Задача 3
// С помощью функции prompt спросите у пользователя сторону квадрата. Выведите на экран площадь введенного квадрата.

let num = +prompt('Please, enter the side length of quad');
alert('Quad squre is ' + num**2);

// Задача 4
// С помощью двух функций prompt спросите у пользователя стороны прямоугольника. Выведите на экран периметр введенного прямоугольника.

let num1 = +prompt('Please, enter the  first side length of rectangle');
let num2 = +prompt('Please, enter the  second side length of rectangle');
let num3 = +prompt('Please, enter the  third side length of rectangle');
let num4 = +prompt('Please, enter the  forth side length of rectangle');
alert(`The square of rectangle is ${num1 + num2 + num3 + num4}`);
