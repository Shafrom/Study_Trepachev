// Задача 1
// С помощью цикла сформируйте строку, заполненную 5-тью нулями.

let str = '';

for (let i = 0; i < 5; i++) {
  str += 0;
}

console.log(str);

// Задача 2
// С помощью цикла сформируйте строку 123456789 и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';

for (let i = 1; i <= 9; i++) {
  str += i;
}

console.log(str);

// Задача 3
// С помощью цикла сформируйте строку 987654321 и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';

for (let i = 9; i >= 1; i--) {
  str += i;
}

console.log(str);

// Задача 4
// С помощью цикла сформируйте строку -1-2-3-4-5-6-7-8-9- и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '-';

for (let i = 1; i <= 9; i++) {
  str += i + '-';
}

console.log(str);
