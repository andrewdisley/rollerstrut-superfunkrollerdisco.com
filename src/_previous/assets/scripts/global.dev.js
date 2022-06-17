/*!
	Site:		Rollerstrut: Superfunk Roller Disco
	File:		/assets/scripts/global.js
	Author:		Andrew Disley, Simplified http://simplified.co.uk/
	Version:	2010-09-18
----------------------------------------------- */

/*	Global Configuration
----------------------------------------------- */
var $j = jQuery;
var isIE = false;
var isIE6 = false;
var isSafari = false;

/*	Global Literal Object: Site-wide functions
----------------------------------------------- */
var SGlobal = {

	/* Configuration, Flags and Messages */

	/* jQuery Object References  */
	jEOHTML: null,

	/* Utility: Browser Tests / Specific Fixes/Hooks */
	utilBrowserTests : function() {

		if ($j.browser.msie) { isIE = true; }

		/* Detect if User Agent is IE6 using object detection, apply fix for background flicker bug */
		if (typeof document.body.style.maxHeight == 'undefined') { isIE6 = true; try { document.execCommand('BackgroundImageCache', false, true); } catch(e) { } }

		/* Detect if User Agent is Safari, add class '.safari' to div#Container */
		if ($j.browser.safari) { isSafari = true; $j('div#Container').addClass('safari'); }

	},

	init : function() {

		var cc = this;

		/* ADD class to body so we can apply CSS only for when jQuery is available, different to hasJS */
		cc.jEOHTML = $j('html');
		cc.jEOHTML.addClass('jQ');

		cc.utilBrowserTests();

	}

};

/*	DOM Ready events
----------------------------------------------- */
$j(function() {

	SGlobal.init();

	if ($j('figure.carousel .items').length) {

		$j('figure.carousel .items').accessibleCarousel({
			itemElement: 'img',
			autoRotate: true
		});

	}

	$j('#kuujku-kuujku').val('Your email address').one("focus", function() { $j(this).val(''); });

});