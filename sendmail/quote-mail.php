<?php

$mailto = 'max.donetsk@mail.ru';
$subject = 'The message from pytex.net';
$name = $_GET['name'];
$email = $_GET['email'];
$location = $_GET['location'];
$phone = $_GET['phone'];
$projecttype = $_GET['projecttype'];
$budget = $_GET['budget'];
$file = $_GET['file'];
$description = $_GET['description'];

$message = ("$name \n $email \n $location \n $phone \n $projecttype \n $budget \n $file \n $description");

if(mail ($mailto, $subject, $message)): {
    echo 'ok';
} else:  {
    echo 'not ok';
} endif;

print ("$message");

?>