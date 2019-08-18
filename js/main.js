
$(function() {
	var $win = $(window),
		$header = $('header'),
		headerHeight = $header.outerHeight(),
		startPos = 0;
  
	$win.on('load scroll', function() {
var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
	var value = $(this).scrollTop();
	if ( value > startPos && value > headerHeight ) {
	  $header.css('top', '-' + headerHeight + 'px');
	} else {
	  $header.css('top', '0');
	}
	startPos = value;
} else {
	window.addEventListener( "scroll", function() {

		var headerElement = document.getElementById( "header" ) ; // `#header`セレクタを取得
		var rect = headerElement.getBoundingClientRect() ; // 
		var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
		if (y > 720) { // 変数yの値が0よりも
		headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
		} else {
		headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
		}
	  } ) ;
}
});
});;


//トグルボタンが押されたときに、クラスを付与
$(function() {
	$('.Toggle').click(function() {
		$(this).toggleClass('fixed active');
		if ($(this).hasClass('active')) {
			$('.NavMenu').addClass('active');　 //クラスを付与
		} else {
			$('.NavMenu').removeClass('active'); //クラスを外す
		}
	});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
var slideContsRect = []; // 要素の位置を入れるための配列
var slideContsTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 0; // ちょっとはみ出させる部分
// 要素の位置を取得
for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  for (var i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > slideContsTop[i] - windowH + remainder + 200) {
      // .showを付与
      slideConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      slideConts[i].classList.remove('show');
    }
	}
});

$(function() {
	var TopBtn = $('#PageTopBtn');
	var OldPos = 0;
	TopBtn.hide();
	
	$(window).scroll(function() {
		var CurrentPos = $(this).scrollTop(); //現在の位置を取得
		
		//現在の位置が前回の位置より小さい、かつ位置が300より大きい
		if (CurrentPos < OldPos && $(this).scrollTop() > 300) {
			TopBtn.slideDown();
		}
		else {
			TopBtn.slideUp();
		}
		
		OldPos = CurrentPos; //現在の位置を前回値として代入
    });
    //ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});