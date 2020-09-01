// Задача
// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

function func(num) {
  console.log(Math.pow(num, 3));
}

func(3);

// Задача
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

function func(num) {
  if (num > 0) console.log('+++');
    else console.log('---');
}

func(5);

// Задача
// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

function func(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

func(10, 20, 30);

// Задача
// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
let param1 = 1;
let param2 = 2;
let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

function func(param1, param2, param3) {
  console.log(param1 + param2 + param3);
}

func(param1, param2, param3);

// Задача
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

function func(num) {
  return num * num * num;
}

let result = func(3);
console.log(result);

// Задача
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

function sqrt(num) {
  return Math.sqrt(num);
}
let result = sqrt(3) + sqrt(4);
console.log(result);

// Задача
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

let result = +round(sqrt(2))

console.log(result);

// Задача
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел. С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let result = sum(sqrt(2), sqrt(3), sqrt(4));

console.log(result);

// Задача
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части. С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return +num.toFixed(3);
}

let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));

console.log(result);

// Задача
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func(num) {
  let sum = 0;
  let i = 1;
  while (true) {
    sum += i;
    num = num / 2;
    if (num <= 10) {
      return i
    }
    i++;
  }
}
console.log(func(20));

// Задача
// Дана следующая функция:

function func(num1, num2) {
	let result;

	if (num1 > 0 && num2 > 0) {
		result = num1 * num2;
	} else {
		result = num1 - num2;
	}

	return result;
}

alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

let result = func(3, 4);
console.log(result);

// Задача
// Напишите функцию, которая будет находить сумму квадратов элементов массива.

let arr1 = [1, 2, 3, 4, 5];

function some(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += Math.pow(elem, 2);
  }
  return sum;
}

console.log(some(arr1));

// Задача
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num) {
  return String(num).split('').reduce((sum, current) => sum + +current, 0);
}

console.log(getDigitsSum(12345));


let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce((sum, current) => sum + +current, 0);

console.log(result);

// Задача
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].

function getDivisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

getDivisors(24);

// Задача
// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(str) {
  return str.split('').reverse().join('');
}

reverseStr('abcdefgh');

// Задача
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

function delElem(elem, arr) {
  return arr = arr.filter(n => n != elem);
}

delElem(23, [23, 23, 3, 5, 23, 7]);

// Задача
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// Пример работы такой функции:
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function func(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

func(10);

// Задача
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.
// Пример работы такой функции:
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function func(num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
}

func(10, 20);
