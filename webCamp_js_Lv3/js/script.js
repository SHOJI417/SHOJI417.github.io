$('.box1').css('background-color','yellow');


$('.button').on('click',function(){
     $('.box').slideToggle();
});


// $('.box2').hover(function(){
//     $('p').fadeToggle();
// });

// ■メモ
// 実は上記のコードだけだと、マウスオーバーした回数分だけずっと要素が
// フェードイン、フェードアウトを繰り返してしまいます。
// このような動作を解除するには、以下のようにstopメソッドを使用します。

$('.box2').hover(function(){
    $('p').stop().fadeToggle();
});

// ■メモ
// fadeToggleの前にstopメソッドを追加すると、上記の問題を解決出来ます。
// また、このようにメソッドを連結させる事を「メソッドチェーン」と言いますので、覚えておきましょう。
// *コードの終わりではないので、stopメソッドにはセミコロンをつけない事。


// ■【Contents7】

// $('.box3').hover(function(){
//     $('p').stop().fadeToggle();
// });

// ↑マウスオーバーすると全てに動きが付いてしまうので、
// jsのコードを↓以下のように書き換える！

$('.box3').hover(function(){
    $(this).children('p').stop().fadeToggle();
});

// wow.jsを起動するコード
new WOW().init();

