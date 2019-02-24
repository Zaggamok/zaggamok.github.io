(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//const ScrollMagic = require('scrollmagic');
//require('waypoints/lib/jquery.waypoints.js'); // see: https://github.com/imakewebthings/waypoints/issues/458
//require('waypoints/lib/shortcuts/sticky.min.js');
function main() {
  initBurgerMenu(); // mobile burger nav

  if ($('#home').length === 1) {
    // sticky nav on home
    hideNavBackground();
    stickyNav();
  } else {
    console.log('not home');
  } // let html = $( 'div[data-featherlight-content="environment"]' ).html();
  // applyFeatherlight( $('#form'), html );


  initIconLightboxes();
  initTCsLightbox();
}

$(document).ready(function () {
  main();
});
/* Navigation */

function stickyNav() {
  var navbar = $('nav'); //const headerHeight = $( '.hero' ).height();

  var heightOffset = $(window).height() * 0.10;
  $(window).scroll(function () {
    if ($(this).scrollTop() > heightOffset && $('nav').hasClass('triggered') === false) {
      navbar.addClass('is-visible');
      navbar.addClass('triggered');
      console.log('showing');
    } else if ($('nav').hasClass('triggered') === false) {
      navbar.removeClass('is-visible');
      console.log('hiding');
    }
  }); // also set timer for appearance given no interaction

  setTimeout(function () {
    navbar.addClass('is-visible');
    navbar.addClass('triggered');
  }, 1200);
}

function hideNavBackground() {
  $(window).scroll(function () {
    var nav = $('nav');
    var scrollTop = $(document).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop >= windowHeight) {
      nav.removeClass('has-background-transparent');
      console.log("scrollTop > windowHeight");
    } else {
      nav.addClass('has-background-transparent');
    }
  });
} // Burger menu


function initBurgerMenu() {
  var burgerMenu = $('#burgerMenu');
  var nav = $('#navMenu');
  $(burgerMenu).click(function () {
    console.log('burgerMenu click');
    $(burgerMenu.toggleClass('is-active'));
    $(nav).toggleClass('is-active');
  });
}
/* Featherlight */
// Uses element selector to apply given content, so that element clicked triggers content lightbox
// @param element 				Selector: element to be used for featherlight link
// @param content 				String: HTML used in lightbox content


function applyFeatherlight(element, content) {
  // $('.myElement').featherlight($content, configuration);
  //console.log( `featherlight trigger: ${ element }, ${ content }` );
  $(element).featherlight(content);
}

function initIconLightboxes() {
  var iconIds = ['form', 'environment', 'flexibility', 'award'];

  for (var _i = 0; _i < iconIds.length; _i++) {
    var id = iconIds[_i];
    //console.log(`id = ${ id }`)
    var html = $("div[data-featherlight-content=\"".concat(id, "\"]")).html(); //console.log( html );

    var sel = "#".concat(id); //console.log(`selector = ${ sel }`)

    applyFeatherlight($(sel), html);
  }
}

function initTCsLightbox() {
  var tcs = "<div class=\"lightbox-content\">\n\t\t<h1 class=\"has-text-centered\">Terms &amp; Conditions</h1>\n\t\t<h2>Summary</h2>\n\t\t<p>We would like to send you a short series of emails that comprises our eBrochure. It\u2019s a curated content piece designed to pique your interest in our brand. Enjoy what Pavilions has to offer you.</p>\n\t\t<p>We will not distribute your information in any way, nor issue spam to your inbox. If you have any questions, comments, or concerns, please contact us directly at contact@pavilions.net.au</p>\n\t\t<h2>Frequency</h2>\n\t\t<p>the frequency of the newletter issues will be at most weekly, with a limited duration.</p>\n\t\t<h2>Limited Liability</h2>\n\t\t<p>We reserve the sole right to unsubscribe users / visitors from or newsletter service, without notice . We will do so with any subscriber we deem registered with fake data.</p>\n\t\t<h1 class=\"has-text-centered\">Privacy Policy</h1>\n\t\t<p>We will not communicate / spread / publish or otherwise give away your address. You'll be able to change your subscription settings or to delete it alltogether anytime.</p>\n\t</div>";
  applyFeatherlight($('#tcs'), tcs);
}
/* Inactive */
// create Waypoint for chapters
// @param el 					jQuery selector for Waypoint element
// function createStickyChapter( el ) {
// 	const sticky = new Waypoint.Sticky({
// 		element: el,
// 		handler: function() {
// 			console.log('chapter waypoint triggered');
// 			//$( el ).toggleClass( 'fixed' );
// 		}
// 	});
// 	console.log('chapter waypoint created');
// }

/*
// sticky waypoints for chapter images
const sticky = new Waypoint.Sticky({
	element: $( '.story' )[0]
})
*/
// function fixImage() {
// 	const storyText = $( '#chapter-1 .story-text' );
// 	const windowHeight = $( window ).height();
// 	const storyTextHeight = $( storyText ).height();
// 	console.log(`window height: ${ windowHeight }, story text height: ${ storyTextHeight }`);
// }

},{}]},{},[1]);
