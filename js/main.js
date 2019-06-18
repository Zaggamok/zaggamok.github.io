"use strict";

//const ScrollMagic = require('scrollmagic');
//require('waypoints/lib/jquery.waypoints.js'); // see: https://github.com/imakewebthings/waypoints/issues/458
//require('waypoints/lib/shortcuts/sticky.min.js');
function main() {
  initBurgerMenu();
  setScrollAnimationTargets(); // init homepage nav

  if ($('#home').length === 1) {
    initHomepageNav();
  } else {
    console.log('not home');
  } // init lightboxes


  initVideoLightbox();
  initTCsLightbox();
}

$(document).ready(function () {
  main();
});
/* Navigation */

/**
 * special nav used for homepage which is transparent above the fold
 * if above fold, nav.has-background-transparent
 * if below fold, nav.below-fold
 */

function initHomepageNav() {
  hideNavBackground();
  $(window).scroll(hideNavBackground);
}

function hideNavBackground() {
  console.log('hideNavBackground()');
  var nav = $('nav');
  var scrollTop = $(document).scrollTop();
  var windowHeight = $(window).height();

  if (scrollTop >= windowHeight) {
    console.log("scrollTop >= windowHeight");
    nav.removeClass('has-background-transparent');
    nav.addClass('below-fold');
  } else {
    console.log("scrollTop !>= windowHeight");
    nav.addClass('has-background-transparent');
    nav.removeClass('below-fold');
  }
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

/**
 * Uses element selector to apply given content, so that element clicked triggers content lightbox
 * @param element 				Selector: element to be used for featherlight link
 * @param content 				String: HTML used in lightbox content
 */


function applyFeatherlight(element, content) {
  // $('.myElement').featherlight($content, configuration);
  //console.log( `featherlight trigger: ${ element }, ${ content }` );
  $(element).featherlight(content);
} // DEPRECATED - no longer using icons with lightboxes
// function initIconLightboxes() {
// 	const iconIds = ['form', 'environment', 'flexibility', 'award']
// 	for ( let id of iconIds ) {
// 		const html = $( `div[data-featherlight-content="${ id }"]` ).html();
// 		const sel = `#${ id }`;
// 		applyFeatherlight( $( sel ), html );
// 	}
// }

/**
 * init Terms and Conditions lightbox
 */


function initTCsLightbox() {
  var tcs = "<div class=\"lightbox-content\">\n\t\t<h1 class=\"has-text-centered\">Terms &amp; Conditions</h1>\n\t\t<h2>Summary</h2>\n\t\t<p>We would like to send you a short series of emails that comprises our eBrochure. It\u2019s a curated content piece designed to pique your interest in our brand. Enjoy what Pavilions has to offer you.</p>\n\t\t<p>We will not distribute your information in any way, nor issue spam to your inbox. If you have any questions, comments, or concerns, please contact us directly at contact@pavilions.net.au</p>\n\t\t<h2>Frequency</h2>\n\t\t<p>the frequency of the newletter issues will be at most weekly, with a limited duration.</p>\n\t\t<h2>Limited Liability</h2>\n\t\t<p>We reserve the sole right to unsubscribe users / visitors from or newsletter service, without notice . We will do so with any subscriber we deem registered with fake data.</p>\n\t\t<h1 class=\"has-text-centered\">Privacy Policy</h1>\n\t\t<p>We will not communicate / spread / publish or otherwise give away your address. You'll be able to change your subscription settings or to delete it alltogether anytime.</p>\n\t</div>";
  applyFeatherlight($('#tcs'), tcs);
}
/**
 * Smooth scroll for all #id links on page
 * source: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
 */


function setScrollAnimationTargets() {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
}
/**
 * init video lightbox within glide gallery. Slide must contain selector '.video-launcher'
 */


function initVideoLightbox() {
  var videoSlides = $('.video-launcher');

  if (videoSlides.length > 0) {
    for (var i = 0; i < videoSlides.length; i++) {
      var slide = $(videoSlides[i]);
      var videoUrl = slide.attr('data-video');
      var videoHtml = "<div class=\"lightbox-content\">\n\t\t\t\t<video id=\"video-slide-".concat(i, "\" autoplay controls>\n\t\t\t\t\t<source type=\"video/mp4\" src=\"").concat(videoUrl, "\">\n\t\t\t\t\tYour browser does not appear to support HTML5 videos :(\n\t\t\t\t</video>\n\t\t\t</div>");
      applyFeatherlight(slide, videoHtml);
      $("video-slide-".concat(i)).click(function () {
        video.load();
        video.play();
      });
    }
  } else {
    console.log('no video slides detected');
  }
}