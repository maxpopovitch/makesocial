var heightEqualizing = function () {
    var element1 = $('.tm-whatwedo li p'),
            element2 = $('.tm-whatwedo li h5'),
            element3 = $('.tm-casestudies li a span'),
            element4 = $('.tm-our-work li a span'),
            element5 = $('.tm-want-to-see-more .item'),
            element6 = $('.tm-want-to-see-more .tm-cell-block-01'),
            element7 = $('.our-clients ul li div span'),
            element8 = $('#quote-message a'),
            element9 = $('.tm-values li>div'),
            i,
            j,
            item,
            p, h4, ph4, paddingTop, paddingBottom,
            elements = [element1, element2, element3, element4, element5, element6, element7, element8, element9];

    var maxHeight;

    (function () {
        for (i = 0; i < elements.length; i++) {
            maxHeight = 0;
            elements[i].each(function () {
                switch (i) {
                    case 7:
                    case 8:
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

    var meetHeight = $('.tm-meet-us-text').outerHeight();
    $('[class*="tm-meet-us-img"]').css('height', meetHeight);

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
    var active = 'tm-active';

    //adding classes for main navigation menu
    $('#why-us-content').closest('body').find('a[href="why-us"]').addClass(active);
    $('#meet-us-content').closest('body').find('a[href="meet-us"]').addClass(active);
    $('#our-process-content').closest('body').find('a[href="our-process"]').addClass(active);
    $('[id*="services"]').closest('body').find('ul.nav.navbar-nav').find('a[href="social-networking-design-development"]').addClass(active);
    $('#our-work-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#contact-us-content').closest('body').find('a[href="contact-us"]').addClass(active);

    //adding classes for navigation submenu
    $('#services-social-content').closest('body').find('a[href="social-networking-design-development"]').addClass(active);
    $('#services-web-content').closest('body').find('a[href="web-design-and-development"]').addClass(active);
    $('#services-mobile-content').closest('body').find('a[href="mobile-application-development"]').addClass(active);
    $('#services-prototyping-content').closest('body').find('a[href="prototyping"]').addClass(active);
    $('#services-branding-content').closest('body').find('a[href="corporate-identity-and-brand-design"]').addClass(active);
    $('#services-strategy-and-planning-content').closest('body').find('a[href="strategic-planning-services"]').addClass(active);
    $('#services-seo-content').closest('body').find('a[href="search-engine-optimization"]').addClass(active);
    $('#services-copywriting-content').closest('body').find('a[href="copywriting"]').addClass(active);

    //adding classes for our work portfolio links
    $('#nissan-ireland-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#procurious-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#supercoucou-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#jumbletrail-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#sportlobster-content').closest('body').find('a[href="our-work"]').addClass(active);
    $('#coinaphoto-content').closest('body').find('a[href="our-work"]').addClass(active);

    //rearranging default hrefs with search engine optimized
    $('a[href="services"]').click(function () {
        window.location.href = "social-networking-design-development";
        return false;
    });

    var quoteFlag = false;

    //going to contact-us#quote and show #quote tab anyway
    $('a[href*="contact-us#quote"]').click(function () {
        quoteFlag = true;
        $('#quote-message a[href="#quote"]').tab('show').on('shown.bs.tab', function () {
            if (quoteFlag) {
                window.location = "#quote";
            }
        });
    });

    $('#quote-message a').click(function () {
        quoteFlag = false;
    });

    //disabling disabled attribute for submit before this submit is pressed
    $('#form-quote, #form-message').validator({
        disable: false
    });

    //checking if input file value was changed
    $('#quote-file').change(function () {
        var filename = $('#quote-file').val();
        if (filename) {
            filename = filename.replace(/^.*[\\\/]/, '');
            $('#quote-file-value').html(filename);
        } else {
            $('#quote-file-value').html('No file chosen');
        }
    });

    // device detection
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
        isMobile = true;

    if (isMobile) {
        $('#home-content video').remove();
    }
    
    function dump(obj) {
        var out = "";
        if (obj && typeof (obj) == "object") {
            for (var i in obj) {
                out += i + ": " + obj[i] + "\n";
            }
        } else {
            out = obj;
        }
        alert(out);
    }

    $('form#form-quote').on('submit', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var name = $('#quote-name').val();
        var email = $('#quote-email').val();
        var location = $('#quote-location').val();
        var phone = $('#quote-phone').val();
        var projectType = $('#quote-project-type').val();
        var budget = $('#quote-budget').val();
        var description = $('#quote-description').val();

        var data = new FormData($('#form-quote'));
        dump(data);
        
        $.ajax({
            url: '/pytex/sendmail/quote-file.php',
            type: 'POST',
            data: data,
            cache: false,
            processData: false, // Не обрабатываем файлы (Don't process the files)
            contentType: false, // Так jQuery скажет серверу что это строковой запрос
            success: function (respond) {
                alert(respond);
            }
        });

        if (name != '' && email != '' && description != '') {
            $.ajax({
                type: 'GET',
                url: '/pytex/sendmail/quote-mail.php?name=' + name + '&email=' + email + '&location=' + location + '&phone=' + phone + '&projecttype=' + projectType + '&budget=' + budget + '&description=' + description,
                cache: false,
                success: function (data) {
                    alert(data);
                }
            });
        }
        ;
        console.log(name + '\n' + email + '\n' + location + '\n' + phone + '\n' + projectType + '\n' + budget + '\n' + '\n' + description);
    });
});