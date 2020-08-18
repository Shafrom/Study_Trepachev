// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let el of arr) {
  console.log(el);
}

// Задача 2
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let el of arr) {
  sum += el;
}

console.log(sum);

// Задача 3
// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

let arr = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

for (let elem of arr) {
  console.log(elem);
}

// Задача 4
// Пусть у вас есть массив с днями недели. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

//let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
let currentMonth = 10;

for (let i = 0; i < months.length; i++) {
  if (i + 1 === currentMonth) document.write('<i>' + months[i] + '</i>' + ' ');
    else document.write(months[i] + ' ');
}
