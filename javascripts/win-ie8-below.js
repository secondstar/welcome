$(document).ready(function() {
	// give drop-down menu a bottom border since IE8 and earlier don't support :last-child in CSS
	$('ul.submenu li:last-child').css('border-bottom', '8px solid #69A1B9');
	
	// because IE8 and earlier don't support nth-child selector
	$('article#product section#available_at ul li:nth-child(even)').css('background-color', '#DFE0E1');
});
