// Задача
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for(let elem of arr) {
  if (elem === 'c') {
    flag = true;
    break;
  }
}

if (flag === true) console.log('Да');
  else console.log('Нет');

// Задача определения числа на простое или составное

let num = 31;

let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break; // выйдем из цикла
	}
}

console.log(flag);
