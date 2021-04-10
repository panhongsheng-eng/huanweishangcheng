function noticescroll(){
    $(".announcement").animate({
        opacity:0
        //  opacity:0
    },1000,function(){
        $(this).css({opacity:1}).find(":first").appendTo(this)
    })
    // $(".announcement").css({marginTop:"0"}).find(":first").appendTo(this);
}
function start(){
    setInterval(noticescroll,2000);
}