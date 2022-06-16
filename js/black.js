// HTML document is loaded
$win.on("load", function(){     
 "use strict";


  // var preloader
  var loader = $('.preloader');
  var bgpreloader = $('.bg-preloader');

  // var navigation
  var Slink = $('.scroll-link');
  var menumobile = $('#main-menu');
  var navdefault = $('.navbar-default');
  var sTick = $(".navbar-fixed-top");
  var Navactive = $("nav a");
  var subnav =$(".subnav");

  //contactform var
  var contactname = $('#name-contact');
  var contactemail = $('#email-contact, input#email-contact');
  var contactmessage = $('#message-contact');
  var contactsent = $('#send-contact');

  //totop var
  var totop = $('#totop');
  var bodyScroll = $('html,body');

  //slidertext var
  var slidtext = $('#slidertext');



// start function
loader.fadeOut('slow', function() {	
 "use strict";

 // opening slideup
 bgpreloader.slideUp(500);

 // animated transition & scroll onStep
 onStep();
    
	// responsive part
    if($win.width() < 1025) {
	// scroll navigation
	$(".scroll-link").on('click', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
	var offSet = -1;
	var targetOffset = $(id).offset().top - offSet;
    bodyScroll.animate({ scrollTop: targetOffset }, 800);
	menumobile.removeClass('menu-show');
	navdefault.removeClass('fullHeight');
    });
    } else {
	// scroll navigation
	$(".scroll-link").on('click', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
	var offSet = -1;
	var targetOffset = $(id).offset().top - offSet;
    bodyScroll.animate({ scrollTop: targetOffset }, 800);
    });
   }
        
		// active menu on scroll
        $(document).on("scroll", onScroll);
        function onScroll(event){
           var scrollPos = bodyScroll.scrollTop();
           $('#menu-center a').each(function () {
           var currLink = $(this);
           var refElement = $(currLink.attr("href"));
           if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
            }else{
            currLink.removeClass("active");
            }
          });
         }

                     //mobile icon
                     $(".navbar-toggle").on("click", function () {
				     menumobile.toggleClass('menu-show');
					 navdefault.toggleClass('fullHeight'); 
					 });

// animation block menu on scroll
$win.scroll(function() {
	    if ($(".navbar").offset().top > 10) {
	        sTick.addClass("sticky-nav");
			totop.fadeIn(100);
	    } else {
	        sTick.removeClass("sticky-nav");
			totop.fadeOut(100);
	    }
	});
$(document).height(function() { 
		if ($(".navbar").offset().top > 100) {
        	sTick.addClass("sticky-nav");
       		totop.fadeIn(100);
        }
        else {
			sTick.removeClass("sticky-nav");
        	totop.fadeOut(100);
        }							   
	 });

});

    totop.on("click", function(e) {
        e.preventDefault();
        bodyScroll.animate({
            scrollTop: 0
        }, 800);
    });
// end function


// contact form
$(function() {
    contactsent.on('click', function(e) {
        e.preventDefault();
        var e = contactname.val(),
            a = contactemail.val(),
            s = contactmessage.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          contactemail.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #f7c51e",
             "border-right":"none"});
        } else  contactemail.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #959595",
             "border-right":"none"});
		if (0 == e.length) {
            var r = !0;
             contactname.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #f7c51e",
             "border-right":"none"});
        } else contactname.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #959595",
             "border-right":"none"});
        if (0 == s.length) {
            var r = !0;
            contactmessage.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #f7c51e",
             "border-right":"none"});
        } else  contactmessage.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #959595",
             "border-right":"none"});
        return 0 == r && (contactsent.attr({
            disabled: "true",
            value: "Sending..."
        }), $.ajax({
            type: "POST",
            url: "send.php",
            data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
    })
});

//slideshow text home
$(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = slidtext,
        listItems = simple_slideshow.children('.main-text'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});

   // Magnific Popup img
   $('.big-img').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: false
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

// step work
var $containerstep = $('#step-text');
    $containerstep.isotope({
        itemSelector: '.cont',
        filter: '.planing',
        hiddenStyle: {
        opacity: 0
        },
        visibleStyle: {
        opacity: 1
        }
});
$('.filt-step').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ( $this.hasClass('active') ) {
        return false;
        }
    var $optionSet = $this.parents();
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');
            
    var selector = $(this).attr('data-filter');
    $containerstep.isotope({ 
    filter: selector,
});
return false;
});


// service
var $container = $('#services');
    $container.isotope({
        itemSelector: '.service',
        filter: '.passion',
        hiddenStyle: {
        opacity: 0
        },
        visibleStyle: {
        opacity: 1
        }
});
$('.filt-serv').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ( $this.hasClass('selected') ) {
        return false;
        }
    var $optionSet = $this.parents();
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');
            
    var selector = $(this).attr('data-filter');
    $container.isotope({ 
    filter: selector,
});
return false;
});

// projects
var $containerpro = $('#projects-wrap');
    $containerpro.isotope({
        itemSelector: '.item',
        filter: '*'
});
$('.filt-projects').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    if ( $this.hasClass('actived') ) {
        return false;
        }
    var $optionSetpro = $this.parents();
    $optionSetpro.find('.actived').removeClass('actived');
    $this.addClass('actived');
            
    var selector = $(this).attr('data-project');
    $containerpro.isotope({ 
    filter: selector,
});
return false;
});

// owlCarousel gallery
var owl = $("#owl-gal");
        owl.owlCarousel({
        navigation: true,
		autoPlay : 3000,
        stopOnHover : true,
		itemsDesktop : [1600,3],
		itemsDesktopSmall : [1024,3], 
        itemsTablet: [800,2],
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
      });
		
// owlCarousel testimonial
var owl = $("#owl-testimonial");
   owl.owlCarousel({
   slideSpeed : 1000,			   
   items : 1,
   navigation: true,
   itemsDesktop : [1000,1], 
   itemsDesktopSmall : [900,1], 
   itemsTablet: [600,1],
   itemsMobile : false,
   autoPlay : 3000,
   stopOnHover : true,
   navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
});

// owlCarousel brand
var owl = $("#owl-brand");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 2000,
   stopOnHover : true
});	
   
// owlCarousel blog news
var owl = $("#owl-blog");
   owl.owlCarousel({
   items : 3, 
   itemsDesktop : [1000,3], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : [500,1],
   autoPlay : 4000,
   stopOnHover : true
});	
   
  // owl slider home
  var time = 7; // time in seconds
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 
    //Init the carousel
    $("#owl-slider-home").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      transitionStyle : false,
      afterInit : progressBar,
      afterMove : moved,
	  loop : true,
      autoHeight: true,
      touchDrag : false,
      mouseDrag : false,
	  navigation: true,
	   navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ]
    });
 
    //Init progressBar where elem is $("#owl-slider-home")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-slider-home")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

});
// HTML document is loaded end


