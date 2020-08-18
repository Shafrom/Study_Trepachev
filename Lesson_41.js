// Задача 1
// Дан объект следующий объект:
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// С помощью цикла for-in найдите сумму элементов этого объекта.
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}

console.log(sum);
