<?php


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

$username = $data['username'];
$password = $data['psw'];

// Prepare and bind
$stmt = $conn->prepare("SELECT ID, Username,Password_hash FROM users WHERE Username = ?");
$stmt->bind_param("s", $username);

$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($id, $db_password);
    $stmt->fetch();
    
    if (password_verify($password, $db_password)) { 
        header('Content-Type: application/json');
        echo json_encode(["message" => "Login successful"]);
    } else {
        header('Content-Type: application/json');
        echo json_encode(["message" => "Invalid username or password"]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(["message" => "Invalid username or password"]);
}

$stmt->close();
$conn->close();