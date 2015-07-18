var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li').find('p');
    var element2 = $('.tm-casestudies li').find('span');
    var maxHeight1 = 0;
    var maxHeight2 = 0;
    element1.each(function () {
        var height1 = $(this).css('height', 'auto').height();
        if (height1 > maxHeight1) {
            maxHeight1 = height1;
        }
    });
    element2.each(function () {
        var height2 = $(this).css('height', 'auto').height();
        if (height2 > maxHeight2) {
            maxHeight2 = height2;
        }
    });

    element1.css('height', maxHeight1);
    element2.css('height', maxHeight2);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);