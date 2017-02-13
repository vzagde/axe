var validate = 0;
var ans1,ans2,ans3,ans4;
ans4 = 'Yoga';
var slide = 2;
var page = '';
var data;


// Lockr.flush();

console.log("locker is "+Lockr.get('data'));

// Initialize app
var myApp = new Framework7({

	preloadPreviousPage:false,
	modalTitle:"AXE"
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

$(function () {
	$('.tlt').textillate();
})

$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate_enter");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate_enter");
});
});

/* $('.svg_animation').delay(700).animate({opacity:"1"}); */

// Option 2. Using one 'pageInit' event handler for all pages:



$( document ).ready(function() {
    // console.log( "ready!" );

	$('.preloader_logo').animate({top:"31.5%" , opacity:"1"}, 1000);
    $('.pre_blank_box1').delay('500').animate({height:"185px"}, 1500);
	$('.pre_blank_box2').delay('600').animate({width:"80px"}, 1700);
	$('.pre_blank_box3').delay('700').animate({width:"40px"}, 1700);

    setTimeout(function(){
    	mainView.router.loadPage("home.html");
    },5000)


});





$$(document).on('pageInit', function (e) {



	// alert('page init called');

    // Get page data from event data
    var page = e.detail.page;
    var pagename = page.name;


    for (var i = 1; i < 16; i++) {
    	// console.log(i);
    	if(pagename=="ans"+i){
    		setTimeout(function(){
    			mainView.router.loadPage("premium.html");
    		},10000)
    	}

    }


    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
	
	
	$(function(){
		var ink, d, x, y;
		$(".ripplelink").click(function(e){
		if($(this).find(".ink").length === 0){
			$(this).prepend("<span class='ink'></span>");
		}
			
		ink = $(this).find(".ink");
		ink.removeClass("animate_enter");
		
		if(!ink.height() && !ink.width()){
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({height: d, width: d});
		}
		
		x = e.pageX - $(this).offset().left - ink.width()/2;
		y = e.pageY - $(this).offset().top - ink.height()/2;
		
		ink.css({top: y+'px', left: x+'px'}).addClass("animate_enter");
	});
	});
	
	$(function () {
		$('.tlt').textillate();
	})
	
	$('.question_text,.ans_text1').animate({top:"0%" , opacity:"1"}, 1000);
	
	
	$('.dotted_border_box1').delay('500').animate({width:"22%"}, 500, function(){
		$('.dotted_border_box2').animate({height:"6%"}, 500, function(){
			$('.dotted_border_box3').animate({height:"46%"}, 700, function(){
				$('.dotted_border_box4').animate({width:"91%"}, 700, function(){
					$('.dotted_border_box5').animate({height:"8%"}, 300);
				});
			});
		});
	});
	
	
	$('.ans_text_img').delay('500').animate({opacity:"1"}, 1000);
	$('.ans_spray').delay('100').animate({opacity:"1"}, 500);
	
	
	
	
	
	$('.number_box').delay('500').animate({top:"-7%"}, 800);
	$('.q4_animate1').delay('300').fadeIn('slow');
	$('.q4_slide1').delay('300').animate({left:"5%"}, 500);
	$(".circle").delay('500').animate({width:'80px', height:'80px'},1000, function(){
		$('.q4_text').fadeIn('slow');
	});

	$(".premium_li").click(function(){

		var premium_left_id = ".premium_left_text_box_"+$(this).data("slideid");
		var premium_right_id = ".premium_right_text_box_"+$(this).data("slideid");
		var premium_img_id = ".premium_img_"+$(this).data("slideid");
		var blank_sub_id = ".blank_sub_"+$(this).data("slideid");
		
		$('.premium_li').removeClass('premium_li_active');
		$(this).addClass('premium_li_active');
		
		$('.premium_img').animate({opacity:"0"});
		$('.premium_left_text_box').animate({left:"0%" , opacity:"0"});
		$('.premium_right_text_box').animate({right:"0%" , opacity:"0"});
		$('.blank_sub').animate({width:"0%"});

		$(premium_img_id).animate({opacity:"1"}, 2000);
		$(premium_left_id).animate({left:"5%" , opacity:"1"}, 1000, function(){
			$(blank_sub_id).animate({width:"100%"}, 1000);
		});
		$(premium_right_id).animate({right:"5%" , opacity:"1"}, 1000, function(){
			$(blank_sub_id).animate({width:"100%"}, 1000);
		});
	})
	
	/* $('.premium_img_1').animate({opacity:"1"}, 2000);
	$('.premium_left_text_box_1').animate({left:"5%" , opacity:"1"}, 1000, function(){
		$('.blank_sub_1').animate({width:"100%"}, 1000);
	});
	$('.premium_right_text_box_1').animate({right:"5%" , opacity:"1"}, 1000, function(){
		$('.blank_sub_1').animate({width:"100%"}, 1000);
	}); */



	
	$('.pad_btm').click(function() {
		$('.q9_thumb_img').removeClass('q9_img_animte');
		$(this).find('.q9_thumb_img').addClass('q9_img_animte');
	});
	
	$('.hanger_click').click(function() {
		$('.right_mark').removeClass('right_mark_show');
		$(this).find('.right_mark').addClass('right_mark_show');
	});
	
	$('.q10_li').click(function() {
		$('.q10_li').removeClass('box_scale');
		$(this).addClass('box_scale');
		$('.mini_circle').removeClass('circle_border');
		$(this).find('.mini_circle').addClass('circle_border');
	});
	
	$('.q10_click1').click(function() {
		$('.q10_img').css('z-index' , '1');
		$('.q10_img1').css('z-index' , '2');
	});
	
	$('.q10_click2').click(function() {
		$('.q10_img').css('z-index' , '1');
		$('.q10_img2').css('z-index' , '2');
	});
	
	$('.q10_click3').click(function() {
		$('.q10_img').css('z-index' , '1');
		$('.q10_img3').css('z-index' , '2');
	});
	
	$('.q10_click4').click(function() {
		$('.q10_img').css('z-index' , '1');
		$('.q10_img4').css('z-index' , '2');
	});

	
	
	$( function() {
		$( "#draggable" ).draggable({
			revert: true,
			axis: "x"
		});
	} );
	
	$( function() {
		$( "#draggable1" ).draggable({
			revert: false,
			axis: "x",
			containment: "parent",
			grid: [ 210,101 ],
			drag: function(){
			}
		});
	} );

	$('.q4_drop').click(function(){
		var leftposition = Number($(this).css("left").replace('px', ''));
		console.log(leftposition);
		if(leftposition == 0){
			$("#draggable1").animate({
				left: '0px'
			})
			ans4 = 'Yoga';
			$('.q4_slide_sub_box').fadeOut();
			$(".circle").delay('500').animate({width:'0', height:'0'});
			$('.q4_text').fadeOut();
			$('.q4_animate1').delay('300').fadeIn('slow');
			$(".c1").delay('500').animate({width:'80px', height:'80px'},700, function(){
				$('.qt1').fadeIn('slow');
			});
		} else if(leftposition == 210) {
			$("#draggable1").animate({
				left: '210px'
			})
			ans4 = 'Gym';
			$('.q4_slide_sub_box').fadeOut();
			$(".circle").delay('500').animate({width:'0', height:'0'});
			$('.q4_text').fadeOut();
			
			$('.q4_animate2').delay('300').fadeIn('slow');
			$(".c2").delay('500').animate({width:'80px', height:'80px'},700, function(){
				$('.qt2').fadeIn('slow');
			});
		} else if(leftposition == 420) {
			$("#draggable1").animate({
				left: '420px'
			})
			ans4 = 'Zumba';
			$('.q4_slide_sub_box').fadeOut();
			$(".circle").delay('500').animate({width:'0', height:'0'});
			$('.q4_text').fadeOut();
			
			$('.q4_animate3').delay('300').fadeIn('slow');
			$(".c3").delay('500').animate({width:'80px', height:'80px'},700, function(){
				$('.qt3').fadeIn('slow');
			});
		} else if(leftposition == 630){
			$("#draggable1").animate({
				left: '630px'
			})
			ans4 = 'Shower';
			$('.q4_slide_sub_box').fadeOut();
			$(".circle").delay('500').animate({width:'0', height:'0'});
			$('.q4_text').fadeOut();
			
			$('.q4_animate4').delay('300').fadeIn('slow');
			$(".c4").delay('500').animate({width:'80px', height:'80px'},700, function(){
				$('.qt4').fadeIn('slow');
			});
		}
	})

	$('.q4_drop').droppable({
		drop: function(e, ui) {
			var leftposition = Number($('.grag_slide1').css('left').replace('px', ''));
			if(leftposition >= 0 && leftposition <= 100){
				ans4 = 'Yoga';
				$('.q4_slide_sub_box').fadeOut();
				$(".circle").delay('500').animate({width:'0', height:'0'});
				$('.q4_text').fadeOut();
				$('.q4_animate1').delay('300').fadeIn('slow');
				$(".c1").delay('500').animate({width:'80px', height:'80px'},700, function(){
					$('.qt1').fadeIn('slow');
				});
			} else if(leftposition >= 100 && leftposition <= 300) {
				ans4 = 'Gym';
				$('.q4_slide_sub_box').fadeOut();
				$(".circle").delay('500').animate({width:'0', height:'0'});
				$('.q4_text').fadeOut();
				
				$('.q4_animate2').delay('300').fadeIn('slow');
				$(".c2").delay('500').animate({width:'80px', height:'80px'},700, function(){
					$('.qt2').fadeIn('slow');
				});
			} else if(leftposition >= 300 && leftposition <= 500) {
				ans4 = 'Zumba';
				$('.q4_slide_sub_box').fadeOut();
				$(".circle").delay('500').animate({width:'0', height:'0'});
				$('.q4_text').fadeOut();
				
				$('.q4_animate3').delay('300').fadeIn('slow');
				$(".c3").delay('500').animate({width:'80px', height:'80px'},700, function(){
					$('.qt3').fadeIn('slow');
				});
			} else if(leftposition >= 500){
				ans4 = 'Shower';
				$('.q4_slide_sub_box').fadeOut();
				$(".circle").delay('500').animate({width:'0', height:'0'});
				$('.q4_text').fadeOut();
				
				$('.q4_animate4').delay('300').fadeIn('slow');
				$(".c4").delay('500').animate({width:'80px', height:'80px'},700, function(){
					$('.qt4').fadeIn('slow');
				});
			}
		}
	});

	$(".confirm_a").click(function(){
		$(".confirm_box").fadeOut();
	})

	$(".confirm_a_form").click(function(){
		$(".confirm_box_form").fadeOut();
	})
	/* $( function() {
		$( ".item_drop" ).draggable();
		$( ".chair_box" ).droppable({
			greedy: true
		});
	} ); */
	
	$(function() {
		var dragOptions = {
			revert: "invalid",
			scope: "items",
			helper: "clone",
			drag: function(){

				// console.log('1');
				// if(document.getElementById("drop_box").childElementCount > 0){


					validate=0;
					console.log('working');
					var item_html = $('.drop_box').html();
					item_html = item_html.replace('<img src="images/chair.png" class="chair" alt="">', '');
					$("#drop_box").find("img:first-child").remove();
					$('.item_drop').draggable(dragOptions);
					// $('.drop_box').html('<img src="images/chair.png" class="chair" alt="">');
					$('.spray_box').append(item_html);
					//$('.item_drop').removeClass('b_ab');
					//$(this).addClass('b_ab');
				// }
			}
		}
		
		$('.item_drop').draggable(dragOptions);
		$('.drop_box').droppable({
			scope: "items",
			drop: function(e, ui) {


				var $drop = $(this);
				$(ui.draggable).draggable({
					"disabled": true
				}).appendTo($drop);

				console.log('dropped');
				validate = 1;
				ans2 = $('#drop_box img').attr('data-name');
				console.log(ans2);

			}
		});
	});
	

	
})





$$(document).on('pageInit', '.page[data-page="question1"]', function (e) {
    

	$( "#draggable" ).draggable({

	  drag: function( event, ui ) {

	    // Keep the left edge of the element
	    // at least 100 pixels from the container
	    ui.position.left = Math.min( 1000, ui.position.left );
	    console.log(ui.position.left);

	    if(ui.position.left>380){
			
			$(".thumbs_up").addClass('thumb_scale');
			
			
	    	ans1 = 'Yes';
	    	console.log(ans1);
	    	mainView.router.loadPage('question2.html');

	    }else if(ui.position.left < 45){

			$(".thumbs_down").addClass('thumb_scale');
		
	    	ans1 = 'No';
	    	console.log(ans1);
	    	mainView.router.loadPage('question2.html');

	    }

	  }

	});

	
})


$$(document).on('pageInit', '.page[data-page="home"]', function (e) {

	var send_data = Lockr.get('data');



	$('#showalert').click(function(){

		myApp.prompt('Enter Email-Id', function (value) {

			if(value==""){

				myApp.alert('Email Required');
				// return false;

			}else{

				$.ajax({

					type:"POST",
					url:"http://kreaserv-tech.com/axe/insert.php",
					crossDomain:true,
					data:{
						data: send_data,
						email:value
					},
					success:function(result){
						// console.log(result);
						if(result=="success"){

							myApp.alert('Uploaded Successfully');
							Lockr.flush();

						}else if(result=="email"){

							myApp.alert('Not Allowed To Upload');

						}else{

							myApp.alert('Error');
						}
					},
					error:function(error){


						// console.log(error);
					}



				})
			}



			// alert('make ajax call');
	        // myApp.alert('"' + value + '". You clicked Ok button');
	    });
	})
})



$$(document).on('pageInit', '.page[data-page="question2"]', function (e) {

	$('#goto_question3').click(function(){
		if(validate==0){
			$(".confirm_box").fadeIn();
		}else{
			mainView.router.loadPage('question3.html');
		}
	})


})



$$(document).on('pageInit', '.page[data-page="question3"]', function (e) {

	validate = 0;
    $('#goto_question4').click(function(){
		
		ans3 = $('.slick-center').attr('data-name');
    	console.log(ans3);
    	mainView.router.loadPage('question4.html');

    }) 
	
	
	$('.center').slick({
		centerMode: true,
		arrows: false,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 3
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
			}
		]
	});
	
	
})


// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="question4"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
	$('#goto_question5').click(function(){
		mainView.router.loadPage('question5.html');
	})
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="question5"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
	$('.single-item').slick();
})

$$(document).on('pageInit', '.page[data-page="question6"]', function (e) {
    
	$('.center').slick({
		centerMode: true,
		arrows: false,
		centerPadding: '10px',
		slidesToShow: 3,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 3
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
			}
		]
	});
	
})


$$(document).on('pageInit', '.page[data-page="question7"]', function (e) {
    
	/* new ElastiStack( document.getElementById( 'elasticstack' ) ); */

new ElastiStack( document.getElementById( 'elasticstack' ), {
	// distDragBack: if the user stops dragging the image in a area that does not exceed [distDragBack]px 
	// for either x or y then the image goes back to the stack 
	distDragBack : 200,
	// distDragMax: if the user drags the image in a area that exceeds [distDragMax]px 
	// for either x or y then the image moves away from the stack 
	distDragMax : 80,
	// callback
	onUpdateStack : function( current ) { return false; }
} );
	
})





$$(document).on('pageInit', '.page[data-page="question10"]', function (e) {
    
	// $('#goto_pillar_screen').click(function(){

	// 	// alert('clicked');
	// 	mainView.router

	// })
	
})




$$(document).on('pageInit', '.page[data-page="form"]', function (e) {
	if(ans1=="Yes" && ans2=="Body Spray" && ans3=="Others" && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition1');

		// Axe Recharge 24x7 ANS7
		// Axe Recharge Gameface ANS8
		// Axe Dark Temptation ANS3
		// Axe Gold Temptation ANS4
		// Axe Provoke ANS5


		var pages = ['ans3', 'ans4', 'ans5', 'ans7', 'ans8'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide  = 1;


	} else if(ans1=="Yes" && ans2=="Body Spray" && ans3=="Others" && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition2');

		// Axe Apollo ANS1
		// Axe Blast ANS2
		// Axe Pulse ANS6
		// Axe Recharge Midnight ANS9

		var pages = ['ans1', 'ans2', 'ans6', 'ans9'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;

	} else if(ans1=="Yes" && ans2=="Body Spray" && ans3=="Axe" && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition3');

		// Axe Recharge 24x7 ANS7
		// Axe Recharge Gameface ANS8
		// Axe Dark Temptation ANS3
		// Axe Gold Temptation ANS4
		// Axe Provoke ANS5

		var pages = ['ans3', 'ans4', 'ans5', 'ans7', 'ans8'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 1;

	}else if(ans1=="Yes" && ans2=="Body Spray" && ans3=="Axe" && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition4');

		// Axe Apollo ANS1
		// Axe Blast ANS2
		// Axe Pulse ANS6
		// Axe Recharge Midnight ANS9

		var pages = ['ans1', 'ans2', 'ans6', 'ans9'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;

	}else if(ans1=="Yes" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && ans3=="Others" && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition5');

		// Axe Signatur Champion ANS10
		// Axe Signatur Intense ANS11
		// Axe Signatur Rouge ANS14

		var pages = ['ans10', 'ans11', 'ans14'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 1;


	}else if(ans1=="Yes" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && ans3=="Others" && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition6');

		// Axe Signatur Maverick ANS12
		// Axe Signatur Mysterious ANS13
		// Axe Signatur Suave ANS15

		var pages = ['ans12', 'ans13', 'ans15'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;
		

	}else if(ans1=="Yes" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && ans3=="Axe" && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition7');

		// Axe Signatur Champion ANS10
		// Axe Signatur Intense ANS11
		// Axe Signatur Rouge ANS14

		var pages = ['ans10', 'ans11', 'ans14'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 1;
		

	}else if(ans1=="Yes" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && ans3=="Axe" && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition8');

		// Axe Signatur Maverick ANS12
		// Axe Signatur Mysterious ANS13
		// Axe Signatur Suave ANS15

		var pages = ['ans12', 'ans13', 'ans15'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;
		

	}else if(ans1=="No" && ans2=="Body Spray" && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition9');

		// Axe Recharge 24x7 ANS7
		// Axe Recharge Gameface ANS8
		// Axe Dark Temptation ANS3
		// Axe Gold Temptation ANS4
		// Axe Provoke ANS5

		var pages = ['ans3', 'ans4', 'ans5', 'ans7', 'ans8'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 1;

	}else if(ans1=="No" && ans2=="Body Spray" && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition10');

		// Axe Apollo ANS1
		// Axe Blast ANS2
		// Axe Pulse ANS6
		// Axe Recharge Midnight ANS9


		var pages = ['ans1', 'ans2', 'ans6', 'ans9'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;

	}else if(ans1=="No" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && (ans4=="Shower" || ans4=="Zumba")){

		// alert('condition11');

		// Axe Signatur Champion ANS10
		// Axe Signatur Intense ANS11
		// Axe Signatur Rouge ANS14


		var pages = ['ans10', 'ans11', 'ans14'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 1;

	}else if(ans1=="No" && (ans2=="Body Perfume" || ans2=="Perfume" || ans2=="Roll On") && (ans4=="Gym" || ans4=="Yoga")){

		// alert('condition12');

		// Axe Signatur Maverick ANS12
		// Axe Signatur Mysterious ANS13
		// Axe Signatur Suave ANS15

		var pages = ['ans12', 'ans13', 'ans15'];
		var randNumberFromArray = Math.floor(Math.random() * pages.length);
		page = pages[randNumberFromArray];
		slide = 4;
	}

 


    function validateForm(email) {
	    var atpos = email.indexOf("@");
	    var dotpos = email.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
	        return false;
	    }else{
	    	return true;
	    }
	}

	$('.form_skip').click(function(){

		var name = "";
		var email = "";
		var mobile = "";
		var age = "";
		var pincode = "";
		var comments = "";
		var ans = page;

		if(!Lockr.get('data')){

			Lockr.set('data', [{name: name, email: email,mobile:mobile,age:age,pincode:pincode,comments:comments,ans:ans}]);
			mainView.router.loadPage('pillar_screen.html');

		}else{

			data = Lockr.get('data');
			data = data.concat([
				{
					name: name,
					email: email,
					mobile:mobile,
					age:age,
					pincode:pincode,
					comments:comments,
					ans:ans
				}
			]);

			Lockr.set('data',data);
			console.log(Lockr.get('data'));
			mainView.router.loadPage('pillar_screen.html');
		}


	})



	$('.put_to_json').click(function(){

		var name = $('#name').val();
		var email = $('#email').val();
		var mobile = $('#mobile').val();

		if(name ==""){
			$(".confirm_box_form > .confirm_text").html("Please Enter Name.");
			$(".confirm_box_form").fadeIn();
			// myApp.alert("Name Field Required");
			return false;
		}else if(email==""){
			$(".confirm_box_form > .confirm_text").html("Please Enter Email Id.");
			$(".confirm_box_form").fadeIn();
			// myApp.alert("Email Field Required");
			return false;
		}else if(validateForm(email) == false){
			$(".confirm_box_form > .confirm_text").html("Entered Email is not valid.");
			$(".confirm_box_form").fadeIn();
			// myApp.alert("Email Not Valid");
			return false;
		}else if(mobile==""){
			$(".confirm_box_form > .confirm_text").html("Please Enter Mobile Number");
			$(".confirm_box_form").fadeIn();
			// myApp.alert("Mobile Field Required");
			return false;
		}	

		var age = $('#age').val();
		var pincode = $('#pincode').val();
		var comments = $('#comments').val();

		var ans = page;

		if(age==""){
			age="";
		}
		if(pincode==""){
			pincode="";
		}
		if(comments==""){
			comments="";
		}

		if(!Lockr.get('data')){

			Lockr.set('data', [{name: name, email: email,mobile:mobile,age:age,pincode:pincode,comments:comments,ans:ans}, ]);
			mainView.router.loadPage('pillar_screen.html');

		}else{

			data = Lockr.get('data');
			data = data.concat([
				{
					name: name,
					email: email,
					mobile:mobile,
					age:age,
					pincode:pincode,
					comments:comments,
					ans:ans
				}
			]);

			Lockr.set('data',data);
			console.log(Lockr.get('data'));

			mainView.router.loadPage('pillar_screen.html');

		}

	})

})




$$(document).on('pageInit', '.page[data-page="pillar_screen"]', function (e) {
		// before conditions
		console.log('pilllar page called');

		setTimeout(function() {
			console.log(page);
			mainView.router.loadPage(page+'.html');
		}, 5000);
})



$$(document).on('pageInit', '.page[data-page="premium"]', function (e) {
    
	$('.triggerslide'+slide).click();
	console.log('going to load slide'+slide);


	$('#go_back').click(function(){

		mainView.router.back();

	})

	
})

$$(document).on('pageInit', '.page[data-page="question9"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
	
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: false,
		focusOnSelect: true
	});
	
})













