// Задача
// Пусть дан следующий массив:
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
// Выведите с помощью этого массива название текущего месяца.

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date = new Date();
let month = date.getMonth();

console.log(months[month]);

// Задача
// Узнайте, какой день недели был в ваш день рождения.

let date = new Date(1973, 9, 25);
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);

// Задача
// Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

let date = new Date(2025, 0, 1);
console.log(date.getTime());

// Задача
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);

console.log(diff);

// Задача
// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

let date = new Date();
let birthDate = new Date(1973, 9, 25);
let diffDays = ((date.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)).toFixed();

console.log(diffDays);

// Задача
// Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diffDate = date2 - date1;

console.log(diffDate);

// Задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diffDate = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(diffDate);

// Задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diffDate = Math.round((date2 - date1) / (1000 * 60 * 60 * 24 * 30));

console.log(diffDate);

// Задача
// Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.

let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);
let diffDate = Math.round((date2 - date1) / (1000 * 60 * 60 * 24 * 365));

console.log(diffDate);

// Задача
// Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

function isLeap(year) {
  let date = new Date(year, 2, 0);
  return date.getDate() === 29;
}

console.log(isLeap(2020));

// Вариант записи через стрелочную функцию:

const isLeap = year => {
  let date = new Date(year, 2, 0);
  return date.getDate() === 29;
}

console.log(isLeap(2020));

// Задача
// Определите, какой день недели будет 31 декабря текущего года.

let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);

console.log(date.getDay());

// Задача
// Определите, какой день недели будет 1 числа текущего месяца.

let now = new Date();
let weekDay = new Date(now.getFullYear(), now.getMonth(), 1);

console.log(weekDay.getDay());

// Задача
// Определите, какой день недели будет через год в такую же дату, как сегодня.

let now = new Date();
let weekDay = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

console.log(weekDay.getDay());

// Задача
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

let now = new Date();
let someTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let diff = Math.round((now - someTime) / (1000 * 60));

console.log(diff);

// Задача
// Определите, сколько секунд прошло с начала дня до настоящего момента времени.

let date = new Date();
let someTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
let diff = Math.round((date - someTime) / 1000);

console.log(diff);

// Задача
// Определите, сколько секунд секунд осталось до конца дня.

let date = new Date();
let someTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let diff = Math.round((someTime - date) / 1000);

console.log(diff);

// Задача
// Определите, сколько дней осталось до нового года.

let now = new Date();
let someTime = new Date(now.getFullYear(), 11, 31);
let diff = Math.round((someTime - now) / (1000 * 60 * 60 * 24));

console.log(diff);

// Задача
// Определите, сколько пятниц 13-е в текущем году.

const fridayThe13th = year => {
  let month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let date;
  let friday13 = 0;
  for (let num of month) {
    date = new Date(year, num, 13);
    console.log(date);
    if (date.getDay() === 5) friday13++;
  }
  return friday13;
}

fridayThe13th(2020);

// Еще вариант:

const fridayThe13th = year => {
  let date;
  let friday13 = 0;
  for (let num = 0; num < 11; num++) {
    date = new Date(year, num, 13);
    if (date.getDay() === 5) friday13++;
  }
  return friday13;
}

fridayThe13th(2020);

// Задача
// Определите, какой год был 3 месяца назад.

const whichYear = monthAgo => {
  let now = new Date();
  let countDate = new Date(now.getFullYear(), now.getMonth() - monthAgo);
  let result = countDate.getFullYear();
  return result;
}

console.log(whichYear(10));

// Задача
// Определите, какой день недели будет в последнем дне текущего месяца.

const whichWeekDay = () => {
  let now = new Date();
  let daysInMonth = 32 - new Date(now.getFullYear(), now.getMonth(), 32).getDate();
  let weekDay = new Date(now.getFullYear(), now.getMonth(), daysInMonth).getDay();
  return weekDay;
}

console.log(whichWeekDay());

// Задача
// Определите, сколько дней осталось до конца месяца года.



// Задача
// Напишите код, который будет определять, високосный ли текущий год.

// Задача
// Напишите код, который будет находить предыдущий високосный год.

// Задача
// Напишите код, который будет находить следующий високосный год.
