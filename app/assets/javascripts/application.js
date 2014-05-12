// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

	// $("#unlockIcon").click(function(){
	// 	$("#unlockIcon").toggleClass(function(){
	// 		if($(this).hasClass("locked")){
	// 			$(this).removeClass("locked");
	// 			$(this).addClass("unlocked");
	// 		}else{
	// 			$(this).addClass("locked");
	// 			$(this).removeClass("unlocked");
	// 		}
	// 	});
	// });
	$("#unlockIcon").click(function(){
		if($(this).hasClass('locked')){
			$(this).removeClass('locked');
			$(this).addClass('unlocked');
			$("#leftPanel").removeClass('lock-panel');
		}else{
			$(this).removeClass('unlocked');
			$(this).addClass('locked');
			$("#leftPanel").addClass('lock-panel');
		}
	});

	// $("#cardNumList").hover(function(){
	// 	if(!$(this).hasClass("hover-in")){
	// 		$(this).removeClass("hover-out").addClass("hover-in");
	// 	}
	// },function(){
	// 	if(!$(this).hasClass("hover-out")){

	// 		$(this).removeClass("hover-in").addClass("hover-out");
	// 	}
	// });

	$("#cardNumList li").click(function(){
		var amt = $(this).find(".card-amt").text();
		$("#numOptionsItemSelected").find(".card-amt").text(amt);
		var answers = $("#answerOptions");
		$("#answerOptions").empty();
		for(var i = 0; i < amt; i++){
			$("#answerOptions").append("<li class='card-in'><h1>TESTER</h1></li>");
		}
	});

});