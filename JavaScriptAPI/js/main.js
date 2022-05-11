'use strict';

{
  // const target = document.querySelector('img');

  // function callback() {
  //   console.log('fired!');
  // } デフォルトの処理　0%のときに処理するようになっている。

  // const observer = new IntersectionObserver(callback); 交差したときの処理をかくために関数を渡す。callback

  // observer.observe(target); //observeメソッドでobserverを監視。

  //任意のところで処理をする。
  // const target = document.querySelector('img');

  // function callback() {
  //   console.log('fired!');
  // }

  // const options = {
  //   threshold: [0.2, 0.8], オブジェクト形式でわたす。20％と80％のとき。
  // };

  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(target);
  
  //現在のターゲットに関する情報を見る。　entries
  // const target = document.querySelector('img');

  // function callback(entries) {
  //   console.log(entries[0]);
  // }

  // const options = {
  //   threshold: 0.2,
  // };

  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(target);

  //CSSでアニメーション
  // const target = document.querySelector('img');

  // function callback(entries) {
  //   console.log(entries[0]);

  //   if (!entries[0].isIntersecting) {
  //     return;
  //   }

  //   entries[0].target.classList.add('appear');

  //   // if (entries[0].isIntersecting) {
  //   //   entries[0].target.classList.add('appear');
  //   // } else {
  //   //   entries[0].target.classList.remove('appear');
  //   // }
  // }

  // const options = {
  //   threshold: 0.2,
  // };

  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(target);

  //rootMarginを設定する。
  // const target = document.querySelector('img');

  // function callback(entries) {
  //   console.log(entries[0]);

  //   if (!entries[0].isIntersecting) {
  //     return;
  //   }

  //   entries[0].target.classList.add('appear');

  // }

  // const options = {
  //   threshold: 1,
  //   rootMargin: '0px 0px -100px',
  // };

  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(target);

  //一回交差したら、targetの監視を止める方法‥ブラウザに余計な負荷をかけない。
  // const target = document.querySelector('img');

  // function callback(entries, obs) {
  //   console.log(entries[0]);

  //   if (!entries[0].isIntersecting) {
  //     return;
  //   }

  //   entries[0].target.classList.add('appear');
  //   obs.unobserve(entries[0].target);
  // }

  // const options = {
  //   threshold: 0.2,
  // };

  // const observer = new IntersectionObserver(callback, options);
  // observer.observe(target);

  //監視対象をふやす。
  const targets = document.querySelectorAll('img');

  function callback(entries, obs) {
    console.log(entries); //監視開始時点では全ての要素、targetが交差したときは交差したtargetだけが入ってくる。

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
    
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });


}