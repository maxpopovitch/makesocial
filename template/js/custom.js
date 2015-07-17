var heightEqualizing = function () {
    var element = $('.tm-whatwedo li');
    var maxHeight = 0;
    element.each(function () {
        var height = $(this).css('height', 'auto').height();
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    element.css('height', maxHeight);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);