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

const scores = [80, 90, 40, 70];
// scores.push(60, 50); //push（）の中が末尾に追加。
// scores.shift(); //先頭から要素が削除

scores.splice(1, 1, 40, 50);

  for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i}: ${scores[i]}`);
}
}