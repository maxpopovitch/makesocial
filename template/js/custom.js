var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li'),
        element2 = $('.tm-casestudies li').find('span'),
        element3 = $('.tm-values li>div'),
        i,
        elements = [element1, element2, element3];

    var maxHeight;

    (function () {
        for (i = 0; i < elements.length; i++) {
            maxHeight = 0;
            elements[i].each(function () {
                switch (i) {
                    case 2:
                        height = $(this).css('height', 'auto').outerHeight();
                        break;
                    default:
                        height = $(this).css('height', 'auto').height();
                }
                if (height > maxHeight) {
                    maxHeight = height;
                }
                elements[i].css('height', maxHeight);
            });
        }
    })();

    var why1height = $('.tm-why-us-text-01').outerHeight();
    var why2height = $('.tm-why-us-text-02').outerHeight();
    $('.tm-why-us-img-01').css('height', why1height);
    $('.tm-why-us-img-02').css('height', why2height);
};

$(window).resize(heightEqualizing);
$(document).ready(heightEqualizing);

$(document).ready(function () {
    $('#why-us-content').closest('body').find('a[href*="why-us"]').addClass('tm-active');
});