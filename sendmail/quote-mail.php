<?php

$user_email = "demo@w1.nowa.center";
$mailto = 'max.donetsk@mail.ru';
$subject = 'Quote from pytex.net';
$name = $_GET['name'];
$email = $_GET['email'];
$location = $_GET['location'];
$phone = $_GET['phone'];
$projecttype = $_GET['projecttype'];
$budget = $_GET['budget'];
$file = $_GET['file'];
$description = $_GET['description'];
$ip = $_SERVER['REMOTE_ADDR'];

$message = ("Name: $name <br> Email: $email <br> Location: $location <br> Phone: $phone <br> Project type: $projecttype <br> Budget: $budget <br> Description: $description <br> IP: $ip");
if ($file != ''): {
        $filename = $file;

        $filepath = $file;

        $boundary = "--" . md5(uniqid(time()));

        $mailheaders = "MIME-Version: 1.0;\r\n";
        $mailheaders .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        $mailheaders .= "From: $user_email <$user_email>\r\n";
        $mailheaders .= "Reply-To: $user_email\r\n";

        $multipart = "--$boundary\r\n";
        $multipart .= "Content-Type: text/html; charset=windows-1251\r\n";
        $multipart .= "Content-Transfer-Encoding: base64\r\n";
        $multipart .= "\r\n";
        $multipart .= chunk_split(base64_encode(iconv("utf8", "windows-1251", $message)));
        $fp = fopen($filepath, "r");
        if (!$fp) {
            print "Не удается открыть файл $filepath";
            exit();
        }
        $file = fread($fp, filesize($filepath));
        fclose($fp);

        $message_part = "\r\n--$boundary\r\n";
        $message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";
        $message_part .= "Content-Transfer-Encoding: base64\r\n";
        $message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n";
        $message_part .= "\r\n";
        $message_part .= chunk_split(base64_encode($file));
        $message_part .= "\r\n--$boundary--\r\n";

        $multipart .= $message_part;

        if (mail($mailto, $subject, $multipart, $mailheaders)) {
            echo "ok";
        } else {
            echo "error1";
        };

        if (time_nanosleep(1, 0)) {
            unlink($filepath);
        }
    } else: {
        $mailheaders = "MIME-Version: 1.0\r\n";
        $mailheaders .= "Content-type: text/html; charset=windows-1251\r\n";
        $mailheaders .= "From: $user_email <$user_email>\r\n";

        if (mail($mailto, $subject, $message, $mailheaders)) {
            echo "ok";
        } else {
            echo "error";
        };
    } endif;
?>