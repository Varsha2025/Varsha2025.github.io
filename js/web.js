
(function($) {
  var selectors = [];
  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);
  var $prior_appeared;
  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });
      $appeared.trigger('appear', [$appeared]);
      if ($prior_appeared) {        
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }
    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;
    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }
  $.fn.extend({
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;
          setTimeout(process, opts.interval);
        };
        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }
      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });
  $.extend({
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);
(function($){
  '$:nomunge'; // Used by YUI compressor.  
  var cache = {},
    doTimeout = 'doTimeout',
    aps = Array.prototype.slice;
  $[doTimeout] = function() {
    return p_doTimeout.apply( window, [ 0 ].concat( aps.call( arguments ) ) );
  };
  $.fn[doTimeout] = function() {
    var args = aps.call( arguments ),
      result = p_doTimeout.apply( this, [ doTimeout + args[0] ].concat( args ) );    
    return typeof args[0] === 'number' || typeof args[1] === 'number'
      ? this
      : result;
  };  
  function p_doTimeout( jquery_data_key ) {
    var that = this,
      elem,
      data = {},
      method_base = jquery_data_key ? $.fn : $,
      args = arguments,
      slice_args = 4,      
      id        = args[1],
      delay     = args[2],
      callback  = args[3];    
    if ( typeof id !== 'string' ) {
      slice_args--;      
      id        = jquery_data_key = 0;
      delay     = args[1];
      callback  = args[2];
    }
    if ( jquery_data_key ) { // Note: key is 'doTimeout' + id
      elem = that.eq(0);
      elem.data( jquery_data_key, data = elem.data( jquery_data_key ) || {} );      
    } else if ( id ) {
      data = cache[ id ] || ( cache[ id ] = {} );
    }
    data.id && clearTimeout( data.id );
    delete data.id;
    function cleanup() {
      if ( jquery_data_key ) {
        elem.removeData( jquery_data_key );
      } else if ( id ) {
        delete cache[ id ];
      }
    };
    function actually_setTimeout() {
      data.id = setTimeout( function(){ data.fn(); }, delay );
    };    
    if ( callback ) {
      data.fn = function( no_polling_loop ) {
        if ( typeof callback === 'string' ) {
          callback = method_base[ callback ];
        }        
        callback.apply( that, aps.call( args, slice_args ) ) === true && !no_polling_loop
          ? actually_setTimeout()
          : cleanup();
      };
      actually_setTimeout();      
    } else if ( data.fn ) {
      delay === undefined ? cleanup() : data.fn( delay === false );
      return true;
      
    } else {
      cleanup();
    }    
  };  
})(jQuery);
$('.animatedParent').appear();
$('.animatedClick').click(function(){
  var target = $(this).attr('data-target');  
  if($(this).attr('data-sequence') != undefined){
    var firstId = $("."+target+":first").attr('data-id');
    var lastId = $("."+target+":last").attr('data-id');
    var number = firstId;
    if($("."+target+"[data-id="+ number +"]").hasClass('go')){
      $("."+target+"[data-id="+ number +"]").addClass('goAway');
      $("."+target+"[data-id="+ number +"]").removeClass('go');
    }else{
      $("."+target+"[data-id="+ number +"]").addClass('go');
      $("."+target+"[data-id="+ number +"]").removeClass('goAway');
    }
    number ++;
    delay = Number($(this).attr('data-sequence'));
    $.doTimeout(delay, function(){
      console.log(lastId);
      if($("."+target+"[data-id="+ number +"]").hasClass('go')){
        $("."+target+"[data-id="+ number +"]").addClass('goAway');
        $("."+target+"[data-id="+ number +"]").removeClass('go');
      }else{
        $("."+target+"[data-id="+ number +"]").addClass('go');
        $("."+target+"[data-id="+ number +"]").removeClass('goAway');
      }
      ++number;
      if(number <= lastId){return true;}
    });
  }else{
    if($('.'+target).hasClass('go')){
      $('.'+target).addClass('goAway');
      $('.'+target).removeClass('go');
    }else{
      $('.'+target).addClass('go');
      $('.'+target).removeClass('goAway');
    }
  } 
});
$(document.body).on('appear', '.animatedParent', function(e, $affected){
  var ele = $(this).find('.animated');
  var parent = $(this); 
  if(parent.attr('data-sequence') != undefined){    
    var firstId = $(this).find('.animated:first').attr('data-id');
    var number = firstId;
    var lastId = $(this).find('.animated:last').attr('data-id');
    $(parent).find(".animated[data-id="+ number +"]").addClass('go');
    number ++;
    delay = Number(parent.attr('data-sequence'));
    $.doTimeout(delay, function(){
      $(parent).find(".animated[data-id="+ number +"]").addClass('go');
      ++number;
      if(number <= lastId){return true;}
    });
  }else{
    ele.addClass('go');
  }  
});
 $(document.body).on('disappear', '.animatedParent', function(e, $affected) {
  if(!$(this).hasClass('animateOnce')){
    $(this).find('.animated').removeClass('go');
   }
 });
 $(window).on('load',function(){
  $.force_appear();
 });
$(document).ready(function(e) {  
$('#count').on('click focusin', function() {
    this.value = '';
});
	$('.dropdown-item,.custome-btn-group .btn').click(function(){
		setTimeout(function(){ 
			$('.ask-qst').slideDown();$('.n1').addClass('go');
		 }, 1000);
		 setTimeout(function(){ 
			$('.ask-qst').slideDown();$('.n2').addClass('go');
		 }, 2000);		 
		setTimeout(function(){ 
			$('.ask-qst-ans').slideDown();$('.n3').addClass('go');
		 }, 3000);
		 setTimeout(function(){ 
			$('.ask-qst-ans').slideDown();$('.n4').addClass('go');
		 }, 3500);
		 setTimeout(function(){ 			
			$('.text-typing').hide('slide'),1000;
		 }, 4500);
		 setTimeout(function(){ 
			$('.text-typed').show('slide'),500;
		 }, 5000);	 
	})	
    $('body').css('overflow-x','hidden');
	$('body').append('<div class="dummy-modal"></div>');	
	$('.menu-open-button').click(function(){
	$('.nav-name').toggle() , 400;	
	$('.dummy-modal').toggleClass('modal-backdrop fade show');
	$(this).toggleClass('active');		
	})    
});
$(function () {
    var browserheight = $(window).height() - 55;
    $(".wrapper").css("min-height", browserheight);
});
$(document).ready(function(){
	$('.carousel-item .panel:first-child,.carousel-item .panel:last-child').addClass('slide-disable');
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
			$("#amount1").text(ui.value);		
			$("#InputValue1").val(ui.value);
		}	
	});	
	$("#InputValue1").val($(".slider1").slider("value"));    
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
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 97) {
        $(".fixed-menu").addClass("f-nav");
    } else {
        $(".fixed-menu").removeClass("f-nav");
    }
});
