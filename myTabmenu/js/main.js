'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault(); //a要素の画面遷移というデフォルトの機能をキャンセル

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      //一旦全ての項目からactiveクラスを削除する。

      clickedItem.classList.add('active');
      //選択した項目にactiveクラスをつける。
      //以上の動作より、activeクラスがつけかわる。

      contents.forEach(content => {
        content.classList.remove('active');
      });

      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}