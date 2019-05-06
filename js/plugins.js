$(document).ready(function(){
    
    // Nice Scroll
    
    $("body").niceScroll();
    
    
    $(".carousel").carousel({
        
        interval:5000
        
    });
    
    // show color option 
    
    $(".animated-gear").click(function () {
        
        $(".option-box").toggleClass("test");
        
    });
    
    // Change Theme Color On Click
    
    $(".color-option ul li").click(function () {
        
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
    })

    var scrollButton = $("#scroll-up");
    
    $(window).scroll(function(){
        
        if( $(this).scrollTop() >= 600)
            {
                scrollButton.fadeIn(900)
            }
        else
            {
                scrollButton.fadeOut()
            }
        
    })
    
    scrollButton.click(function(){
            
            $("html,body").animate({scrollTop : 0},700)
            
        })
    
});

// loading screen

$(window).load(function()
{
    $(".loading-overlay .sk-cube-grid").fadeOut(function(){
        
        $("body").css({"overflow":"auto"})
        $(this).parent().fadeOut(function(){
            
            $(this).remove();
            
        })
        
    });
    
})