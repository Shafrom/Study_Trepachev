// Задача
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

let arr = [4, 9, 16, 25, 36];

let result = arr.map(elem => Math.sqrt(elem));

console.log(result);

// Задача
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let arr = ['soul', 'world', 'peace'];

let result = arr.map(elem => elem + '!');

console.log(result);

// Задача
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let arr = ['soul', 'world', 'peace'];

let result = arr.map(elem => elem.split('').reverse().join(''));

console.log(result);

// Задача
// Дан следующий массив:

let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

let result = arr.map(elem => elem.split('').map(el => +el));

console.log(result);

// Задача
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

let arr = [4, 9, 16, 25, 36];

let result = arr.map((el, ind) => el * (ind + 1));

console.log(result);


// Дан многомерный массив с числами, возведите каждый кго элемент в квадрат.

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map(el => el.map(el => el * el));

console.log(result);

// Задача
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(elem => sum += elem * elem);

console.log(sum);

// Задача
// Дан массив с числами. Оставьте в нем только положительные числа.

let arr = [10, 35, -45, 27, -22, -7, 108];

let res = arr.filter(el => el > 0);

console.log(res);

// Задача
// Дан массив с числами. Оставьте в нем только отрицательные числа.

let arr = [10, 35, -45, 27, -22, -7, 108];

let res = arr.filter(el => el < 0);

console.log(res);

// Задача
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let res = arr.filter(el => el > 0 && el < 10);

console.log(res);

// Задача
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr = ['soul', 'world', 'peace', 'krishna'];

let res = arr.filter(el => el.split('').length > 5);

console.log(res);

// Задача
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let res = arr.filter((el, i) => el * i < 30);

console.log(res);

// Задача
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

let arr = [1, 2, [3, 4], 5, [6, 7]];

let res = arr.filter(el => !Array.isArray(el));

console.log(res);

// Задача
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let res = arr.filter(el => el < 0).length;

console.log(res);

// Задача
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let res = arr.every(el => el > 0);

console.log(res);

// Задача
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let res = arr.every((a, i) => a * i < 30);

console.log(res);

// Задача
// Дан массив:

let arr = [1, 2, 3, 4, 5]; // Дана также функция:

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
// Найдите с помощью приведенной функции сумму элементов массива.

func(...arr);

// Задача
// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

let arr = [10, 35, -45, 27, -22, -7, 108, 7, 3];

let min = Math.min(...arr);

console.log(min);

// ------------------------------------------------------------
let str = '102030';

let sum = [...str].map(a => +a + +a);

console.log(sum);
//------------------------------------
function func(...rest) {
	console.log(rest);
}

func(1, 2, 3, 4, 5);
//-----------------------------------------------------

// Задача
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

const someth = (...sum) => {
  a = 0;
  for (let el of sum) a += el;
  return a / sum.length;
}

someth(1, 2, 3);

// Задача
// В следующем коде части массива записываются в соответствующие переменные:

function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let arr = func();

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let [name, surname, department, position, salary] = func();

console.log(arr);

//--------------------------------------------------------------------
// Задача
// В следующем коде части объекта записываются в соответствующие переменные:

let options = {
	width:  400,
	height: 500,
};

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

let width  = options.width;
let height = options.height;

// Переделайте этот код через деструктуризацию согласно изученной теории.

let options = {
	width:  400,
	height: 500,
};

let {width, height, color: color = 'black'} = options;

console.log(options);

//-------------------------------------

function func([year1, month1, day1], [year2, month2, day2]) {
	console.log(year1);
	console.log(month1);
	console.log(day1);
	console.log(year2);
	console.log(month2);
	console.log(day2);
}

func([1973, 'october', 25], [1973, 'november', 1]);

// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );
//-----------------------------------
function func([name, surname, department, position, salary]) {
  console.log(name, surname, department, position, salary);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name     = employee[0];
	let surname  = employee[1];
	let info     = employee.slice(2);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );
//-------------------------------------
function func([name, surname, ...info]) {
  console.log(name, surname, info);
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];

	let position;
	if (arr[3] !== undefined) {
		position = arr[3];
	} else {
		position = 'джуниор';
	}
}

func( ['Иван', 'Иванов', 'отдел разработки'] );
//------------------------------

function func([name, surname, department, position = 'джуниор']) {
  console.log(name, surname, department, position);
}

func(['Иван', 'Иванов', 'отдел разработки']);
// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(department, employee, hired) {
	let name     = employee[0];
	let surname  = employee[1];

	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}

func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );
//-----------------------------------------

function func(department, [name, surname], hired){
  let [year, month, day] = hired.split('-');
  console.log(department, name, surname, year, month, day);
};

func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );

// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let color  = options.color;
	let width  = options.width;
	let height = options.height;
}

func( {color: 'red', width: 400, height: 500} );
//----------------------------------------------

function func({color, width, height}) {
  console.log(color, width, height);
}

func( {color: 'red', width: 400, height: 500} );

// Задача
// Переделайте следующий код через деструктуризацию согласно изученной теории:

function func(options) {
	let width  = options.width;
	let height = options.height;

	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
}

func( {color: 'red', width: 400, height: 500} );
// ---------------------------------------------

function func({color = 'black', width, height}) {
  console.log(color, width, height);
}

func( {color: 'red', width: 400, height: 500} );

let num = 123;
let str = 'Hello';
let bul = true;
let test = [num, str, bul];

alert(test); // 123, Hello, true
bul = false;
alert(test); // 123, Hello, true
