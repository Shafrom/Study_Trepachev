// Задача 1
// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

let str = '';

for (let i = 0; i <= 5; i++) {
	str += 'xx';
	document.write(str + '<br>');
}

// Задача 2
// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999

for (let i = 1; i <= 9; i += 2) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}

	document.write('<br>');
}

// Задача 3
// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

for (let i = 5; i >= 1; i--) {
	let str = '';

	for (let j = 0; j < i; j++) {
		str += 'xx';
	}

	document.write(str + '<br>');
}


// Задача 4
// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

for (let i = 9; i >= 1; i--) {
  document.write(i);
	for (let j = 1; j < i; j++) {
		document.write(i);
	}
	document.write('<br>');
}
