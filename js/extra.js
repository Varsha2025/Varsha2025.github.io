// JavaScript Document
	function update1() {
		var tasks_time = $('.slider1').slider('value');
		var tskdone = $('#tskdone1').slider('value');

		$("#amount1").text(tasks_time);
	}
	$(".slider1" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update1();
			$("#amount1").text(ui.value+'');
			$("#InputValue1").val(ui.value+'');
		}
	});
	$("#InputValue1").val($(".slider1").slider("value")+ '  ');
	$("#amount1").text($(".slider1").slider("value")+ ' ');

    $("#InputValue1").change(function(){
        $(".slider1").slider("value", this.value)
    });



	function update2() {
		var tasks_timeB = $('.slider2').slider('value');
		var tskdoneB = $('#tskdone2').slider('value');

		$("#amount2").text(tasks_timeB);
	}
	$(".slider2" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update2();
			$("#amount2").text(ui.value);
			$("#InputValue2").val(ui.value);

		}
	});
	$("#InputValue2").val($(".slider2").slider("value"));
    $("#InputValue2").change(function(){
        $(".slider2").slider("value", this.value)
    });





	function update3() {
		var tasks_timeC = $('.slider3').slider('value');
		var tskdoneC = $('#tskdone3').slider('value');

		$("#amount3").text(tasks_timeC);
	}
	$(".slider3" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update3();
			$("#amount3").text(ui.value);
			$("#InputValue3").val(ui.value);
		}
	});
	$("#InputValue3").val($(".slider3").slider("value"));
    $("#InputValue3").change(function(){
        $(".slider3").slider("value", this.value)
    });



	function update4() {
		var tasks_timeD = $('.slider4').slider('value');
		var tskdoneD = $('#tskdone4').slider('value');

		$("#amount4").text(tasks_timeD);
	}
	$(".slider4" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update4();
			$("#amount4").text(ui.value);
			$("#InputValue4").val(ui.value);
		}
	});
	$("#InputValue4").val($(".slider4").slider("value"));
    $("#InputValue4").change(function(){
        $(".slider4").slider("value", this.value)
    });



	function update5() {
		var tasks_timeE = $('.slider5').slider('value');
		var tskdoneE = $('#tskdone5').slider('value');

		$("#amount5").text(tasks_timeE);
	}
	$(".slider5" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update5();
			$("#amount5").text(ui.value);
			$("#InputValue5").val(ui.value);
		}
	});
	$("#InputValue5").val($(".slider5").slider("value"));
    $("#InputValue5").change(function(){
        $(".slider5").slider("value", this.value)
    });



	function update6() {
		var tasks_timeE = $('.slider6').slider('value');
		var tskdoneE = $('#tskdone6').slider('value');

		$("#amount6").text(tasks_timeE);
	}
	$(".slider6" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update6();
			$("#amount6").text(ui.value);
			$("#InputValue6").val(ui.value);
		}
	});
	$("#InputValue6").val($(".slider6").slider("value"));
    $("#InputValue6").change(function(){
        $(".slider6").slider("value", this.value)
    });



	function update7() {
		var tasks_timeF = $('.slider7').slider('value');
		var tskdoneF = $('#tskdone7').slider('value');

		$("#amount7").text(tasks_timeF);
	}
	$(".slider7" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update7();
			$("#amount7").text(ui.value);
			$("#InputValue7").val(ui.value);
		}
	});
	$("#InputValue7").val($(".slider7").slider("value"));
    $("#InputValue7").change(function(){
        $(".slider7").slider("value", this.value)
    });



	function update8() {
		var tasks_timeG = $('.slider8').slider('value');
		var tskdoneG = $('#tskdone8').slider('value');

		$("#amount8").text(tasks_timeG);
	}
	$(".slider8" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update8();
			$("#amount8").text(ui.value);
			$("#InputValue8").val(ui.value);
		}
	});
	$("#InputValue8").val($(".slider8").slider("value"));
    $("#InputValue8").change(function(){
        $(".slider8").slider("value", this.value)
    });



	function update9() {
		var tasks_timeH = $('.slider9').slider('value');
		var tskdoneH = $('#tskdone9').slider('value');

		$("#amount9").text(tasks_timeH);
	}
	$(".slider9" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update9();
			$("#amount9").text(ui.value);
			$("#InputValue9").val(ui.value);
		}
	});
	$("#InputValue9").val($(".slider9").slider("value"));
    $("#InputValue9").change(function(){
        $(".slider9").slider("value", this.value)
    });


		function update10() {
		var tasks_timeJ = $('.slider10').slider('value');
		var tskdoneJ = $('#tskdone10').slider('value');

		$("#amount10").text(tasks_timeJ);
	}

	$(".slider10" ).slider({
		range: "min",
		value: 6,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update10();
			$("#amount10").text(ui.value+' Years');
			$("#InputValue10").val(ui.value+' Years');
		}
	});
	$("#InputValue10").val($(".slider10").slider("value")+' Years');
	$("#amount10").text($(".slider10").slider("value")+' Years');

    $("#InputValue10").change(function(){
        $(".slider10").slider("value", this.value)
    });




	function update11() {
		var tasks_timek = $('.slider11').slider('value');
		var tskdonek = $('#tskdone11').slider('value');

		$("#amount11").text(tasks_timek);
	}

	$(".slider11" ).slider({
		range: "min",
		value: 50,
		min: 0,
		max: 100,
		slide: function(event, ui) {
			//update11();
			$("#amount11").text(ui.value+' %');
			$("#InputValue11").val(ui.value+' %');
		}
	});
	$("#InputValue11").val($(".slider11").slider("value")+' %');
	$("#amount11").text($(".slider11").slider("value")+' %');

    $("#InputValue11").change(function(){
        $(".slider11").slider("value", this.value)
    });




//############################################################//

	function update12() {
		var tasks_timeL = $('.slider12').slider('value');
		var tskdoneL = $('#tskdone12').slider('value');

		$("#amount12").text(tasks_timeL);
	}

	$(".slider12" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update12();
			$("#amount12").text(ui.value+' Years, Months');
			$("#InputValue12").val(ui.value+' Years, Months');
		}
	});
	$("#InputValue12").val($(".slider12").slider("value")+' Years, Months');
	$("#amount12").text($(".slider12").slider("value")+' Years, Months');

    $("#InputValue12").change(function(){
        $(".slider12").slider("value", this.value)
    });



//############################################################//

	function update13() {
		var tasks_timeM = $('.slider13').slider('value');
		var tskdoneM = $('#tskdone13').slider('value');

		$("#amount13").text(tasks_timeM);
	}

	$(".slider13" ).slider({
		range: "min",
		value: 3000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update13();
			$("#amount13").text(ui.value+' ');
			$("#InputValue13").val(ui.value+' ');
		}
	});
	$("#InputValue13").val($(".slider13").slider("value")+' ');
	$("#amount13").text($(".slider13").slider("value")+'  ');

    $("#InputValue13").change(function(){
        $(".slider13").slider("value", this.value)
    });




	function update14() {
		var tasks_timeN = $('.slider14').slider('value');
		var tskdoneN = $('#tskdone14').slider('value');

		$("#amount14").text(tasks_timeN);
	}

	$(".slider14" ).slider({
		range: "min",
		value: 1000000,
		min: 0,
		max: 2000000,
		slide: function(event, ui) {
			//update14();
			$("#amount14").text(ui.value+ ' INR ');
			$("#InputValue14").val(ui.value+ ' INR');
		}
	});
	$("#InputValue14").val($(".slider14").slider("value")+ ' INR ');
	$("#amount14").text($(".slider14").slider("value")+ ' INR ');

    $("#InputValue14").change(function(){
        $(".slider14").slider("value", this.value)
    });





	function update15() {
		var tasks_timeO= $('.slider15').slider('value');
		var tskdoneO= $('#tskdone15').slider('value');

		$("#amount15").text(tasks_timeO);
	}

	$(".slider15" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update15();
			$("#amount15").text(ui.value+ ' ');
			$("#InputValue15").val(ui.value+ '  ');
		}
	});
	$("#InputValue15").val($(".slider15").slider("value")+ '  ');
	$("#amount15").text($(".slider15").slider("value")+ '  ');

    $("#InputValue15").change(function(){
        $(".slider15").slider("value", this.value)
    });




	function update16() {
		var tasks_timeP = $('.slider16').slider('value');
		var tskdoneP = $('#tskdone16').slider('value');

		$("#amount16").text(tasks_timeP);
	}
	$(".slider16" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update16();
			$("#amount16").text(ui.value);
			$("#InputValue16").val(ui.value);

		}
	});
	$("#InputValue16").val($(".slider16").slider("value"));
    $("#InputValue16").change(function(){
        $(".slider16").slider("value", this.value)
    });





	function update17() {
		var tasks_timeQ = $('.slider17').slider('value');
		var tskdoneQ = $('#tskdone17').slider('value');

		$("#amount17").text(tasks_timeQ);
	}
	$(".slider17" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update17();
			$("#amount17").text(ui.value);
			$("#InputValue17").val(ui.value);
		}
	});
	$("#InputValue17").val($(".slider17").slider("value"));
    $("#InputValue17").change(function(){
        $(".slider17").slider("value", this.value)
    });



	function update18() {
		var tasks_timeR = $('.slider18').slider('value');
		var tskdoneR = $('#tskdone18').slider('value');

		$("#amount18").text(tasks_timeR);
	}
	$(".slider18" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update18();
			$("#amount18").text(ui.value);
			$("#InputValue18").val(ui.value);
		}
	});
	$("#InputValue18").val($(".slider18").slider("value"));
    $("#InputValue18").change(function(){
        $(".slider18").slider("value", this.value)
    });



	function update19() {
		var tasks_timeS = $('.slider19').slider('value');
		var tskdoneS = $('#tskdone19').slider('value');

		$("#amount19").text(tasks_timeS);
	}
	$(".slider19" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update19();
			$("#amount19").text(ui.value);
			$("#InputValue19").val(ui.value);
		}
	});
	$("#InputValue19").val($(".slider19").slider("value"));
    $("#InputValue19").change(function(){
        $(".slider19").slider("value", this.value)
    });



	function update20() {
		var tasks_timeT = $('.slider20').slider('value');
		var tskdoneT = $('#tskdone20').slider('value');

		$("#amount20").text(tasks_timeT);
	}
	$(".slider20" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update20();
			$("#amount20").text(ui.value+ ' ');
			$("#InputValue20").val(ui.value+ ' ');
		}
	});
	$("#InputValue20").val($(".slider20").slider("value")+ '  ');
    $("#amount20").text($(".slider20").slider("value")+ '');

    $("#InputValue20").change(function(){
        $(".slider20").slider("value", this.value)
    });



	function update21() {
		var tasks_timeU = $('.slider21').slider('value');
		var tskdoneU = $('#tskdone21').slider('value');

		$("#amount21").text(tasks_timeU);
	}
	$(".slider21" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update21();
			$("#amount21").text(ui.value);
			$("#InputValue21").val(ui.value);
		}
	});
	$("#InputValue21").val($(".slider21").slider("value"));
    $("#InputValue21").change(function(){
        $(".slider21").slider("value", this.value)
    });



	function update22() {
		var tasks_timeV = $('.slider22').slider('value');
		var tskdoneV = $('#tskdone22').slider('value');

		$("#amount22").text(tasks_timeV);
	}
	$(".slider22" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update22();
			$("#amount22").text(ui.value);
			$("#InputValue22").val(ui.value);
		}
	});
	$("#InputValue22").val($(".slider22").slider("value"));
    $("#InputValue22").change(function(){
        $(".slider22").slider("value", this.value)
    });




	function update23() {
		var tasks_timeW = $('.slider23').slider('value');
		var tskdoneW = $('#tskdone23').slider('value');

		$("#amount23").text(tasks_timeW);
	}
	$(".slider23" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update23();
			$("#amount23").text(ui.value+'');
			$("#InputValue23").val(ui.value+'');
		}
	});
	$("#InputValue23").val($(".slider23").slider("value")+ '  ');
	$("#amount23").text($(".slider23").slider("value")+ ' ');

    $("#InputValue23").change(function(){
        $(".slider23").slider("value", this.value)
    });




	function update24() {
		var tasks_timeX = $('.slider24').slider('value');
		var tskdoneX = $('#tskdone24').slider('value');

		$("#amount24").text(tasks_timeX);
	}
	$(".slider24" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update24();
			$("#amount24").text(ui.value);
			$("#InputValue24").val(ui.value);
		}
	});
	$("#InputValue24").val($(".slider24").slider("value"));
    $("#InputValue24").change(function(){
        $(".slider24").slider("value", this.value)
    });



	function update25() {
		var tasks_timeY = $('.slider25').slider('value');
		var tskdoneY = $('#tskdone25').slider('value');

		$("#amount25").text(tasks_timeY);
	}
	$(".slider25" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update25();
			$("#amount25").text(ui.value);
			$("#InputValue25").val(ui.value);
		}
	});
	$("#InputValue25").val($(".slider25").slider("value"));
    $("#InputValue25").change(function(){
        $(".slider25").slider("value", this.value)
    });



	function update26() {
		var tasks_timeZ = $('.slider26').slider('value');
		var tskdoneZ = $('#tskdone26').slider('value');

		$("#amount26").text(tasks_timeZ);
	}
	$(".slider26" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update26();
			$("#amount26").text(ui.value);
			$("#InputValue26").val(ui.value);
		}
	});
	$("#InputValue26").val($(".slider26").slider("value"));
    $("#InputValue26").change(function(){
        $(".slider26").slider("value", this.value)
    });



	function update27() {
		var tasks_timeAA = $('.slider27').slider('value');
		var tskdoneAA = $('#tskdone27').slider('value');

		$("#amount27").text(tasks_timeAA);
	}
	$(".slider27" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update27();
			$("#amount27").text(ui.value+'');
			$("#InputValue27").val(ui.value+'');
		}
	});
	$("#InputValue27").val($(".slider27").slider("value")+ '  ');
	$("#amount27").text($(".slider27").slider("value")+ ' ');

    $("#InputValue27").change(function(){
        $(".slider27").slider("value", this.value)
    });



	function update28() {
		var tasks_timeAB = $('.slider28').slider('value');
		var tskdoneAB = $('#tskdone28').slider('value');

		$("#amount28").text(tasks_timeAB);
	}
	$(".slider28" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update28();
			$("#amount28").text(ui.value);
			$("#InputValue28").val(ui.value);
		}
	});
	$("#InputValue28").val($(".slider28").slider("value"));
    $("#InputValue28").change(function(){
        $(".slider28").slider("value", this.value)
    });


		function update29() {
		var tasks_timeAC = $('.slider29').slider('value');
		var tskdoneAC = $('#tskdone29').slider('value');

		$("#amount29").text(tasks_timeAC);
	}

	$(".slider29" ).slider({
		range: "min",
		value: 6,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update29();
			$("#amount29").text(ui.value+' Years');
			$("#InputValue29").val(ui.value+' Years');
		}
	});
	$("#InputValue29").val($(".slider29").slider("value")+' Years');
	$("#amount29").text($(".slider29").slider("value")+' Years');

    $("#InputValue29").change(function(){
        $(".slider29").slider("value", this.value)
    });


		function update30() {
		var tasks_timeAD = $('.slider30').slider('value');
		var tskdoneAD = $('#tskdone30').slider('value');

		$("#amount30").text(tasks_timeAD);
	}

	$(".slider30" ).slider({
		range: "min",
		value: 6,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update30();
			$("#amount30").text(ui.value+' Years');
			$("#InputValue30").val(ui.value+' Years');
		}
	});
	$("#InputValue30").val($(".slider30").slider("value")+' Years');
	$("#amount30").text($(".slider30").slider("value")+' Years');

    $("#InputValue30").change(function(){
        $(".slider30").slider("value", this.value)
    });


		function update31() {
		var tasks_timeAE = $('.slider31').slider('value');
		var tskdoneAE = $('#tskdone31').slider('value');

		$("#amount31").text(tasks_timeAE);
	}

	$(".slider31" ).slider({
		range: "min",
		value: 6,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update31();
			$("#amount31").text(ui.value+' Years');
			$("#InputValue31").val(ui.value+' Years');
		}
	});
	$("#InputValue31").val($(".slider31").slider("value")+' Years');
	$("#amount31").text($(".slider31").slider("value")+' Years');

    $("#InputValue31").change(function(){
        $(".slider31").slider("value", this.value)
    });



	function update32() {
		var tasks_timeAF = $('.slider32').slider('value');
		var tskdoneAF = $('#tskdone32').slider('value');

		$("#amount32").text(tasks_timeAF);
	}

	$(".slider32" ).slider({
		range: "min",
		value: 3000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update32();
			$("#amount32").text(ui.value+' ');
			$("#InputValue32").val(ui.value+' ');
		}
	});
	$("#InputValue32").val($(".slider32").slider("value")+' ');
	$("#amount32").text($(".slider32").slider("value")+'  ');

    $("#InputValue32").change(function(){
        $(".slider32").slider("value", this.value)
    });

	function update33() {
		var tasks_timeAG = $('.slider33').slider('value');
		var tskdoneAG = $('#tskdone33').slider('value');

		$("#amount33").text(tasks_timeAG);
	}

	$(".slider33" ).slider({
		range: "min",
		value: 3000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update33();
			$("#amount33").text(ui.value+' ');
			$("#InputValue33").val(ui.value+' ');
		}
	});
	$("#InputValue33").val($(".slider33").slider("value")+' ');
	$("#amount33").text($(".slider33").slider("value")+'  ');

    $("#InputValue33").change(function(){
        $(".slider33").slider("value", this.value)
    });


	function update34() {
		var tasks_timeAH = $('.slider34').slider('value');
		var tskdoneAH = $('#tskdone34').slider('value');

		$("#amount34").text(tasks_timeAH);
	}
	$(".slider34" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update34();
			$("#amount34").text(ui.value+'');
			$("#InputValue34").val(ui.value+'');
		}
	});
	$("#InputValue34").val($(".slider34").slider("value")+ '  ');
	$("#amount34").text($(".slider34").slider("value")+ ' ');

    $("#InputValue34").change(function(){
        $(".slider34").slider("value", this.value)
    });




	function update35() {
		var tasks_timeAI = $('.slider35').slider('value');
		var tskdoneAI = $('#tskdone35').slider('value');

		$("#amount35").text(tasks_timeAI);
	}
	$(".slider35" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update35();
			$("#amount35").text(ui.value);
			$("#InputValue35").val(ui.value);
		}
	});
	$("#InputValue35").val($(".slider35").slider("value"));
    $("#InputValue35").change(function(){
        $(".slider35").slider("value", this.value)
    });



	function update36() {
		var tasks_timeAJ = $('.slider36').slider('value');
		var tskdoneAJ = $('#tskdone36').slider('value');

		$("#amount36").text(tasks_timeAJ);
	}
	$(".slider36" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update36();
			$("#amount36").text(ui.value);
			$("#InputValue36").val(ui.value);
		}
	});
	$("#InputValue36").val($(".slider36").slider("value"));
    $("#InputValue36").change(function(){
        $(".slider36").slider("value", this.value)
    });



	function update37() {
		var tasks_timeAK = $('.slider37').slider('value');
		var tskdoneAK = $('#tskdone37').slider('value');

		$("#amount37").text(tasks_timeAK);
	}
	$(".slider37" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update37();
			$("#amount37").text(ui.value);
			$("#InputValue37").val(ui.value);
		}
	});
	$("#InputValue37").val($(".slider37").slider("value"));
    $("#InputValue37").change(function(){
        $(".slider37").slider("value", this.value)
    });


	function update38() {
		var tasks_timeAL = $('.slider38').slider('value');
		var tskdoneAL = $('#tskdone38').slider('value');

		$("#amount38").text(tasks_timeAL);
	}
	$(".slider38" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update38();
			$("#amount38").text(ui.value+'');
			$("#InputValue38").val(ui.value+'');
		}
	});
	$("#InputValue38").val($(".slider38").slider("value")+ '  ');
	$("#amount38").text($(".slider38").slider("value")+ ' ');

    $("#InputValue38").change(function(){
        $(".slider38").slider("value", this.value)
    });




	function update39() {
		var tasks_timeAM = $('.slider39').slider('value');
		var tskdoneAM = $('#tskdone39').slider('value');

		$("#amount39").text(tasks_timeAM);
	}
	$(".slider39" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update39();
			$("#amount39").text(ui.value);
			$("#InputValue39").val(ui.value);
		}
	});
	$("#InputValue39").val($(".slider39").slider("value"));
    $("#InputValue39").change(function(){
        $(".slider39").slider("value", this.value)
    });



	function update40() {
		var tasks_timeAN = $('.slider40').slider('value');
		var tskdoneAN = $('#tskdone40').slider('value');

		$("#amount40").text(tasks_timeAN);
	}
	$(".slider40" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update40();
			$("#amount40").text(ui.value);
			$("#InputValue40").val(ui.value);
		}
	});
	$("#InputValue40").val($(".slider40").slider("value"));
    $("#InputValue40").change(function(){
        $(".slider40").slider("value", this.value)
    });



	function update41() {
		var tasks_timeAO = $('.slider41').slider('value');
		var tskdoneAO = $('#tskdone41').slider('value');

		$("#amount41").text(tasks_timeAO);
	}
	$(".slider41" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update41();
			$("#amount41").text(ui.value);
			$("#InputValue41").val(ui.value);
		}
	});
	$("#InputValue41").val($(".slider41").slider("value"));
    $("#InputValue41").change(function(){
        $(".slider41").slider("value", this.value)
    });


	function update42() {
		var tasks_timeAP = $('.slider42').slider('value');
		var tskdoneAP = $('#tskdone42').slider('value');

		$("#amount42").text(tasks_timeAP);
	}
	$(".slider42" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update42();
			$("#amount42").text(ui.value);
			$("#InputValue42").val(ui.value);
		}
	});
	$("#InputValue42").val($(".slider42").slider("value"));
    $("#InputValue42").change(function(){
        $(".slider42").slider("value", this.value)
    });



	function update43() {
		var tasks_timeAQ = $('.slider43').slider('value');
		var tskdoneAQ = $('#tskdone43').slider('value');

		$("#amount43").text(tasks_timeAQ);
	}
	$(".slider43" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update43();
			$("#amount43").text(ui.value+'');
			$("#InputValue43").val(ui.value+'');
		}
	});
	$("#InputValue43").val($(".slider43").slider("value")+ '  ');
	$("#amount43").text($(".slider43").slider("value")+ ' ');

    $("#InputValue43").change(function(){
        $(".slider43").slider("value", this.value)
    });




	function update44() {
		var tasks_timeAR = $('.slider44').slider('value');
		var tskdoneAR = $('#tskdone44').slider('value');

		$("#amount44").text(tasks_timeAR);
	}
	$(".slider44" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update44();
			$("#amount44").text(ui.value);
			$("#InputValue44").val(ui.value);
		}
	});
	$("#InputValue44").val($(".slider44").slider("value"));
    $("#InputValue44").change(function(){
        $(".slider44").slider("value", this.value)
    });


	function update45() {
		var tasks_timeAS = $('.slider45').slider('value');
		var tskdoneAS = $('#tskdone45').slider('value');

		$("#amount45").text(tasks_timeAS);
	}
	$(".slider45" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update45();
			$("#amount45").text(ui.value);
			$("#InputValue45").val(ui.value);
		}
	});
	$("#InputValue45").val($(".slider45").slider("value"));
    $("#InputValue45").change(function(){
        $(".slider45").slider("value", this.value)
    });


	function update46() {
		var tasks_timeAT = $('.slider46').slider('value');
		var tskdoneAT = $('#tskdone46').slider('value');

		$("#amount46").text(tasks_timeAT);
	}
	$(".slider46" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update46();
			$("#amount46").text(ui.value);
			$("#InputValue46").val(ui.value);
		}
	});
	$("#InputValue46").val($(".slider46").slider("value"));
    $("#InputValue46").change(function(){
        $(".slider46").slider("value", this.value)
    });


	function update47() {
		var tasks_timeAU = $('.slider47').slider('value');
		var tskdoneAU = $('#tskdone47').slider('value');

		$("#amount47").text(tasks_timeAU);
	}
	$(".slider47" ).slider({
		range: "min",
		value: 5000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update47();
			$("#amount47").text(ui.value+'');
			$("#InputValue47").val(ui.value+'');
		}
	});
	$("#InputValue47").val($(".slider47").slider("value")+ '  ');
	$("#amount47").text($(".slider47").slider("value")+ ' ');

    $("#InputValue47").change(function(){
        $(".slider47").slider("value", this.value)
    });




	function update48() {
		var tasks_timeAV = $('.slider48').slider('value');
		var tskdoneAV = $('#tskdone48').slider('value');

		$("#amount48").text(tasks_timeAV);
	}
	$(".slider48" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update48();
			$("#amount48").text(ui.value);
			$("#InputValue48").val(ui.value);
		}
	});
	$("#InputValue48").val($(".slider48").slider("value"));
    $("#InputValue48").change(function(){
        $(".slider48").slider("value", this.value)
    });



	function update49() {
		var tasks_timeAW = $('.slider49').slider('value');
		var tskdoneAW = $('#tskdone49').slider('value');

		$("#amount49").text(tasks_timeAW);
	}
	$(".slider49" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update49();
			$("#amount49").text(ui.value);
			$("#InputValue49").val(ui.value);
		}
	});
	$("#InputValue49").val($(".slider49").slider("value"));
    $("#InputValue49").change(function(){
        $(".slider49").slider("value", this.value)
    });



		function update50() {
		var tasks_timeAX = $('.slider50').slider('value');
		var tskdoneAX = $('#tskdone50').slider('value');

		$("#amount50").text(tasks_timeAX);
	}

	$(".slider50" ).slider({
		range: "min",
		value: 6,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update50();
			$("#amount50").text(ui.value+' People');
			$("#InputValue50").val(ui.value+' People');
		}
	});
	$("#InputValue50").val($(".slider50").slider("value")+' People');
	$("#amount50").text($(".slider50").slider("value")+' People');

    $("#InputValue50").change(function(){
        $(".slider50").slider("value", this.value)
    });


	function update51() {
		var tasks_timeAY = $('.slider51').slider('value');
		var tskdoneAY = $('#tskdone51').slider('value');

		$("#amount51").text(tasks_timeAY);
	}

	$(".slider51" ).slider({
		range: "min",
		value: 3000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update51();
			$("#amount51").text(ui.value+' ');
			$("#InputValue51").val(ui.value+' ');
		}
	});
	$("#InputValue51").val($(".slider51").slider("value")+' ');
	$("#amount51").text($(".slider51").slider("value")+'  ');

    $("#InputValue51").change(function(){
        $(".slider51").slider("value", this.value)
    });


	function update52() {
		var tasks_timeAZ = $('.slider52').slider('value');
		var tskdoneAZ = $('#tskdone52').slider('value');

		$("#amount52").text(tasks_timeAZ);
	}

	$(".slider52" ).slider({
		range: "min",
		value: 3000000,
		min: 0,
		max: 10000000,
		slide: function(event, ui) {
			//update52();
			$("#amount52").text(ui.value+' ');
			$("#InputValue52").val(ui.value+' ');
		}
	});
	$("#InputValue52").val($(".slider52").slider("value")+' ');
	$("#amount52").text($(".slider52").slider("value")+'  ');

    $("#InputValue52").change(function(){
        $(".slider52").slider("value", this.value)
    });


	function update53() {
		var tasks_timea = $('.slider53').slider('value');
		var tskdonea = $('#tskdone53').slider('value');

		$("#amount53").text(tasks_timea);
	}

	$(".slider53" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 50,
		slide: function(event, ui) {
			//update53();
			$("#amount53").text(ui.value+' Years, Months');
			$("#InputValue53").val(ui.value+' Years, Months');
		}
	});
	$("#InputValue53").val($(".slider53").slider("value")+' Years, Months');
	$("#amount53").text($(".slider53").slider("value")+' Years, Months');

    $("#InputValue53").change(function(){
        $(".slider53").slider("value", this.value)
    });


	function update54() {
		var tasks_timeW = $('.slider54').slider('value');
		var tskdoneW = $('#tskdone54').slider('value');

		$("#amount54").text(tasks_timeW);
	}
	$(".slider54" ).slider({
		range: "min",
		value: 50000,
		min: 1,
		max: 10000000,
		slide: function(event, ui) {
			//update54();
			$("#amount54").text(ui.value+'');
			$("#InputValue54").val(ui.value+'');
		}
	});
	$("#InputValue54").val($(".slider54").slider("value")+ '  ');
	$("#amount54").text($(".slider54").slider("value")+ ' ');

    $("#InputValue54").change(function(){
        $(".slider54").slider("value", this.value)
    });


		function update55() {
		var tasks_timeAD = $('.slider55').slider('value');
		var tskdoneAD = $('#tskdone55').slider('value');

		$("#amount55").text(tasks_timeAD);
	}

	$(".slider55" ).slider({
		range: "min",
		value: 5,
		min: 1,
		max: 50,
		slide: function(event, ui) {
			//update55();
			$("#amount55").text(ui.value+' ');
			$("#InputValue55").val(ui.value+' ');
		}
	});
	$("#InputValue55").val($(".slider55").slider("value")+' Years');
	$("#amount55").text($(".slider55").slider("value")+' Years');

    $("#InputValue55").change(function(){
        $(".slider55").slider("value", this.value)
    });


	function update56() {
		var tasks_timek = $('.slider56').slider('value');
		var tskdonek = $('#tskdone56').slider('value');

		$("#amount56").text(tasks_timek);
	}

	$(".slider56" ).slider({
		range: "min",
		value: 10,
		min: 1,
		max: 100,
		slide: function(event, ui) {
			//update56();
			$("#amount56").text(ui.value+' %');
			$("#InputValue56").val(ui.value+' %');
		}
	});
	$("#InputValue56").val($(".slider56").slider("value")+' %');
	$("#amount56").text($(".slider56").slider("value")+' %');

    $("#InputValue56").change(function(){
        $(".slider56").slider("value", this.value)
    });
