// Задача 1
// Дан следующий массив:
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

let counter = 0;

for (let elem of arr) {
  if (elem === 3) counter++;
}

console.log(counter);


// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter1 = 0;
let counter2 = 0;

for (let elem of arr) {
  if (elem === 3) counter1++;
  if (elem === 2) counter2++;
}

console.log(counter1, counter2);

// Задача 3

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {};

for (let elem of arr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else count[elem]++;
}

console.log(count);
