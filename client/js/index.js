
$(document).ready(function(){
//    $("#nav li").on("click", function(){
//        $("#nav li").removeClass("active");
//        $(this).addClass("active");
//    });

    $('.carousel').carousel();
    $(function() {
        $(".partners img")
            .mouseover(function() {
                var src = $(this).attr("src").match(/[^\.]+/) + "_over.png";
                $(this).attr("src", src);
            })
            .mouseout(function() {
                var src = $(this).attr("src").replace("_over.png", ".png");
                $(this).attr("src", src);
            });
    });
});
//fonts_dir = "../../Wellteam/client/fonts"