'use strict'; //エラーをチェックするためのもの

{
  // const scores = [80, 90, 40]; //複数の値を渡したい場合は配列を代入
  // console.log(scores[1]);

  // scores[2] = 44; //要素の値の変更 配列の要素への代入はconstでもできる！
  // console.log(scores);

  // console.log(scores.length); //length要素の個数

//   console.log(`Score: ${scores[0]}`);
//   console.log(`Score: ${scores[1]}`);
//   console.log(`Score: ${scores[2]}`);

// for (let i = 0; i < 3; i++) {

// const scores = [80, 90, 40, 70];
// scores.push(60, 50); //push（）の中が末尾に追加。
// scores.shift(); //先頭から要素が削除

// scores.splice(1, 1, 40, 50); //(変化が始まる位置, 削除する要素（個数）,　追加したい要素)のようにかく。

//   for (let i = 0; i < scores.length; i++) {
//   console.log(`Score ${i}: ${scores[i]}`);
// }

//スプレッド構文 ... 配列の中身がそのまま展開される。
// const otherScores = [10, 20];
// const scores = [80, 90, 40, 70, ...otherScores];
// // console.log(scores);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(...otherScores);


//分割代入　配列の中身を個々の定数に割り当てる。

// const scores = [80, 90, 40, 70];

// const [a, b, c, d] = scores;
// console.log(a); 80
// console.log(b); 90
// console.log(c); 40
// console.log(d); 70

// ...はレスト構文　分割代入と一緒に使うと...の後の言葉に配列の残りの要素を格納してくれる。
// const [a, b, ...others] = scores;

// console.log(a);
// console.log(b);
// console.log(others);

// //値の交換もできる。
// let x = 30;
// let y = 70;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);

// //forEach文
// const scores = [80, 90, 40, 70];

// // scores.forEach((score) => {
// scores.forEach((score, index) => {
//   console.log(`Score ${index}: ${score}`);
// });

//配列に何らかの処理をして、それを配列として取得する
// const prices = [180, 190, 200];

// // const updatePrices = prices.map((price) => {
// //   return price + 20;
// // });
// const updatePrices = prices.map(price => price + 20);
// console.log(updatePrices);

//配列の要素をチェックして条件にあうものだけ抽出→別の配列 filter

// const numbers = [1, 4, 7, 8, 10];

// const evenNumbers = numbers.filter(number => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

//オブジェクト

// const point = [100, 180];

// const point = {x: 100, y: 180};
// const point = {
//   x: 100,
//   y: 180,
// };

// point.x = 120;
// // point['x'] = 120;

// // console.log(point.x);
// // console.log(point['y']);

// point.z = 90;
// delete point.y;

// console.log(point);

const otherProps = {
  r: 4,
  color: 'red',
}

const point = {
  x: 100,
  y: 180,
  ...otherProps,
};

// console.log(point);

const {x, r, ...others} = point;
console.log(x);
console.log(r);
console.log(others);

}