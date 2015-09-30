//jQuery(document).ready(function($) {
//    $(".royalSlider").royalSlider();
//});
$(document).ready(function(){
$("#nav li").on("click", function(){
    $("#nav li").removeClass("active"); //удаляем класс во всех вкладках
    $(this).addClass("active"); //добавляем класс текущей (нажатой)
});
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
