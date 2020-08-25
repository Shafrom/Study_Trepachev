// Задача 1
// Дан двухмерный массив с числами:
let arr = [[1, 2, 3], [4, 5], [6]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

let sum = 0;

for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}

console.log(sum);

// Задача 2
// Дан трехмерный массив с числами:
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

let sum = 0;

for (let subSubArr of arr) {
  for (let subArr of subSubArr) {
    for (let elem of subArr) {
      sum += elem;
    }
  }
}

console.log(sum);

// Задача 3
// Решите предыдущие две задачи через цикл for.

let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < arr[i].length; k++) {
    sum += arr[i][k];
  }
}

console.log(sum);

// ----------------------------------------------

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < arr[i].length; k++) {
    for (let j = 0; j < arr[i][k].length; j++) {
      sum += arr[i][k][j];
    }
  }
}

console.log(sum);
