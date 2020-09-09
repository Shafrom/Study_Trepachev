function test(arr, func) {
	return arr.map(element => func(element));
}

// Преобразуем массив чисел в массив их квадратов:
let result = test([1, 2, 3], (num => num * num));

console.log(result); // выведет [1, 4, 9]

// Преобразуем массив чисел в массив их кубов:
let result2 = test([1, 2, 3], (num => num * num * num));

console.log(result2); // выведет [1, 8, 27]

//---------------------------------------

let func = (function() {
	let num = 1;
	return function() {
    if (num > 5) num = 1;
    alert(num);
		num++;
	}
})();

func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4
func(); //выведет 5
func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func(); //выведет 4

//------------------------------

let result = function() {
  return '!';
}();

console.log(result);

//и

let result = function() {
  return '!';
};

console.log(result());

//---------------------------------

function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
	return result;
}

let result = each(['call', 'green', 'heaven'], (str => str.split('').reverse().join('')));

console.log(result);

//-------------------------------------
// Оптимизировал код для задачи номер 2 по теме колбэк функции:

function each(arr, callback) {
  return arr.map(elem => callback(elem));
}

let result = each(['call', 'green', 'heaven'], (str => str.charAt(0).toUpperCase() + str.slice(1)));

console.log(result);

//------------------------------------------

function each(arr, callback) {
  let i = 1;
  return arr.map((elem, index) => callback(elem, i++));
}

let result = each([10, 20, 30], (elem, index) => elem * index);

console.log(result);

//Упростите коллбэк через стрелочную функцию:

let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

// Упрощенный вариант:
const result = every([1, 2, 3, 4, 5], elem => elem > 0);

//Упростите коллбэк через стрелочную функцию:

let result = every([1, 2, 3, 4, 5], function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});

// Упрощенный вариант:
const result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

//Упростите коллбэк через стрелочную функцию:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = each(, function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});

// Упрощенный вариант:

const result = each(arr, (elem, index) => elem * index > 10);

//-------------------------------------------------------

// Числа Фибоначчи с использованием рекурсии:

const fib = (length, arr = [1, 1]) => {
	if (arr.length >= length + 1) return arr.reverse().slice(1);
  const [a, b] = arr;
  return fib(length, [a + b, ...arr])
};

console.log(fib(20));

