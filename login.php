<?php

$correctUsername = 'g221210085@gmail.com';
$correctPassword = '12345';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];


    if (strcasecmp($username, $correctUsername) == 0 && $password == $correctPassword) {
        header('Location: ./index.html');
        exit();
    } else {
        echo "<script>alert('Login failed');</script>";
        echo "<script>window.location.href = './login.html';</script>";
    }
} else {
    header('Location: ./login.html');
    exit();
}
