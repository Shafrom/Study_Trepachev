// Автоматическое преобразование типов данных в JavaScript

let a = "5" + "2";
alert(a); // '52'

let a = "5" + 2;
alert(a); // '52'

let a = 5 + "2";
alert(a); // '52'

let a = 5 + 2;
alert(a); // 7

let a = "5" * "2";
alert(a); // 10

let a = "5" - "2";
alert(a); // 3

let a = "5" / "2";
alert(a); // 2.5

let a = "5" % "2";
alert(a); // 1

let a = "5s" * "2";
alert(a); // NaN

let a = -"5" + -"2";
alert(a); // -7

let a = "5" * 1 + "2" * 1;
alert(a); // 7

let a = "5" * "1" + "2" * "1";
alert(a); // 7

let a = "" + 3 + 1;
alert(a); // 31
//
