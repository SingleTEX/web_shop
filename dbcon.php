<?php

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

$host="localhost";
$user="admin";
$password="";
$database="oktika";

    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset("utf8mb4");

$user = "";
$password = "";
