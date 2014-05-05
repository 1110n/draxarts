jQuery(function ($) {
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
