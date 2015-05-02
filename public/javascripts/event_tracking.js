$(document).ready(function() {
	// root
	
	// a user clicks [something]
	$('li#product_adjective_menu > a').click(function() {
		_gaq.push(['_trackEvent', 'sentence', 'sentence_filter', 'something']);
	});
	
	// a user clicks [someone]
	$('li#person_adjective_menu > a').click(function() {
		_gaq.push(['_trackEvent', 'sentence', 'sentence_filter', 'someone']);
	});
	
	// a user clicks clever
	$('#tag_product_adjective_0').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'clever']);
	});
	
	// a user clicks edible
	$('#tag_product_adjective_1').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'edible']);
	});
	
	// a user clicks engaging
	$('#tag_product_adjective_2').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'engaging']);
	});
	
	// a user clicks funny
	$('#tag_product_adjective_3').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'funny']);
	});
	
	// a user clicks practical
	$('#tag_product_adjective_4').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'practical']);
	});

	// a user clicks quirky
	$('#tag_product_adjective_5').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'quirky']);
	});

	// a user clicks romantic
	$('#tag_product_adjective_6').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'romantic']);
	});

	// a user clicks scented
	$('#tag_product_adjective_7').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'scented']);
	});

	// a user clicks stylish
	$('#tag_product_adjective_8').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'stylish']);
	});
	
	// a user clicks artistic
	$('#tag_person_adjective_0').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'artistic']);
	});
	
	// a user clicks athletic
	$('#tag_person_adjective_1').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'athletic']);
	});

	// a user clicks domestic
	$('#tag_person_adjective_2').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'domestic']);
	});

	// a user clicks fun-loving
	$('#tag_person_adjective_3').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'fun-loving']);
	});

	// a user clicks geeky
	$('#tag_person_adjective_4').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'geeky']);
	});

	// a user clicks handy
	$('#tag_person_adjective_5').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'handy']);
	});

	// a user clicks outdoorsy
	$('#tag_person_adjective_6').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'outdoorsy']);
	});

	// a user clicks professional
	$('#tag_person_adjective_7').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'professional']);
	});

	// a user clicks sophisticated
	$('#tag_person_adjective_8').parent().click(function() {
		_gaq.push(['_trackEvent', 'adjective', 'sentence_filter', 'sophisticated']);
	});
	
	// single product page 
	
	// a user clicks purchase: initial_cta
	$('article#product h4#initial_cta a').click(function() {
		var retailerName = $('h4#initial_cta a').text().split(" ");
		_gaq.push(['_trackEvent', 'purchase', $('article#product h1#name').text(), retailer[2] + ' initial_cta']);
	});
	
	// a user clicks purchase: available list
	// purchase, ProductName, RetailerName, PositionInAvailableListWhenClicked
	$('article#product section#available_at ul li a').click(function() {
		_gaq.push(['_trackEvent', 'purchase', $('article#product h1#name').text(), $(this).children().first().text(), $(this).parent().index()]);
	});
	
	// a user clicks an action (except 'like')
	$('article#product div.actions:first ul li a').click(function() {
		_gaq.push(['_trackEvent', 'action', $('article#product h1#name').text(), $(this).parent().attr('id')]);
	});
	
	// father's day micro (and ideally most of / all future micros)
	
	// a user clicks the name of a product to go to the single product page
	$('.gift_idea .product_name a').click(function() {
		_gaq.push(['_trackEvent', 'toSPP', $(this).text(), 'product name']);
	});
	
	// a user clicks the image of a product to go to the single product page
	$('.gift_idea a img').click(function() {
		_gaq.push(['_trackEvent', 'toSPP', $(this).parent().parent().prev().find('a').text(), 'product image']);
	});
	
	// a user clicks an available in the sold at list
	$('.gift_idea ul.sold_at li a').click(function() {
		_gaq.push(['_trackEvent', 'purchase', $(this).parent().parent().parent().prev().find('a').text(), $(this).text(), $(this).parent().index()]);
	});
	
	// a user clicks an adjective to go to the master listing of gifts listed under that adjective
	$('.gift_idea .adjectives a').click(function() {
		_gaq.push(['_trackEvent', 'adjective', $(this).closest('section').prev().children('h1').text(), $(this).text()]);
	});
	
});
