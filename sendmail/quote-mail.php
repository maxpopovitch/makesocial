<?php

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

$message = ("$name \n $email \n $location \n $phone \n $projecttype \n $budget \n $file \n $description");

$filename = $file;

$filepath = $file;

$boundary = "--" . md5(uniqid(time()));
// генерируем разделитель

$mailheaders = "MIME-Version: 1.0;\r\n";
$mailheaders .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
// разделитель указывается в заголовке в параметре boundary 

$mailheaders .= "From: $user_email <$user_email>\r\n";
$mailheaders .= "Reply-To: $user_email\r\n";

$multipart = "--$boundary\r\n";
$multipart .= "Content-Type: text/html; charset=windows-1251\r\n";
$multipart .= "Content-Transfer-Encoding: base64\r\n";
$multipart .= "\r\n";
$multipart .= chunk_split(base64_encode(iconv("utf8", "windows-1251", $message)));
// первая часть само сообщение
// Закачиваем файл 
$fp = fopen($filepath, "r");
if (!$fp) {
    print "Не удается открыть файл $filepath";
    exit();
}
$file = fread($fp, filesize($filepath));
fclose($fp);
// чтение файла


$message_part = "\r\n--$boundary\r\n";
$message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";
$message_part .= "Content-Transfer-Encoding: base64\r\n";
$message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n";
$message_part .= "\r\n";
$message_part .= chunk_split(base64_encode($file));
$message_part .= "\r\n--$boundary--\r\n";
// второй частью прикрепляем файл, можно прикрепить два и более файла

$multipart .= $message_part;

mail($to, $subject, $multipart, $mailheaders);
// отправляем письмо 
//удаляем файлы через 60 сек.
//if (time_nanosleep(5, 0)) {
//    unlink($filepath);
//}
// удаление файла
?>