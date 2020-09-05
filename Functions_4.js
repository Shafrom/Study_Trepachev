// Задача на пересечение массивов

function getInt(arr1, arr2) {
  let result = [];
  for (let elem of arr1) {
    if (arr2.includes(elem)) result.push(elem);
  }
  return result;
}

console.log(getInt([1, 2, 3, 4, 7], [2, 3, 4, 5, 7]));

// Задача на разность елементов массивов

function dif(arr1, arr2) {
  return arr1.filter(i => !arr2.includes(i)).concat(arr2.filter(i => !arr1.includes(i)))
}

console.log(dif([1, 2, 3, 4, 7], [2, 3, 4, 5, 7]));

// Еще более правильный вариант

function diff(arr1, arr2) {
	return arr1.concat(arr2).filter((el, i, array) => array.indexOf(el) === array.lastIndexOf(el))
}

console.log(diff([1, 2, 3, 4, 7], [2, 3, 4, 5, 7]));

// Задача на наибольший общий делитель

function divisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function diff(arr1, arr2) {
	return arr1.concat(arr2).filter((el, i, array) => array.indexOf(el) !== array.lastIndexOf(el))
}

const func = (num1, num2) => {
	const arr = diff(divisors(num1), divisors(num2));
  return arr.sort((a, b) => b - a)[0];
//return Math.max(...arr); - либо вот так можно, используя оператор spread
}

console.log(func(120, 200));
// --------------------------------

function shuffle(arr) {
  let result = [];

  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(shuffle([1, 2, 3, 4, 5]));

// Задача
// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

function range(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
     arr.push(i);
  }
  return arr;
}

console.log(range(1, 16));

// Задача
// Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rangeRand(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
     arr.push(i);
  }
  let res = [];
  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    res.push(elem);
   }
   return res;
}

console.log(rangeRand(0, 8));


// -------------------------------------------------------------------------------
// Задача на вывод счастливых 6-ти значных билетов в диапазоне от 000001 до 999999
// -------------------------------------------------------------------------------

// Функция "нормализации" в простом виде может быть такая:

// const normalize = (num) => {
//   const str = String(num);
//   let newStr = '';
//   for (let i =0; i < 6 - str.length; i++) {
//     newStr += 0;
//   }
//   return newStr + str;
// }

// А может быть немного укорочена вот так:

const normalize = (num) => {
	const str = String(num);
  return '0'.repeat(6 - str.length) + str;
}

const getLuckyNumbers = () => {
  let result = [];
  for (let i = 1001; i <= 999999; i++) {
    const str = normalize(i);
    if (isLucky(str)) result.push(str);
  }
  return result;
}

const isLucky = (num) => {
	let str = normalize(num);
	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
	return sum1 === sum2;
}

console.log(getLuckyNumbers());
