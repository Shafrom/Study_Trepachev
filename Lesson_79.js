// Задача 1
// Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = 'js';

console.log(str.toUpperCase());

// Задача 2
// Дана строка 'JS'. Сделайте из нее строку 'js'.

let str = 'JS';

console.log(str.toLowerCase());

// Задача 3
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!';
let strNew1 = str.slice(2, 5);
let strNew2 = str.slice(6, 16);
let strGen = `${strNew1} ${strNew2}`;

console.log(str.substr(2, 3), str.substr(6, 10));
console.log(str.substring(2, 5), str.substring(6, 16));
console.log(str.slice(2, 5), str.slice(6, 16));
console.log(strGen);

// Задача 4
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// Задача 5
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

let str = 'abcde';

console.log(str.indexOf(c))

// Задача 6
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.

// Задача 7
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

// Задача 8
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

// Задача 9
// Дана строка. Проверьте, начинается ли эта строка на http://.

// Задача 10
// Дана строка. Проверьте, заканчивается ли эта строка на .html.

// Задача 11
// Дана строка. Проверьте, начинается ли эта строка на http://.

// Задача 12
// Дана строка. Проверьте, заканчивается ли эта строка на .html.

// Задача 13
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

let str = '1-2-3-4-5';

console.log(str.split('-'));

// Задача 14
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

let str = '12345';

console.log(str.split(''));

// --------------------------

let str = '123456789';
let newStr = str.split('');
let arr = [];

for (let elem of newStr) {
  arr.push(+elem);
}

console.log(arr);

// --------------------------

let str = '123456789';
let arr = str.split('').map(elem => +elem);
console.log(arr);

// ----------------------------

let str = 'roof window step';

console.log(str.split(' ').reverse().join(' '));
