// Задача 1
// Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
// Выведите на экран данные каждого работника в формате имя - зарплата.

for (let user of employees) {
  console.log(`${user.name} - ${user.salary}`);
}

// Задача 2
// Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
// Выведите на экран сумму зарплат всех работников.

let sum = 0;

for (let user of employees) {
  sum += user.salary;
}

console.log(sum);

// Задача 3
// Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

let sum = 0;

for (let user of employees) {
  if (user.age >= 30) {
    sum += user.salary;
  }
}

console.log(sum);

// Задача 4
// Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):

let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
// Выведите на экран имена и зарплаты неуволенных работников.

for (let user of employees) {
  if (!user.dismissed) {
    console.log(`${user.name} : ${user.salary}`)
  }
}

// Задача 5
// Дана следующая структура с данными:

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};
// С помощью вложенных циклов выведите на экран все строки с данными.

for (let key in data) {
  for (let elem of data[key]) {
    console.log(elem);
  }
}

// Задача 6
// Дана следующая структура с данными:

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
// Количество объектов в массиве и количество элементов в объекте может быть произвольным.
// С помощью вложенных циклов выведите на экран все строки с данными.

for (let elem of data) {
  for (let key in elem) {
    console.log(key);
  }
}

// Задача 7
// Дана следующая структура с данными:

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];
// С помощью вложенных циклов выведите на экран все строки с данными.

for (let elem of data) {
  for (let key in elem) {
    for (let subElem of key) {
      console.log(key);
    }
  }
}
