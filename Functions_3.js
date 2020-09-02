// Задача
// Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

function getOwnDivisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

getOwnDivisors(124);

// Задача
// Реализуйте функцию getSum. Потестируйте ее работу.

function getSum(num) {
  return num.reduce((sum, elem) => sum + elem, 0);
}

getSum([1, 2, 3]);

// Задача
// Проверьте работу функции isFreindly.

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

isFreindly(220, 284);

// ---------------------------------------------

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getSum(arr) {
  return arr.reduce((sum, elem) => sum + elem, 0);
}

function getOwnDivisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

isFreindly(220, 284);
// Задача
// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива вида [ [220, 284], [1184, 1210], [2620, 2924] ]. С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 9000.

// Решение с использованием переменной принимающей стрелочную фнкцию:

const getDivisorCount = (num) => {
	let arr = [];
  for (let i = 1; i < num; i++) num % i === 0 && arr.push(i);
  return arr.reduce((acc, c) => acc + c, 0);
}

const getDivisors = (num) => {
	const n1 = getDivisorCount(num);
  const n2 = getDivisorCount(n1);
  if (num === n2 && n2 > n1) return [n2, n1];
    return null;
}

const getFreindly = (min, max) => {
	const arr = [];
  for (let i = min; i <= max; i++) {
  	const pair = getDivisors(i);
    if (pair !== null) arr.push(pair);
  }
  return arr;
}

console.log(getFreindly(1, 9000));


// Задача
// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

// Решение через классический цикл:

function getOwnDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
}

function getSum(num) {
  let sum = 0;
   for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}

function getPerfect(num1, num2) {
  let perfectNum = [];
  let getDivisors = {};
  for (let i = num1; i <= num2; i++) {
    if (i === getSum(i)) getDivisors[i] = getOwnDivisors(i);
 }
 return getDivisors
}

console.log(getPerfect(1, 1000));

