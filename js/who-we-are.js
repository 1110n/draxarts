// Carousel
jQuery(function ($) {
    var container = $('#meet-the-team-carousel'),
        ul = container.find('>ul'),
        slides = ul.find('>li'),
        wrap = $('#meet-the-team-carousel-wrapper'),
        prev = wrap.find('.prev-arrow'),
        next = wrap.find('.next-arrow'),
        baseWidth = (slides.outerWidth() + 9);
    
    ul.width(slides.length * baseWidth);
    
    prev.click(function (e) {
        e.preventDefault();
        scroll(-1);
    });
    
    next.click(function (e) {
        e.preventDefault();
        scroll(1);
    });
    
    function scroll (direction) {
        // Scroll by one profile
        var anim = {duration: 1000, easing: 'easeInOutQuad', queue: false};
        var left = parseInt(ul.css('left')) - baseWidth * direction;
        var minLeft = container.width() - ul.width() + 9;
        
        if (left > 0) {
            left = 0;
        } else if (left < minLeft) {
            left = minLeft;
        }
        
        ul.animate({left: left}, anim);
    }
});