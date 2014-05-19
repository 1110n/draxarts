jQuery(function ($) {
    resizeImages();
    
    $('#home-slider img').on('load', resizeImages);
    $(window).resize(resizeImages);
    
    var nav = $('#main-nav');
    var win = $(window);
    var toTop = $('#to-top');
    
    win.scroll(function () {
        var top = win.scrollTop();
        nav.css('top', top);
        
        if(top > 100) {
            toTop.show();
        } else {
            toTop.hide();
        }
    }).scroll();
    
    toTop.click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: "0px" }, 200);
    });
});

function resizeImages () {
    var imgs = $('#home-slider img');
    var win = $('#wrapper > .slide');
    var width = win.width();
    var height = win.height();
    
    // For every image...
    imgs.each(function () {
        var img = $(this);
        
        // What shall we resize?
        var widthRatio = img.width() / width;
        var heightRatio = img.height() / height;
        var lowerRatio = Math.min(widthRatio, heightRatio);
        
        img.removeAttr('width').removeAttr('height');
        
    /**** FOR DRAX'S REQUEST: Set images to 100% *****/
    /*
        if(widthRatio === lowerRatio) {
            img.attr('width', width);
        } else {
            img.attr('height', height);
        }
        */
        
        // Center
        if(img.closest('li').hasClass('slide-3')) {
            img.css('top', Math.max((height - img.height()) / 2, -100)); // The top of the image should always be visible
        } else {
            img.css('top', (height - img.height()) / 2); // The top of the image should always be visible
        }
        
        img.css('left', (width - img.width()) / 2);
    });
}

