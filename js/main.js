'use strict'; //エラーをチェックするためのもの

// console.log('Hello World from main.js!'); //大文字になったりするとエラーがでる。
// console.log('hel\nlo wor\tld');
// console.log((2 + 10) * 3);

//定数 const なるべくこっち！
//変数 let  varもあるが、古い
//データ型を判断する　typeof console.log(typeof ●●);

// console.log (parseInt('5', 10) + 3); 5を10進数の数値に変換する parseInt

//条件式 ? trueの処理 : falseの処理; 短いが読みにくい場合も…

// const score = 60;

// if (score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...');

// const name = 'taguchi';

// if (score >= 50) {
//   if (name === 'taguchi') {
//       console.log('Good job!');
//   }
// }

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job');
// }

// === ばかりならぶ場合は switch文を使う。

// const signal = 'pink';

// switch (signal) {
//   case 'red': //caseの値がredに等しい場合は…
//     console.log('Stop!');
//     break; //breakまでの処理をする。
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default: //どれにも当てはまらない場合。
//     console.log('No signal');
// }


//ループ処理

// for (let i = 1; i <= 10; i++) { //iに1を入れて、iが10以下の場合、1ずつ増える
//   console.log('hello');
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);

// for (let i = 1; i <= 10; i++) {
//   // if (i === 4) {
//   //   if (i % 3 === 0) {
//   //   continue;
//   // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// function showAd(message = 'Ad') { //仮引数
//   console.log ('--------------');
//   console.log (`----${message}------`);
//   console.log ('--------------');
// }

// showAd('Header Ad'); //実引数
// console.log('Tom is great!')
// // showAd('Ad');
// showAd();
// console.log('Arisa is great!')
// showAd('Footer Ad');

// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c; //returnの後ろは処理が実行されない
// }

// // sum(1, 2, 3);
// // sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

//関数式
// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const sum = (a, b, c) => a + b + c;


// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

//アロー関数
// const double = function(a) {
//   return a * 2;
// };

// const double = a => a * 2;

// console.log(double(12));


{
  
  const x = 100;
  console.log(x);
}