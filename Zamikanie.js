

function test() {
  let eee = 3;
  let bbb = 4;

  return function(num) {
    eee = eee + num;
    alert(eee)
  }
}

let zzz1 = test();
zzz1(1);

let zzz2 = test();
zzz2(2);

let str = 'window';
let str = "window";
let str = `window`;

let name = "Alexey"
alert(`Привет ${name}`);

let name = "Alexey"
Alert("Привет + " "+ "name");
