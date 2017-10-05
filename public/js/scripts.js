'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pages = [];
var currentPage = '';
var destinationPage = '';
var animationSequence = [];

function doPageTransition() {
	currentPage = $('#stage').find('div').attr('id');
	destinationPage = $(this).text().toLowerCase();

	animationSequence = evalPageTransition(currentPage, destinationPage);

	slideOut(animationSequence[0]);

	slideIn(animationSequence[1]);
}

function doHandleAnimation() {}

function evalPageTransition(curr, dest) {
	var currValue = 0;
	var destValue = 0;

	for (var i = 0; i < pages.length; i++) {
		if (pages[i].title == curr) {
			currValue = pages[i].pos;
		} else if (pages[i].title == dest) {
			destValue = pages[i].pos;
		}
	}

	if (currValue > destValue) {
		return ['right', 'left'];
	} else if (currValue < destValue) {
		return ['left', 'right'];
	} else {
		return null;
	}
}

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			$('#stage').html(this.responseText);
		}
	};
	xhttp.open('GET', '../html/' + destinationPage + '.html', true);
	xhttp.send();
}

function slideOut(dir) {
	$('#stage').toggle('slide', { direction: dir }, '500', loadDoc);
}

function slideIn(dir) {
	$('#stage').toggle('slide', { direction: dir });
}

var Page = function Page(title, pos) {
	_classCallCheck(this, Page);

	this.title = title;
	this.pos = pos;
};

function init() {
	// generate Page for each nav element

	var navElements = $('a.nav-btn');
	var count = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = navElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;

			var x = $(value).html().toLowerCase();

			pages.push(new Page(x, count));
			count++;
		}

		// add event listener to nav buttons
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	$('a.nav-btn').click(doPageTransition);

	// set current page to stage id
	currentPage = $('#stage').find('.container').attr('id');
}

init();