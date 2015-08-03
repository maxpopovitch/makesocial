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
    print_r("$_FILES[tmp_name]");
    foreach ($_FILES as $file) {
        echo '123';
        if (move_uploaded_file($file['tmp_name'], $uploaddir . basename($file['name']))) {
            $files[] = realpath($uploaddir . $file['name']);
        } else {
            $error = true;
        }
    }
}