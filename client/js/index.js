//jQuery(document).ready(function($) {
//    $(".royalSlider").royalSlider();
//});
$(document).ready(function(){
$("#nav li").on("click", function(){
    $("#nav li").removeClass("active"); //удаляем класс во всех вкладках
    $(this).addClass("active"); //добавляем класс текущей (нажатой)
});
    $('.carousel').carousel()
});
