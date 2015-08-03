<?php

// Здесь нужно сделать все проверки передаваемых файлов и вывести ошибки если нужно
// Переменная ответа

$data = array();

if (isset($_GET['file'])) {
    $error = false;
    $files = array();

    $uploaddir = './tmp'; // . - текущая папка где находится submit.php
    // Создадим папку если её нет

    if (!is_dir($uploaddir))
        mkdir($uploaddir, 0777);

    // переместим файлы из временной директории в указанную
    foreach ($_FILES as $file) {
        if (move_uploaded_file($file['tmp_name'], $uploaddir . basename($file['name']))) {
            echo '123';
            $files[] = realpath($uploaddir . $file['name']);
        } else {
            $error = true;
        }
    }
}