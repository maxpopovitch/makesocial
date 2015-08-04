<?php

$includes_system_path = 'includes/';

$include_page = 'home';
$pages = array(
    'home',
    'why-us',
    'meet-us',
    'social-networking-design-development',
    'web-design-and-development',
    'mobile-application-development',
    'prototyping',
    'corporate-identity-and-brand-design',
    'strategic-planning-services',
    'search-engine-optimization',
    'copywriting',
    'our-process',
    'our-work',
    'nissan-ireland',
    'procurious',
    'supercoucou',
    'jumbletrail',
    'sportlobster',
    'coinaphoto',
    'contact-us',
    'terms-and-conditions',
    'privacy-policy'
);

if (isset($_GET['page'])) {
    $page = strval($_GET['page']);
    if (in_array($page, $pages)) {
        $include_page = $page;
    }
}

require_once($includes_system_path . 'header.php');
require_once($includes_system_path . $include_page . '-content.php');
require_once($includes_system_path . 'footer.php');
?>