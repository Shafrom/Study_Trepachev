// Задача 1
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = +prompt('Введите числовое значение месяца');

if (month >= 3 && month <= 5) {
  console.log('Весна');
} else if (month >= 6 && month<= 8) {
  console.log('Лето');
} else if (month >= 9 && month<= 11) {
  console.log('Осень');
} else console.log('Зима');

// Задача 2
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let string = 'abcde';

if (string[0] === 'a') console.log('Да');
  else console.log('Нет');

// Задача 3
// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 12345;
let numtoString = String(num);

if (numtoString[0] === '1' || numtoString[0] === '2' || numtoString[0] === '3') {
  console.log('Да');
} else console.log('Нет');

// Задача 4
// Дано трехзначное число. Найдите сумму цифр этого числа.



// Задача 5
// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 108108;
let sum1 = +(String(num)[0]) + +(String(num)[1]) + +(String(num)[2]);
let sum2 = +(String(num)[3]) + +(String(num)[4]) + +(String(num)[5]);

if (sum1 === sum2) console.log('Да');
  else console.log('Нет');
