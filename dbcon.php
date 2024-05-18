<?php
// ini_set("display_errors", 1);
$mysqli = new mysqli("localhost", "admin", "", "oktika");

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}
?>
