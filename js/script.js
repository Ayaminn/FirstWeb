/* -----------------------------------------
Project Name : script
Date:
Version: 01
Description: JavaScript
Design:
----------------------------------------- */


$(document).ready(function() {

	$(window).on('touchmove.noScroll', function(e) {
    	e.preventDefault();
	});

	// console.log("aiueo");
	/*1000で1秒　ここアニメーション　$("要素").やること*/
	// $("#ayamin").animate({"margin-top" :200}, 1000);
	// $("#ayamin").click(function(){
	// 	console.log("おした！");
	// 	$(this).animate({"margin-top" :200}, 1000);
	// });

	var w = $(window).width();
	var h = $(window).height();
	var t = 0;

	$("#ayamin").width(w);
	$("#ayamin").height(h);
	
	var test = 0;

	var startPosY = 0;
	var endPosY = 0;

	var distY = 0;

	// $('#ayamin').bind('touchstart', function() {
	//     event.preventDefault();                     // ページが動いたり、反応を止める（A タグなど）
	//     $(this).text(test);
	//     test ++;
	//     // this.pageX = event.changedTouches[0].pageX; // X 座標の位置
	//     // this.pageY = event.changedTouches[0].pageY; // Y 座標の位置
	// });

	$("body").bind('touchstart', function() {
		t = 1;
		startPosY = event.changedTouches[0].pageY;
		// $("#ayamin").text(t);
	});
	$('body').bind('touchmove', function() {
		// $("#ayamin").text(this.pageX);
		// this.pageX = event.changedTouches[0].pageX;
		// this.pageY = event.changedTouches[0].pageY;
	});
	$('body').bind('touchend', function() {
		// $("#ayamin").text(0);
		t = 0;
		// $("#ayamin").text(distY);
		endPosY = event.changedTouches[0].pageY;

		distY = startPosY - endPosY;

		if(distY > 800){
			$("#ayamin").text("フリックした");
		}else{
			$("#ayamin").text("フリックしてない");
		}


	});
});