jQuery(function ($) {
    resizeImages();
    
    $('#home-slider img').load(resizeImages);
    $(window).resize(resizeImages);
});

function resizeImages () {
    var imgs = $('#wrapper .slide img');
    var slides = $('#wrapper .slide');
    var win = $(window);
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
        var imgWidth = img.width();
        var imgHeight = img.height();

        img.attr('height', imgHeight / lowerRatio);
        img.attr('width', imgWidth / lowerRatio);
        
        // Center
        img.css('top', (height - img.height()) / 2); // The top of the image should always be visible
        img.css('left', (width - img.width()) / 2);
    });
    
    // For every image...
    slides.each(function () {
        var slide = $(this);
        
        // What shall we resize?
        var height = win.height();
        slide.css('height', height);
    });
}

