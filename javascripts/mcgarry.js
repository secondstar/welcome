$.event.special.tripleclick = {

    setup: function(data, namespaces) {
        var elem = this, $elem = jQuery(elem);
        $elem.bind('click', jQuery.event.special.tripleclick.handler);
    },

    teardown: function(namespaces) {
        var elem = this, $elem = jQuery(elem);
        $elem.unbind('click', jQuery.event.special.tripleclick.handler)
    },

    handler: function(event) {
        var elem = this, $elem = jQuery(elem), clicks = $elem.data('clicks') || 0;
        clicks += 1;
        if ( clicks === 3 ) {
            clicks = 0;

            // set event type to "tripleclick"
            event.type = "tripleclick";
            
            // let jQuery handle the triggering of "tripleclick" event handlers
            jQuery.event.handle.apply(this, arguments)  
        }
        $elem.data('clicks', clicks);
    }
    
};

soundManager.url = '/swf/'; // directory where SM2 .SWFs live
soundManager.debugMode = false;

function barTop() {
    $("#header-target").animate({
        top: 0
    });
}

function moveSample( leftValue, topValue ) {
    $("#sample").animate({
        top: topValue,
        left: leftValue
    });
}

function smallChris(leftValue) {
    $("#mcgarry").animate({
        width: 280,
        left: leftValue
    });
}

function hideShows() {
    $("#upcoming").animate({
        left: -800
    });
}

function contentFadeOut() {
    $("#photos").animate({
        top: -500
    });
    $("#bio, #about, #contact, #photos, #shows, #pdfs").fadeOut();
}

var $nav;
    
$.fn.animationClick = function(callback, target) {

    var stringTarget = target,
        $target = target ? $(target) : null;
    
    return this.click(function(e) {
        
        if (!$(this).hasClass("current")) {
                
            $nav.removeClass("current");
            $(this).addClass("current");
            
            contentFadeOut();
            barTop();
            
            callback();
            
            hideShows();
            
            if ($target) $target.fadeIn();
            
            window.location.hash = stringTarget;
            
        }
        
        return false;
                
    });
    
}

$(function() {

    $("#photos a");

    var $gary = $("#mcgarry"),
        $tracks = $("#sample"),
        $header = $("#header-target"),
        $about = $("#about"),
        $upcoming = $("#upcoming"),
        $joke;
    
    $nav = $("nav a");

    var origGaryWidth = 549, // or could test after window.load
        origGaryLeft = $gary.position().left,
        origSampleTop = $tracks.position().top,
        origSampleLeft = $tracks.position().left,
        origHeaderTop = $header.css("top"),
        origUpcomingLeft = $upcoming.position().left;
    
    $(".about-link").click(function() {
        if (!$(this).hasClass("current")) {
            $("nav a").removeClass("current");
            $("nav .about-link").addClass("current");
            contentFadeOut();
            barTop();
            moveSample(541,0);
            smallChris(520);
            hideShows();
            $about.fadeIn(); 
        }
    });

    $(".home-link").click(function(e) {
        if (!$(this).hasClass("current")) {
            $("nav a").removeClass("current");
            $("nav .home-link").addClass("current");
            contentFadeOut();
            $gary.animate({
                width: origGaryWidth,
                left: origGaryLeft
            });
            $tracks.animate({
                top: origSampleTop,
                left: origSampleLeft
            });
            $header.animate({
                top: origHeaderTop
            });
            $upcoming.animate({
                left: origUpcomingLeft
            });
        }
    });
    
    var $showLoad = $("#shows ul").html();
    $("#show-target")
        .append($showLoad)
        .find("li:gt(1)").remove();
        
    $("#nav-bio").animationClick(function() {
        moveSample(541, 0);
        smallChris(520);
    }, "#bio");
    
    $("#nav-contact").animationClick(function() {
        moveSample(625, 0);
        smallChris(520);
        $("#pdfs").fadeIn();
    }, "#contact");
    
    $("#nav-photos").animationClick(function() {
        moveSample(20, 0);
        smallChris(20);
        $("#photos").fadeIn().animate({ top: 0 }); 
    }, "#photos");
    

    $(".shows-link").animationClick(function() {
        moveSample(20, 0);
        smallChris(20);
        $("#shows").fadeIn().animate({ left: 375 }); 
    }, "#shows");
    
    
    
    $gary.bind("tripleclick", function() {
    
        $tempDiv = $("<div />", {
            "class": "overlay",
            css: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                "z-index": 9999,
                bottom: 0,
                background: "rgba(0,0,0,0.8)",
                "text-align": "center"
            }
        
        })
        
        $joke = $("<div />", {
            text: "McGarry likes Peanut Chicken!",
            id: "chicken",
            css: {
                "font-size": "60px",
                paddingTop: 60,
                color: "white",
                "text-shadow": "0 0 10px black",
                "text-align": "center",
                position: "relative"
            }
        
        }).appendTo($tempDiv);
        
        $("body").append($tempDiv);
        
        setTimeout("window.location = 'http://www.cooks.com/rec/view/0,1627,158167-247199,00.html';", 4000);
        
    });

    
    var hash = window.location.hash;
    hash = hash.replace(/^#/, '');
    switch (hash) {
        case 'about':
            $("." + hash + "-link:first").trigger("click");
            break;
        case 'shows':
            $("." + hash + "-link:first").trigger("click");
            break;
        case 'contact':
            $("#nav-" + hash ).trigger("click");
            break;
        case 'photos':
            $("#nav-" + hash ).trigger("click");
            break;
        case 'bio':
            $("#nav-" + hash ).trigger("click");
            break;
    }


});
