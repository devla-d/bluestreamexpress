/**
 * Back To Top function
**/
// wow
//wow
// on click search bar 

jQuery(document).ready(function($){
  var $ = jQuery;
  new WOW().init();
});

jQuery(document).ready(function($){
  var $ = jQuery;
  jQuery(".search-bth .search-icon").click(function(){

  jQuery(".search-bth .search-icon").css("display","none");
  jQuery(".navbar").css("display","none");
  jQuery(".search-bth input").css("display","block");
  jQuery(".search-bth .close").css("display","block");
});
jQuery(".search-bth .close").click(function(){
  jQuery(".search-bth .close").css("display","none");
  jQuery(".search-bth input").css("display","none");
  jQuery(".search-bth .search-icon").css("display","block");
  jQuery(".navbar").css("display","block");
});


// on click search bar 

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.btt-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});

/**
 * Smooth Scrolling
**/

jQuery(document).ready(function ($) {
   // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

/**
 * Global smart resize function
**/

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100); 
      };
  }
    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

/**
 * Controls the mobile navigation
**/

jQuery(document).ready(function(){
    $('.navbar-toggle').on('click', function(){
        $(this).toggleClass('collapsed');
        $('.mobile-navbar').slideToggle();
        $('body').toggleClass('no-scroll');
    });
})

/**
 * Prevents menu scroll on iOS devices
**/

jQuery(document).ready(function() {
    $('.navbar-toggle').on('click', function(){
      if($('body').hasClass('no-scroll')) {
        document.ontouchmove = function (e) {
          e.preventDefault();
        }
      } else {
        document.ontouchmove = function (e) {
          return true;
        }
      }
    });
});

/**
 * Allows same height columns
**/

jQuery(document).ready(function($){
    $(function() {
        $('.box').matchHeight();
    });
});

jQuery(document).ready(function($){
	var site_url = $('#siteurl').val();
	$(".btn-red img").attr("src","");
	$(".btn-red img").attr("src",  site_url + "/wp-content/uploads/2019/02/arrow.svg");
	
  $(".btn-red").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/red-arrows.svg");
  });
  $(".btn-red").mouseleave(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });

  $(".btn-blue").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/blue-arrow-filled.svg");
  });
  $(".btn-blue").mouseleave(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });
  $("#pkg-cour").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });
  $("#pkg-truckloadless").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });
  $("#pkg-truckload").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });
  $("#pkg-logistic").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/arrow.svg");
  });
  $(".page-template-page-governance .btn-download, .search .btn-download").mouseenter(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/02/download-arrow.png");
  });
  $(".page-template-page-governance .btn-download, .search .btn-download").mouseleave(function () {
    $(this).find('img').attr("src", site_url + "/wp-content/uploads/2019/01/download-arrow.png");
  });

  $('.btn-news').mouseenter(function(){
    $(this).find('img').attr('src', site_url + '/wp-content/uploads/2019/02/red-plus.svg');
  });
  $('.btn-news').mouseenter(function(){
    $(this).find('img').attr('src', site_url + '/wp-content/uploads/2019/02/plus.svg');
  });

  
  
    
});


!function(){var a=function(a,b){var c=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c);var d=c.getContext("2d");if(c.width=c.height=b.size,a.appendChild(c),window.devicePixelRatio>1){var e=window.devicePixelRatio;c.style.width=c.style.height=[b.size,"px"].join(""),c.width=c.height=b.size*e,d.scale(e,e)}d.translate(b.size/2,b.size/2),d.rotate((-0.5+b.rotate/180)*Math.PI);var f=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(f-=b.scaleLength+2);var g=function(a,b,c){c=Math.min(Math.max(0,c||1),1),d.beginPath(),d.arc(0,0,f,0,2*Math.PI*c,!1),d.strokeStyle=a,d.lineWidth=b,d.stroke()},h=function(){var a,c,e=24;d.lineWidth=1,d.fillStyle=b.scaleColor,d.save();for(var e=24;e>=0;--e)0===e%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),d.fillRect(-b.size/2+a,0,c,1),d.rotate(Math.PI/12);d.restore()};Date.now=Date.now||function(){return+new Date};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();this.clear=function(){d.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){this.clear(),b.scaleColor&&h(),b.trackColor&&g(b.trackColor,b.lineWidth),d.lineCap=b.lineCap;var c;c="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&g(c,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):i(e)}.bind(this);i(e)}.bind(this)},b=function(b,c){var d,e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,renderer:a,easing:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}},f={},g=0,h=function(){this.el=b,this.options=f;for(var a in e)e.hasOwnProperty(a)&&(f[a]=c&&"undefined"!=typeof c[a]?c[a]:e[a],"function"==typeof f[a]&&(f[a]=f[a].bind(this)));f.easing="string"==typeof f.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[f.easing])?jQuery.easing[f.easing]:e.easing,d=new f.renderer(b,f),d.draw(g),b.dataset&&b.dataset.percent&&this.update(parseInt(b.dataset.percent,10))}.bind(this);this.update=function(a){return a=parseInt(a,10),f.animate?d.animate(g,a):d.draw(a),g=a,this}.bind(this),h()};window.EasyPieChart=b}();

var options = {
  scaleColor: false,
  trackColor: 'rgba(255,255,255,0.4)',
  barColor: '#ee3c42',
  lineWidth: 10,
  lineCap: 'butt',
  size: 300
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});

/*jQuery(window).resize(function(){
  if ( jQuery(window).width() <= 991) { 
    location.reload();
  }
});
*/
/*jQuery(window).on('resize', function(){
  if ( jQuery(window).width() <= 991) { 
    this.location.href = this.location.href;
  }
});*/


/*jQuery(document).ready(function() {
   jQuery(".single-press_releases table").clone(true).appendTo('table').addClass('clone');   
 });*/

jQuery(document).ready ( function () {
    $('table').wrap('<div id="table-scroll"></div>');
    $('table').addClass('table table-responsive');
});