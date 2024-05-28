<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "ban01_skp-dp_sde_dk";
$password = "y4pz5qpy";
$dbname = "ban01_skp_dp_sde_dk";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

// Get the JSON data
$data = json_decode(file_get_contents('php://input'), true);

$firstname = $data['firstname'];
$lastname = $data['lastname'];
$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['psw'], PASSWORD_DEFAULT);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (First_name, Last_name, Username, Email, Password_Hash) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $firstname, $lastname, $username, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["message" => "User registered successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
