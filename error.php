<?php
$includes_system_path = 'includes/';

$include_page = '404';

$pages = array(
    '404'
);

if (isset($_GET['page'])) {
    $page = strval($_GET['page']);
    if (in_array($page, $pages)) {
        $include_page = '404';
    }
}

require_once($includes_system_path . 'header.php');
require_once($includes_system_path . $include_page . '-content.php');
require_once($includes_system_path . 'footer.php');
?>
<script type="text/javascript">
    var minContentHeight = function () {
        $('#errorpage > div').remove();
        $('#errorpage').closest('html').addClass('tm-errorpage');
        height = $(window).height() - $('.tm-wrapper').outerHeight() - $('footer').outerHeight();
        $('#errorpage > section').css('min-height', height);
    };
    $(window).load(minContentHeight);
    $(window).resize(minContentHeight);
</script>