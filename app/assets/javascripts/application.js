// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .



$( document ).ready(function() 
{
	
	var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

	showTOC(!isMobile && $(window).width() >= 630)
	
	$('#toc-btn').on('click', function(){
		$(this).toggleClass('on');
		if ($(this).hasClass('on')) { 
			showTOC(true); 
		} else { 
			showTOC(false);
		}
	});
	
/* add home link and logo *****************************************************/
	
	var homeUrl    = $('#home-url').comments().html();
	var logoUrl    = $('#logo-url').comments().html();
	
	$('.home-url').attr('href', homeUrl)
	$('.logo-url').attr('src', logoUrl)
	
/* font size *******************************************************************/

	// if (isMobile) {
	// 	$('.markdown').attr('font-size','23px!importan')
	// } else { 
	// 	$('.markdown').attr('font-size','30px!important')
	// }


/*  google analytics  *********************************************************/

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	ga('create', 'UA-71741017-1', 'auto');
	ga('send', 'pageview');
	// END google analytics

});// END document.ready


/*  function Defs  ***********************************************************/

function showTOC(boolean) 
{
	if ( boolean ) {
		$('#reader').css('width', '64%').css('padding-right', '2%');
		$('#sidebar').css('display', 'inline-block');
		$('.mono').css('white-space','pre').css('overflow','scroll');
		$('#toc-btn').addClass('on');
		$('#topbar').css('width', '68%');
		$('.topbar-btn').css('width', '8%');
		$('.topbar-btn-1-7').css('left', '4%');
		$('.topbar-btn-2-7').css('left', '13%');
		$('.topbar-btn-3-7').css('left', '22%');
		$('.topbar-btn-4-7').css('left', '31%');
		$('.topbar-btn-5-7').css('left', '40%');
		$('.topbar-btn-6-7').css('left', '49%');
		$('.topbar-btn-7-7').css('left', '58%');
		
	} else {
		$('#reader').css('width', '96%');
		$('#sidebar').css('display', 'none')
		$('.mono').css('white-space','pre-wrap').css('overflow','initial')
		$('#toc-btn').removeClass('on')
		$('#topbar').css('width', '99%')
		$('.topbar-btn').css('width', '12%');
		$('.topbar-btn-1-7').css('left', '4%');
		$('.topbar-btn-2-7').css('left', '17%');
		$('.topbar-btn-3-7').css('left', '30%');
		$('.topbar-btn-4-7').css('left', '43%');
		$('.topbar-btn-5-7').css('left', '56%');
		$('.topbar-btn-6-7').css('left', '69%');
		$('.topbar-btn-7-7').css('left', '82%');
			}
}
