// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10.

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

// Задача 2
// Объявите пустой массив, а затем заполните его 5-ю буквами x.

let arr = [];

arr[0] = 'x';
arr[1] = 'x';
arr[2] = 'x';
arr[3] = 'x';
arr[4] = 'x';

console.log(arr);

// Задача 3
// С помощью цикла заполните массив числами от 1 до 100.

let arr = [];

for (let i = 0; i < 100; i++) {
  arr[i] = i + 1;
}

console.log(arr);

// Задача 4
// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr = [];

for (let i = 1, j = 0; i <= 99; i += 2, j++) {
	arr[j] = i;
}

console.log(arr);