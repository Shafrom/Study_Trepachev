// Задача 1
// Найдите произведение целых чисел от 1 до 20.

let result = 1;

for (i = 1; i <= 20; i++) {
  result = result * i;
  //console.log(result);
}

console.log(result);

// Задача 2
// Найдите сумму четных чисел от 2 до 100.

let result = 0;

for (i = 2; i <= 100; i++) {
  if (i % 2 === 0) result = result + i;
}

console.log(result);

// Задача 3
// Найдите сумму нечетных чисел от 1 до 99.

let result = 0;

for (i = 1; i <= 99; i++) {
  if (i % 2 === 0) continue;
  result = result + i;
  //console.log(result);
  //console.log(String(i));
}

console.log(result);
