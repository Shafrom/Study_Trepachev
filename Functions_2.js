// Задача

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function evenCheck(arr) {
  for (let elem of arr) {
    if (elem % 2 !== 0) return false;
  }
  return true;
}

console.log(evenCheck([1, -2, 3, 4, -5]));
console.log(evenCheck([2, -2, 6, 4, -8]));

// Вариант попроще:

function evenCheck(arr) {
  return arr.every(elem => elem % 2 === 0);
}

// Или еще короче:

const evenCheck = arr => arr.every(elem => elem % 2 === 0);

// проверяем:
console.log(evenCheck([1, -2, 3, 4, -5]));
console.log(evenCheck([2, -2, 6, 4, -8]));

// Задача

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function oddDigCheck(num) {
  return num.toString().split('').some(elem => +elem % 2 !== 0);
}

oddDigCheck(246);

// Задача

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function func(arr) {
  return arr.some((n, i) => n === arr[i - 1]);
}

console.log(func([2, 2, 3, 4, 5, 5]));
console.log(func([2, 3, 4, 5, 6, 7]));

// Или еще можно упростить:

const func = arr => arr.some((n, i) => n === arr[i - 1]);

console.log(func([2, 2, 3, 4, 5, 5]));
console.log(func([2, 3, 4, 5, 6, 7]));

// Вариант через цикл:

function check(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return true;
  }
  return false;
}

console.log(check([2, 2, 3, 4, 5, 5]));
console.log(check([2, 3, 4, 5, 6, 7]));
