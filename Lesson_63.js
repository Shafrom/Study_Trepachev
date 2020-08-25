// Задача 1
// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
	str += 'xx';
	arr.push(str);
}

console.log(arr);

// Задача 2
// С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

let arr = [];

for (let i = 1; i <= 5; i++) {
	let str = '';
	for (let j = 0; j < 5; j++) {
		str += i;
	}
	arr.push(str);
}

console.log(arr);
