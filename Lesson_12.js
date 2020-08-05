// Задача 1
// Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
alert(str[0]);
alert(str[2]);
alert(str[4]);

// Задача 2
// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
let str = 'abcde';
let str1 = `${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`
console.log(str1);

// Задача 3
// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.
let str = 'abcde';
let num = 4;
alert(str[num]);

// Задача 4
// Дана строка. Выведите на экран ее последний символ.
let str = 'hello';
alert(str[str.length - 1]);

// Задача 5
// Дана строка. Выведите на экран ее предпоследний символ.
let str = 'hello';
alert(str[str.length - 2]);

// Задача 6
// Дана строка. Выведите на экран ее предпредпоследний символ.
let str = 'hello';
alert(str[str.length - 3]);

// Задача 7
// Дана строка '12345'. Найдите сумму цифр этой строки.
let str = '135';
let sum = (Number(str[0]) + Number(str[1]) + Number(str[2]));
console.log(sum);

// Задача 8
// Дано число 12345. Найдите сумму цифр этого числа.
let num = 12345;
let str = String(num);
let sum = (Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));
console.log(sum);

// Задача 9
// Дано число 12345. Найдите произведение цифр этого числа.
let num = 12345;
let str = String(num);
let sum = (str[0] * str[1] * str[2] * str[3] * str[4]);
console.log(sum);

// Задача 10
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.
let num = 12345;
let str = String(num);
let num1 = Number(`${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`)
console.log(num1);
