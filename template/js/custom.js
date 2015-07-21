var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li');
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
    
    var why1height = $('.tm-why-us-text-01').outerHeight();
    $('.tm-why-us-img-01').css('height', why1height);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);

$(document).ready(function () {
    $('#why-us-content').closest('body').find('a[href*="why-us"]').addClass('tm-active');
});