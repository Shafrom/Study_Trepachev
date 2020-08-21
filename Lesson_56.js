// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i)
}

console.log(arr);

// Задача 2
// Используя цикл и метод push заполните массив числами от 1 до 10.

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i)
}

console.log(arr);

// Задача 3
// Используя цикл и метод push заполните массив 10-ю буквами x.

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push('x')
}

console.log(arr);

// Задача 4
// Используя цикл и метод push заполните массив 10-ю случайными целыми числами. Пусть случайные числа будут в промежутке от 1 до 10.

let arr = [];
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

for (let i = 1; i <= 10; i++) {
  arr.push(randomInteger(1, 10))
}

console.log(arr);

// Задача 5
// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

let arr = [1, -2, 3, -4, 5, 6, -7, 16];
let newArr = [];

for (let elem of arr) {
  if (elem >= 0) newArr.push(elem);
}

console.log(newArr);
