var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li p'),
            element2 = $('.tm-casestudies li a span'),
            element3 = $('.tm-our-work li a span'),
            element4 = $('.tm-want-to-see-more .item'),
            element5 = $('.tm-want-to-see-more .tm-cell-block-01'),
            element6 = $('.our-clients ul li div span'),
            element7 = $('#quote-message a'),
            element8 = $('.tm-values li>div'),
            i,
            j,
            item,
            p, h4, ph4, paddingTop, paddingBottom,
            elements = [element1, element2, element3, element4, element5, element6, element7, element8];

    var maxHeight;

    (function () {
        for (i = 0; i < elements.length; i++) {
            maxHeight = 0;
            elements[i].each(function () {
                switch (i) {
                    case 6:
                    case 7:
                        height = $(this).css('height', 'auto').outerHeight();
                        p = $(this).find('p').css('height', 'auto').height();
                        h4 = $(this).find('h4').css('height', 'auto').outerHeight();
                        paddingTop = $(this).css('padding-top');
                        paddingBottom = $(this).css('padding-bottom');
                        ph4 = p + h4;
                        if (height < ph4) {
                            height = ph4 + parseInt(paddingTop) + parseInt(paddingBottom);
                        }

                        if (height > maxHeight) {
                            maxHeight = height;
                        }
                        break;
                    default:
                        height = $(this).css('height', 'auto').height();
                }
                if (height > maxHeight) {
                    maxHeight = height;
                }
                elements[i].css('height', maxHeight);
                item = $('.tm-want-to-see-more .item').height();
                $('.tm-want-to-see-more [class^="col-"]').css('height', item);
            });
        }
    })();

    for (var position = 1; position <= 6; position++) {
        whyUsImgHeight(position);
    }

    var joinheight = $('.tm-join-us-text').outerHeight();
    $('[class*="tm-join-us-img"]').css('height', joinheight);

    function whyUsImgHeight(position) {
        var whyTextSelector = '.tm-why-us-text-' + appendZero(position);
        var whyImgSelector = '.tm-why-us-img-' + appendZero(position);
        var outerHeight = $(whyTextSelector).outerHeight();
        $(whyImgSelector).css('height', outerHeight);
    }

    function appendZero(number) {
        return number > 10 ? number : '0' + number;
    }
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
    $('#contact-us-content').closest('body').find('a[href="contact-us"]').addClass('tm-active');

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

    //goto contact-us#quote and show #quote tab anyway
    $('a[href*="contact-us#quote"]').click(function () {
        $('#quote-message a[href="#quote"]').tab('show');
        $('#quote-message a[href="#quote"]').on('shown.bs.tab', function () {
            window.location = "#quote";
        });
    });
});