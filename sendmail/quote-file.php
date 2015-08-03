<?php

$uploaddir = 'tmp/';

if (!is_dir($uploaddir))
    mkdir($uploaddir, 0777);

echo $_FILES['quote-name']['name'];
if (move_uploaded_file($_FILES['quote-name']['tmp_name'], $uploaddir . basename($_FILES['quote-name']['name']))) {
    $files = realpath($uploaddir . $_FILES['quote-name']['name']);
}