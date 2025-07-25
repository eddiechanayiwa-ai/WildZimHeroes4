<?php
$host = "localhost";
$db = "zimheroes";
$user = "root";        // Replace with your MySQL user
$pass = "";            // Replace with your password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT email, display_name, adopted_animal, signup_time, last_login FROM users";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $users[] = $row;
  }
}

header('Content-Type: application/json');
echo json_encode($users);

$conn->close();
?>
