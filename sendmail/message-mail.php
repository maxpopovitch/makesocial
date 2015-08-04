<?php

$user_email = "demo@w1.nowa.center";
$mailto = 'info@pytex.net';
$subject = 'Message from pytex.net';
$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$website = $_GET['website'];
$messagebody = $_GET['message'];
$ip = $_SERVER['REMOTE_ADDR'];

$message = ("Name: $name <br> Email: $email <br> Phone: $phone <br> Website: $website <br> Message: $messagebody <br> IP: $ip");
$mailheaders = "MIME-Version: 1.0\r\n";
$mailheaders .= "Content-type: text/html; charset=windows-1251\r\n";
$mailheaders .= "From: $user_email <$user_email>\r\n";

if (mail($mailto, $subject, $message, $mailheaders)) {
    echo "ok";
} else {
    echo "error";
};
?>