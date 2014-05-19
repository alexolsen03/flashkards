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

	$("#modeSubmenu li").click(function(){
		var val = $(this).find("h4").text();
		if(val == "Matching"){
			$("#matchMode").css("display", "block");
			$("#matchingSelWrapper").css("display", "block");
			$("#matchingSelList").css("display", "inline-block");
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
			$("#matchingSelList").css("display", "none");
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
			$("#answerOptions").append("<li class='secondary-card card-in'><h4>TESTER</h4></li>");
			str += "<i class='fa fa-square-o'></i>";
		}
		$(numSel).append(str);
	});

	$("#matchingOptionsList li").click(function(){
		var amt = $(this).attr('val');
		var txt = $(this).find('h4').text();
		var match = $("#matchMode");
		$(match).empty();
		for(var i=0; i<amt; i++){
			var str ="<div class='row'>";

			for(var n=0; n<amt; n++){
				str+=(	"<div class='col"+(n+1)+" col'>" +
					"	<div class='secondary-card match-option'>Man</div>" +
					"</div>");
			}

			str+="</div>";

			$(match).append(str);

		}
		$("#currentMatchNum").text(txt);

	});

	$("#addSaveContainer i").click(function(){
		if($("#addSaveContainer").hasClass("add-mode")){
			addCard();
		}else{
			saveCard();
		}
	});

	$('textarea').keypress(function (e) {
	  if (e.which == 13) {
	    if($("#addSaveContainer").hasClass("add-mode")){
			addCard();
		}else{
			saveCard();
		}
	  }
	});

	addEditCardListener();
	// $(".disabled-secondary-card").click(function(){
	// 	var fText = $(this).attr('fronttext');
	// 	var bText = $(this).attr('backtext');

	// 	$(this).addClass('activeCard');

	// 	console.log('text is: ' + fText + ' ' + bText);

	// 	$("#frontText").val(fText);
	// 	$("#backText").val(bText);

	// 	$("#addSaveContainer").removeClass("add-mode").addClass("save-mode");
	// });

});

function addCard(){
	var frontText = $("#frontText").val();
	var backText = $("#backText").val();

	$("#frontText").val('');
	$("#backText").val('');

	var str = "<li>" +
					"<div class='disabled-secondary-card' fronttext='" + frontText +"' backtext='" + backText +"'>" +
						"<h4>" + frontText + "</h4>" +
						"<i class='fa fa-edit'></i>" +
					"</div>" +
				"</li>" +
				"<div class='clearme'></div>";
	$("#stackCardList").children().last().remove();
	$("#stackCardList").append(str);

	addEditCardListener();
	
	$("#frontText").focus();
}

function saveCard(){
	var frontText = $("#frontText").val();
	var backText = $("#backText").val();

	$('.activeCard').attr('fronttext', frontText);
	$('.activeCard').attr('backtext', backText);

	$('.activeCard').find('h4').text(frontText);

	$('.activeCard').removeClass('activeCard');

	$("#addSaveContainer").removeClass("save-mode").addClass("add-mode");

	$("#frontText").val('');
	$("#backText").val('');

	$("#frontText").focus();
}

function addEditCardListener(){
	$(".disabled-secondary-card").click(function(){
		var fText = $(this).attr('fronttext');
		var bText = $(this).attr('backtext');

		$('.activeCard').removeClass('activeCard');
		$(this).addClass('activeCard');

		console.log('text is: ' + fText + ' ' + bText);

		$("#frontText").val(fText);
		$("#backText").val(bText);

		$("#addSaveContainer").removeClass("add-mode").addClass("save-mode");
	});
}