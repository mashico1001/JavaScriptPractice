'use strict'; //エラーをチェックするためのもの

{
  //h1のテキストの内容を変える。querySelector id属性のときは getElementById
  // function update() {
  //   // document.querySelector('h1').textContent = 'Changed!';
  //   // document.querySelector('#target').textContent = 'Changed!';
  //   document.getElementById('target').textContent = 'Changed!';
  // }

  // setTimeout(update, 1000);

  //p要素も変更する。querySelectorはその要素の最初のものを変更する。
  // querySelectorAllとすると全ての要素を選択できる。

  // function update() {
  //   // document.querySelector('p').textContent = 'Changed!';
  //   // document.querySelectorAll('p')[1].textContent = 'Changed!';
  //   document.querySelectorAll('p').forEach((p, index) => {
  //     p.textContent = `${index}番目のpです！`;
  //   });
  // }

  // setTimeout(update, 1000);

  //ボタンを押したら文字がかわる（イベント）

  // document.querySelector('button').addEventListener('click', () => {
  //   document.getElementById('target').textContent = 'Changed!';
  // });
  
  // //属性を変更
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
    
  //   targetNode.textContent = 'Changed!';
  //   targetNode.title = 'This is title!';
  //   targetNode.style.color = 'red';
  //   targetNode.style.backgroundColor = 'skyblue';
  // });

  //スタイルの変更
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

  //   // targetNode.className = 'my-color';
  //   targetNode.className = 'my-color my-border'; //クラスが丸々入れ替わるので元のクラスを保持したい場合には、どちらも書かないといけない。
  // });
  //classList
  //addでクラスをつける、removeで外す。
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

  //   // targetNode.classList.add('my-color');
  //   if (targetNode.classList.contains('my-color') === true) {
  //     targetNode.classList.remove('my-color');
  //   } else {
  //     targetNode.classList.add('my-color'); 
  //   }
  // targetNode.classList.toggle('my-color');
  // });

  //HTMLのカスタムデータ属性をつかう。
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');

  //   // targetNode.textContent = 'Dotinstall';
  //   targetNode.textContent = targetNode.dataset.translation;
  // });

  //要素を追加 createElement appendChild
  // document.querySelector('button').addEventListener('click', () => {
  //   const item2 = document.createElement('li');
  //   item2.textContent = 'item 2';

  //   const ul = document.querySelector('ul');
  //   ul.appendChild(item2);
  // });

  //要素を複製→DOMに追加
  // document.querySelector('button').addEventListener('click', () => {
  //   const item0 = document.querySelectorAll('li')[0];
  //   const copy = item0.cloneNode(true);

  //   const ul = document.querySelector('ul');
  //   const item2 = document.querySelectorAll('li')[2];
  //   ul.insertBefore(copy, item2);
  // });
  
  //要素を削除
  // document.querySelector('button').addEventListener('click', () => {
  //   const item1 = document.querySelectorAll('li')[1];

  //   // item1.remove(); //一部のブラウザでは使えない。
  //   //親Node.removeChild（削除するNode）
  //   document.querySelector('ul').removeChild(item1);
  // });
  
  //ユーザーが入力した名前で要素を追加。
  // document.querySelector('button').addEventListener('click', () => {
  //   const li = document.createElement('li');
  //   const text = document.querySelector('input');
  //   li.textContent = text.value;
  //   document.querySelector('ul').appendChild(li);

  //   text.value = ''; //値をリセット
  //   text.focus();　//フォーカスする。
  // });

  // //セレクトボックスで操作
  // document.querySelector('button').addEventListener('click', () => {
  //   const li = document.createElement('li');
  //   const color = document.querySelector('select');
  //   li.textContent = `${color.value} - ${color.selectedIndex}`;
  //   document.querySelector('ul').appendChild(li);
  // });

  // //ラジオボタン
  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   let selectedColor;

  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //     }
  //   });

  //   const li = document.createElement('li');
  //   li.textContent = selectedColor;
  //   document.querySelector('ul').appendChild(li);
  // });
  
  //チェックボックス
  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   const selectedColors = [];

  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColors.push(color.value);
  //     }
  //   });

  //   const li = document.createElement('li');
  //   // li.textContent = selectedColors.join(',');
  //   li.textContent = selectedColors; //文字列で受け取るときは勝手にカンマつく
  //   document.querySelector('ul').appendChild(li);
  // });

  //いろんなイベント
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log('Double Clicked!!');
  // });

  // document.addEventListener('mousemove', () => {
  //   console.log('moved!');
  // });

  //マウスの座標
  // document.querySelector('button').addEventListener('dblclick', () => {
  //   console.log('Double Clicked!!');
  // });

  // // document.addEventListener('mousemove', e => {
  // //   // console.log('moved!');
  // //   console.log(e.clientX, e.clientY);
  // // });

  // document.addEventListener('keydown', e => {
  //   console.log(e.key);
  // });

  //他のイベント
  // const text = document.querySelector('textarea');

  // // text.addEventListener('focus', () => {
  // //   console.log('focus');
  // // });

  // // text.addEventListener('blur', () => {
  // //   console.log('blur');
  // // });

  // text.addEventListener('input', () => {
  //   console.log(text.value.length);
  // });

  // text.addEventListener('change', () => {
  //   console.log('change');
  // });

  //フォームの送信
  // document.querySelector('form').addEventListener('submit', e => {
  //   e.preventDefault();
  //   console.log('submit');
  // });

  //Todoリストなど打消し線をつけたりけしたり
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });


}
