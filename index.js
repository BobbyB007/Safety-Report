$(".clickable").click(function(){
    window.location=$(this).data("href");
    return false;
});