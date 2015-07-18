var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li p');
    var element2 = $('.tm-casestudies li span');
    var maxHeight1 = 0;
    var maxHeight2 = 0;
    element1.each(function () {
        var height = $(this).css('height', 'auto').height();
        if (height > maxHeight1) {
            maxHeight1 = height;
        }
    });
    element2.each(function () {
        var height = $(this).css('height', 'auto').height();
        if (height > maxHeight2) {
            maxHeight2 = height;
        }
    });

    element1.css('height', maxHeight1);
    element2.css('height', maxHeight2);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);