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
	// 	if($(this).hasClass('locked')){
	// 		$(this).removeClass('locked');
	// 		$(this).addClass('unlocked');
	// 		$("#leftPanel").removeClass('lock-panel');
	// 	}else{
	// 		$(this).removeClass('unlocked');
	// 		$(this).addClass('locked');
	// 		$("#leftPanel").addClass('lock-panel');
	// 	}
	// });

	// $("#cardNumList li").click(function(){
	// 	var amt = $(this).find(".card-amt").text();
	// 	$("#numOptionsItemSelected").find(".card-amt").text(amt);
	// 	var answers = $("#answerOptions");
	// 	$("#answerOptions").empty();
	// 	for(var i = 0; i < amt; i++){
	// 		$("#answerOptions").append("<li class='card-in'><h1>TESTER</h1></li>");
	// 	}
	// });

	$("#modeSubmenu li").click(function(){
		var val = $(this).find("h2").text();
		if(val == "Matching"){
			$("#matchMode").css("display", "block");
			$("#matchingSelWrapper").css("display", "block");
			$("#matchingOptionsSubmenu").css("display", "block");

			$("#standardMode").css("display", "none");
			$("#numSelWrapper").css("display", "none");
			$("#numOptionsSubmenu").css("display", "none");
		}
		if(val == "Standard"){
			$("#standardMode").css("display", "block");
			$("#numSelWrapper").css("display", "block");
			$("#numOptionsSubmenu").css("display", "block");

			$("#matchMode").css("display", "none");
			$("#matchingSelWrapper").css("display", "none");
			$("#matchingOptionsSubmenu").css("display", "none");
		}
		$("#currentMode").text(val);
	});

	$("#numOfCardsList li").click(function(){
		var amt = $(this).attr('val');
		var numSel = $("#numSelWrapper");
		$(numSel).empty();
		$('#answerOptions').empty();
		var str = "";
		for(var i=0; i<amt; i++){
			$("#answerOptions").append("<li class='card-in'><h1>TESTER</h1></li>");
			str += "<i class='fa fa-square-o'></i>";
		}
		$(numSel).append(str);
	});

	$("#matchingOptionsList li").click(function(){
		var amt = $(this).attr('val');
		var match = $("#matchMode");
		$(match).empty();
		for(var i=0; i<amt; i++){
			var str ="<div class='row'>";

			for(var n=0; n<amt; n++){
				str+=(	"<div class='col"+(n+1)+" col'>" +
					"	<div class='match-option'>Man</div>" +
					"</div>");
			}

			str+="</div>";

			$(match).append(str);

		}
	});

});