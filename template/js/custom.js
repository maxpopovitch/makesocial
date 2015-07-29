var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li p'),
            element2 = $('.tm-casestudies li a span'),
            element3 = $('.tm-our-work li a span'),
            element4 = $('.tm-want-to-see-more .item'),
            element5 = $('.tm-want-to-see-more .tm-cell-block-01'),
            element6 = $('.tm-values li>div'),
            i,
            item,
            elements = [element1, element2, element3, element4, element5, element6];

    var maxHeight;

    (function () {
        for (i = 0; i < elements.length; i++) {
            maxHeight = 0;
            elements[i].each(function () {
                switch (i) {
                    case 5:
                        height = $(this).css('height', 'auto').outerHeight();
                        break;
                    default:
                        height = $(this).css('height', 'auto').height();
                }
                if (height > maxHeight) {
                    maxHeight = height;
                }
                elements[i].css('height', maxHeight);
                item = element4.height();
                $('.tm-want-to-see-more [class^="col-"]').css('height', item);
            });
        }
    })();

    var why1height = $('.tm-why-us-text-01').outerHeight();
    var why2height = $('.tm-why-us-text-02').outerHeight();
    var why3height = $('.tm-why-us-text-03').outerHeight();
    var why4height = $('.tm-why-us-text-04').outerHeight();
    var why5height = $('.tm-why-us-text-05').outerHeight();
    var why6height = $('.tm-why-us-text-06').outerHeight();
    var joinheight = $('.tm-join-us-text').outerHeight();
    $('.tm-why-us-img-01').css('height', why1height);
    $('.tm-why-us-img-02').css('height', why2height);
    $('.tm-why-us-img-03').css('height', why3height);
    $('.tm-why-us-img-04').css('height', why4height);
    $('.tm-why-us-img-05').css('height', why5height);
    $('.tm-why-us-img-06').css('height', why6height);
    $('[class*="tm-join-us-img"]').css('height', joinheight);
};

$(window).load(heightEqualizing);
$(window).resize(heightEqualizing);

$(document).ready(function () {
    //adding classes for main navigation menu
    $('#why-us-content').closest('body').find('a[href="why-us"]').addClass('tm-active');
    $('#meet-us-content').closest('body').find('a[href="meet-us"]').addClass('tm-active');
    $('#our-process-content').closest('body').find('a[href="our-process"]').addClass('tm-active');
    $('[id*="services"]').closest('body').find('a[href="services"]').addClass('tm-active');
    $('#our-work-content').closest('body').find('a[href="our-work"]').addClass('tm-active');

    //adding classes for navigation submenu
    $('#services-social-content').closest('body').find('a[href="social-networking-design-development"]').addClass('tm-active');
    $('#services-web-content').closest('body').find('a[href="web-design-and-development"]').addClass('tm-active');
    $('#services-mobile-content').closest('body').find('a[href="mobile-application-development"]').addClass('tm-active');
    $('#services-prototyping-content').closest('body').find('a[href="prototyping"]').addClass('tm-active');
    $('#services-branding-content').closest('body').find('a[href="corporate-identity-and-brand-design"]').addClass('tm-active');
    $('#services-strategy-and-planning-content').closest('body').find('a[href="strategic-planning-services"]').addClass('tm-active');
    $('#services-seo-content').closest('body').find('a[href="search-engine-optimization"]').addClass('tm-active');
    $('#services-copywriting-content').closest('body').find('a[href="copywriting"]').addClass('tm-active');

    //rearranging default hrefs with search engine optimized
    $('a[href="services"]').click(function () {
        window.location.href = "social-networking-design-development";
        return false;
    });
});