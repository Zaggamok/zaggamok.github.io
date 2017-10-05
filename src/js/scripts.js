let pages = [];
let currentPage = '';
let destinationPage = '';
let animationSequence = [];

function doPageTransition() {
	currentPage = $('#stage').find('div').attr('id');
	destinationPage = $(this).text().toLowerCase();
	
	animationSequence = evalPageTransition(currentPage, destinationPage);
	
	slideOut(animationSequence[0]);
	
	slideIn(animationSequence[1]);
}

function doHandleAnimation() {
	
}

function evalPageTransition(curr, dest) {
	let currValue = 0;
	let destValue = 0;
	
	for (var i=0; i<pages.length; i++) {
		if ( pages[i].title == curr ) { currValue = pages[i].pos }
		else if ( pages[i].title == dest ) { destValue = pages[i].pos }
	}
	
	if ( currValue > destValue ) { return  ['right', 'left']}
	else if (currValue < destValue ) { return ['left', 'right'] }
	else { return null }
	
}

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$('#stage').html(this.responseText);
		}
	};
	xhttp.open('GET', '../html/' + destinationPage + '.html', true);
	xhttp.send();
}

function slideOut(dir) {
	$('#stage').toggle('slide', {direction: dir}, '500', loadDoc );

}

function slideIn(dir) {
	$('#stage').toggle('slide', {direction: dir});
}

class Page {
	constructor(title, pos) {
		this.title = title;
		this.pos = pos;
	}
}

function init() {
	// generate Page for each nav element
	
	const navElements = $( 'a.nav-btn' )
	let count = 0;
	for (let value of navElements) {
		let x = $( value ).html().toLowerCase();
		
		pages.push( new Page(x, count) );
		count++;
	}
	
	// add event listener to nav buttons
	$( 'a.nav-btn' ).click( doPageTransition );
	
	// set current page to stage id
	currentPage = $('#stage').find('.container').attr('id')
}

init();