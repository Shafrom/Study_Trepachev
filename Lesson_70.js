// Задача 1
// Дан следующий объект с названиями месяцев:

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
// Даны также следующие переменные:

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5; // число от 0 до 12
// Выведите на экран название месяца, соответствующее значениям переменных lang и month.

console.log(months[lang][month]);

// Задача 2
// Дана вот такая структура для хранения списка дел за года, месяцы и дни:

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
// Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.

let year = '2019';
let month = 12;
let date = 30;
let affair = 1;

console.log(affairs[year][month][date][affair];)

// Задача 3
// Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

// Задача 4
// Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

// Задача 5
// Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

// Задача 6
// Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.