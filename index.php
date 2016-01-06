<?php

$includes_system_path = 'includes/';

$include_page = 'home';
$pages = array(
    'home',
    'social-networking-design-development',
    'web-design-and-development',
    'web-development',
    'mobile-application-development',
    'responsive-and-mobile',
    'prototyping',
    'webrtc-development',
    'ecommerce-development',
    'corporate-identity-and-brand-design',
    'strategic-planning-services',
    'search-engine-optimization',
    'api-3rd-party-integration',
    'analytics-and-support',
    'copywriting',
    'our-process',
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