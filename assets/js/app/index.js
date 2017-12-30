jQuery.noConflict();

(function ($) {

    let a = [1, 2, 3, 4];

    $.each(a, function (item) {
        console.log(item)
    })

})(jQuery);